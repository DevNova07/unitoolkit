import { NextRequest, NextResponse } from "next/server";
import { generateCaptions } from "@/lib/aiEngine";
import { GeneratorOptions } from "@/lib/types";

export interface ExtendedGeneratorOptions extends GeneratorOptions {
  generatorType?: "captions" | "bio" | "status" | "shayari" | "quotes" | "hashtags" | "name";
  type?: "captions" | "bio" | "status" | "shayari" | "quotes" | "hashtags" | "name";
  format?: "2-line" | "4-line" | "bullets" | "minimal";
}

export async function POST(req: NextRequest) {
  try {
    const body: ExtendedGeneratorOptions = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const generatorType = body.generatorType || body.type || "captions";
    const prompt = body.prompt || "aesthetic daily life";
    const count = body.count || 8;
    const language = body.language || (generatorType === "shayari" ? "hi" : "en");
    const platform = body.platform || "instagram";

    const grokKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // 1. Specialized System Prompt per Generator Engine
    let systemPrompt = "";
    if (generatorType === "bio") {
      systemPrompt = `You are a master social media bio designer and aesthetic font styler for ${platform}, Instagram, and Twitter.
Create exactly ${count} unique, high-converting, aesthetic profile bios based on the topic: "${prompt}".
Each bio should have 3 to 4 stylish lines with relevant emojis, aesthetic bullet points (like 👑, ⚡, 📍, 🎯, 🖤), and clean line breaks (use \\n).
Format: Return ONLY a JSON array of strings, where each string is a complete multi-line bio.`;
    } else if (generatorType === "status") {
      systemPrompt = `You are an expert viral WhatsApp status copywriter.
Generate exactly ${count} unique, punchy, relatable status updates (in ${language === "hi" ? "authentic Hindi Devanagari script" : language === "hinglish" ? "Hinglish (Hindi written in Roman English)" : "English"}) based on the topic: "${prompt}".
Each status should be short, emotional or attitude-driven, under 120 characters, with modern emojis.
Format: Return ONLY a JSON array of strings.`;
    } else if (generatorType === "shayari") {
      systemPrompt = `You are a legendary Urdu & Hindi poet (Shayar) specializing in contemporary 2-line and 4-line Shayari.
Generate exactly ${count} deeply touching, authentic, original Shayaris based on the mood/topic: "${prompt}".
Language: ${language === "hi" ? "Pure Hindi (हिंदी देवनागरी लिपि)" : "Hinglish (Roman Hindi script)"}.
Each Shayari should rhyme beautifully with authentic emotion (Ishq, Dard, Attitude, Dosti, or Sukoon).
Format: Return ONLY a JSON array of strings (use \\n for line breaks between couplets).`;
    } else if (generatorType === "name") {
      systemPrompt = `You are an expert global onomastician and baby name stylist.
Generate exactly ${count} beautiful, meaningful baby/personal names based on: "${prompt}".
Format: Return ONLY a valid JSON array of objects with keys: "name", "gender", "meaning", "origin", "whyItMatches", "pronunciation".`;
    } else if (generatorType === "quotes" || generatorType === "hashtags") {
      systemPrompt = `You are an elite mindset philosopher and growth copywriter.
Generate exactly ${count} powerful, high-conviction wisdom quotes and viral hashtags based on: "${prompt}".
Each quote should be memorable, thought-provoking, and include 3 relevant hashtags at the bottom.
Format: Return ONLY a JSON array of strings.`;
    } else {
      // Standard AI Caption Studio
      systemPrompt = `You are an elite viral social media copywriter for ${platform}, Reels, and TikTok.
Generate exactly ${count} unique, scroll-stopping, high-CTR captions based on: "${prompt}".
Style: ${body.style || "aesthetic"} | Tone: ${body.tone || "confident"}
${body.includeEmojis !== false ? "Include modern natural emojis." : "No emojis."}
Format: Return ONLY a JSON array of strings.`;
    }

    // 1. Attempt xAI Grok API (Primary)
    if (grokKey) {
      try {
        const grokRes = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${grokKey}`,
          },
          body: JSON.stringify({
            model: "grok-2-latest",
            messages: [
              {
                role: "system",
                content: `${systemPrompt}\nIMPORTANT: Output valid JSON array of strings ONLY. No preamble, no markdown formatting.`,
              },
              {
                role: "user",
                content: `Generate ${count} ${generatorType} for topic: "${prompt}" in ${language} for platform ${platform}.`,
              },
            ],
            temperature: 0.8,
          }),
        });

        if (grokRes.ok) {
          const data = await grokRes.json();
          const rawText = data?.choices?.[0]?.message?.content?.trim();

          if (rawText) {
            const cleanedJson = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleanedJson);
            if (Array.isArray(parsed) && parsed.length > 0) {
              return NextResponse.json({
                success: true,
                source: "grok-2",
                generatorType,
                captions: parsed.slice(0, count),
              });
            }
          }
        }
      } catch (grokErr) {
        console.warn("Grok API call fallback:", grokErr);
      }
    }

    // 2. Attempt Google Gemini Flash API (Secondary)
    if (geminiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: systemPrompt },
                    { text: `User Prompt/Topic: "${prompt}"` },
                  ],
                },
              ],
              generationConfig: {
                temperature: 0.85,
                maxOutputTokens: 1200,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

          if (rawText) {
            const cleanedJson = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleanedJson);
            if (Array.isArray(parsed) && parsed.length > 0) {
              return NextResponse.json({
                success: true,
                source: "gemini-1.5-flash",
                generatorType,
                captions: parsed.slice(0, count),
              });
            }
          }
        }
      } catch (geminiErr) {
        console.warn("Gemini API call fallback to smart engine:", geminiErr);
      }
    }

    // 2. High-Performance Local Fallbacks for all 5 types
    let fallbackResults: string[] = [];

    if (generatorType === "bio") {
      fallbackResults = [
        `👑 King in my own realm\n⚡ Silent moves • Loud success\n📍 Mumbai | Tech Founder 🚀\n🎯 No competition • Only progress`,
        `✨ Creating my own sunshine\n🌸 Aesthetic soul with fierce ambition\n🕊️ Living in chapters, not pages\n☕ Book lover & visual storyteller`,
        `🔱 Mahakal Ke Bhakt 🔱\n🕶️ Simple living • High thinking\n🦁 Playing in my own league\n🔥 Hustle in silence • Let results talk`,
        `🖤 Unapologetically me\n📈 Chasing vision, not validation\n💎 Self-made • Relentless focus\n✉️ DMs open for collaborations`,
        `🌿 Minimalist vibes & deep thoughts\n📸 Capturing frames that tell stories\n✈️ Wanderlust • Next stop: Mountains\n🎧 Lo-fi beats on repeat`,
      ];
    } else if (generatorType === "shayari") {
      if (language === "hi") {
        fallbackResults = [
          `खामोशी से अपनी पहचान बनाओ,\nवक्त खुद तुम्हारा नाम बताएगा। 👑`,
          `इश्क वो नहीं जो तुझे मेरा कर दे,\nइश्क वो है जो तुझे किसी और का होने न दे। ❤️`,
          `मुस्कुराने की आदत भी कितनी अजीब है,\nगम को छुपाकर महफिल सजा देती है। 🥀`,
          `हम समंदर हैं हमें खामोश ही रहने दो,\nअगर मचल गए तो शहर ले डूबेंगे। 🌊⚡`,
          `तेरे जाने के बाद ये जाना हमने,\nसुकून सिर्फ तेरी बातों में था। 💔`,
        ];
      } else {
        fallbackResults = [
          `Khamoshi se apni pehchan banao,\nWaqt khud tumhara naam batayega. 👑`,
          `Ishq wo nahi jo tujhe mera kar de,\nIshq wo hai jo kisi aur ka hone na de. ❤️`,
          `Muskurane ki aadat bhi kitni ajeeb hai,\nGham ko chhupa kar mehfil saja deti hai. 🥀`,
          `Hum samandar hain humein khamosh hi rehne do,\nAgar machal gaye toh shahar le doobenge. ⚡`,
          `Tere jaane ke baad ye jaana humne,\nSukoon sirf teri baaton me tha. 💔`,
        ];
      }
    } else if (generatorType === "status") {
      fallbackResults = [
        "खामोशी सबसे बड़ा जवाब है, बस समझने वाले का कद बड़ा होना चाहिए। 👑",
        "Pahadon me subah ki pehli chai aur sukoon. Bas yahi hai zindagi 🏔️☕",
        "काम ऐसा करो कि पहचान बन जाए, हर कदम ऐसा चलो कि निशान बन जाए ✨",
        "Log kya kahenge ye soch kar jeena chhod doge toh zindagi kab jeeyoge? 🕶️",
        "Silence is the ultimate flex when words are cheap 💎",
        "Making peace with the journey while working for the destination 🚀",
      ];
    } else if (generatorType === "name") {
      fallbackResults = [
        JSON.stringify({ name: "Aarav", gender: "boy", meaning: "Peaceful sound, wisdom and radiant light", origin: "Sanskrit", whyItMatches: "Timeless 2-syllable Sanskrit name with auspicious rhythm.", pronunciation: "Ah-ruhv" }),
        JSON.stringify({ name: "Saanvi", gender: "girl", meaning: "Goddess Lakshmi, sacred beauty and grace", origin: "Sanskrit", whyItMatches: "Lyrical and modern with deep spiritual roots.", pronunciation: "Sahn-vee" }),
        JSON.stringify({ name: "Zayn", gender: "boy", meaning: "Grace, beauty, and excellence", origin: "Arabic", whyItMatches: "Short 1-syllable global name with effortless pronunciation.", pronunciation: "Zain" }),
        JSON.stringify({ name: "Inaya", gender: "girl", meaning: "Divine care, concern and guardian blessing", origin: "Arabic", whyItMatches: "Sweet vowel ending with protective meaning.", pronunciation: "Ee-nah-yah" }),
        JSON.stringify({ name: "Bodhi", gender: "unisex", meaning: "Awakening, enlightenment and supreme wisdom", origin: "Sanskrit / Pali", whyItMatches: "Globally recognized modern gender-neutral name.", pronunciation: "Boh-dee" }),
        JSON.stringify({ name: "Kiara", gender: "girl", meaning: "Bright, clear, first morning beam of light", origin: "Italian / Hindi", whyItMatches: "Cross-cultural international charm.", pronunciation: "Kee-ah-rah" }),
        JSON.stringify({ name: "Advik", gender: "boy", meaning: "Unique, unparalleled and one-of-a-kind", origin: "Sanskrit", whyItMatches: "Modern punchy sound with distinctive virtue.", pronunciation: "Uhd-veek" }),
        JSON.stringify({ name: "Noor", gender: "unisex", meaning: "Divine celestial radiance and illumination", origin: "Arabic", whyItMatches: "Short, luminous, and versatile.", pronunciation: "Noor" }),
      ];
    } else {
      fallbackResults = generateCaptions({
        prompt,
        platform: (platform as GeneratorOptions["platform"]) || "instagram",
        style: body.style || "aesthetic",
        tone: body.tone || "confident",
        length: "medium",
        language: "en",
        count,
      });
    }

    return NextResponse.json({
      success: true,
      source: "local-smart-engine",
      generatorType,
      captions: fallbackResults,
    });
  } catch (error) {
    console.error("Generator route error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
