export interface ShayariItem {
  id: string;
  hindi: string;
  hinglish: string;
  category: string;
  format: "2-line" | "4-line" | "short";
  likes: number;
}

export interface ShayariCategorySection {
  id: string;
  slug: string;
  title: string;
  badge: string;
  count: string;
  intro: string;
  items: ShayariItem[];
}

export const SHAYARI_SECTIONS: ShayariCategorySection[] = [
  // 1. Love Shayari (❤️)
  {
    id: "love-shayari",
    slug: "love",
    title: "❤️ Love Shayari (मोहब्बत शायरी)",
    badge: "Most Loved",
    count: "30+ Shayari",
    intro:
      "Express your unconditional love, heartfelt affection, and romantic feelings with the best Love Shayari in Hindi and Hinglish. Perfect for sharing with your crush, boyfriend, girlfriend, or spouse.",
    items: [
      {
        id: "ls-1",
        hindi: "तेरे मुस्कुराने का असर सेहत पे होता है,\nलोग पूछ लेते हैं दवा का नाम क्या है! ❤️✨",
        hinglish: "Tere muskurane ka asar sehat pe hota hai,\nLog poochh lete hain dawa ka naam kya hai! ❤️✨",
        category: "love",
        format: "2-line",
        likes: 42100,
      },
      {
        id: "ls-2",
        hindi: "रूह तक छू जाती है तेरी सादगी,\nयूँ ही नहीं हम तुम पर मर मिटे हैं! 🌹🤍",
        hinglish: "Rooh tak chhoo jaati hai teri saadgi,\nYoon hi nahi hum tum par mar mite hain! 🌹🤍",
        category: "love",
        format: "2-line",
        likes: 38900,
      },
      {
        id: "ls-3",
        hindi: "कुछ ख़ास नहीं बस इतनी सी मोहब्बत है मेरी,\nहर रात का आख़िरी ख़्याल और हर सुबह की पहली सोच हो तुम! 🌙🌅",
        hinglish: "Kuch khas nahi bas itni si mohabbat hai meri,\nHar raat ka aakhiri khayal aur har subah ki pehli soch ho tum! 🌙🌅",
        category: "love",
        format: "2-line",
        likes: 45600,
      },
      {
        id: "ls-4",
        hindi: "नफ़रत के इस दौर में मोहब्बत की मिसाल हो तुम,\nमेरी हर दुआ में शामिल वो खूबसूरत सवाल हो तुम! 💖🤲",
        hinglish: "Nafrat ke is daur mein mohabbat ki misaal ho tum,\nMeri har dua mein shaamil wo khoobsurat sawaal ho tum! 💖🤲",
        category: "love",
        format: "2-line",
        likes: 36800,
      },
      {
        id: "ls-5",
        hindi: "दिल के बाज़ार में दौलत नहीं देखी जाती,\nप्यार हो जाए तो सूरत नहीं देखी जाती!\nएक ही इंसान पे लुटा दो अपनी सारी खुशियाँ,\nक्योंकि मोहब्बत में कोई ज़रूरत नहीं देखी जाती! 🌸🥂",
        hinglish: "Dil ke bazaar mein daulat nahi dekhi jaati,\nPyaar ho jaaye to soorat nahi dekhi jaati!\nEk hi insaan pe luta do apni saari khushiyan,\nKyunki mohabbat mein koi zaroorat nahi dekhi jaati! 🌸🥂",
        category: "love",
        format: "4-line",
        likes: 48200,
      },
      {
        id: "ls-6",
        hindi: "तेरी आँखों के सिवा दुनिया में रखा क्या है,\nये समंदर भी तेरे हुस्न पे सदके जाता है! 👁️🤍",
        hinglish: "Teri aankhon ke siwa duniya mein rakha kya hai,\nYe samandar bhi tere husn pe sadke jaata hai! 👁️🤍",
        category: "love",
        format: "2-line",
        likes: 43700,
      },
      {
        id: "ls-7",
        hindi: "इश्क़ वो नहीं जो तुझे मेरा कर दे,\nइश्क़ वो है जो तुझे किसी और का होने ना दे! 🌹❤️",
        hinglish: "Ishq wo nahi jo tujhe mera kar de,\nIshq wo hai jo tujhe kisi aur ka hone na de! 🌹❤️",
        category: "love",
        format: "2-line",
        likes: 41900,
      },
      {
        id: "ls-8",
        hindi: "तू लाख भुला कर देख मुझे,\nमैं हर दुआ में तेरे साथ नज़र आऊँगा! 🕊️🤲",
        hinglish: "Tu laakh bhula kar dekh mujhe,\nMain har dua mein tere saath nazar aaunga! 🕊️🤲",
        category: "love",
        format: "2-line",
        likes: 39600,
      },
      {
        id: "ls-9",
        hindi: "तेरी आँखों में जो कशिश है वो कहीं और नहीं,\nहम तो फ़क़ीर थे तेरी एक मुस्कान ने बादशाह बना दिया! 🌹✨",
        hinglish: "Teri aankhon mein jo kashish hai wo kahin aur nahi,\nHum to faqeer the teri ek muskaan ne baadshah bana diya! 🌹✨",
        category: "love",
        format: "2-line",
        likes: 47800,
      },
      {
        id: "ls-10",
        hindi: "मोहब्बत में झुकना कोई बुरी बात नहीं,\nसूरज भी डूब जाता है चाँद के दीदार के लिए! 🌙❤️",
        hinglish: "Mohabbat mein jhukna koi buri baat nahi,\nSooraj bhi doob jaata hai chaand ke deedaar ke liye! 🌙❤️",
        category: "love",
        format: "2-line",
        likes: 51200,
      },
      {
        id: "ls-11",
        hindi: "इश्क ने 'ग़ालिब' निकम्मा कर दिया,\nवर्ना हम भी आदमी थे काम के! 📜🍷",
        hinglish: "Ishq ne 'Ghalib' nikamma kar diya,\nvarna hum bhi aadmi the kaam ke! 📜🍷",
        category: "love",
        format: "2-line",
        likes: 62400,
      },
      {
        id: "ls-12",
        hindi: "तुझे देखा तो ये जाना सनम,\nप्यार होता है दीवाना सनम!\nअब यहाँ से कहाँ जाएँ हम,\nतेरी बाहों में मर जाएँ हम! 🌸🤍",
        hinglish: "Tujhe dekha to ye jaana sanam,\nPyaar hota hai deewana sanam!\nAb yahan se kahan jaayein hum,\nTeri baahon mein mar jaayein hum! 🌸🤍",
        category: "love",
        format: "4-line",
        likes: 46700,
      },
    ],
  },

  // 2. Sad Shayari (💔)
  {
    id: "sad-shayari",
    slug: "sad",
    title: "💔 Sad Shayari (दर्द भरी शायरी)",
    badge: "Heartfelt Emotions",
    count: "35+ Shayari",
    intro:
      "When words fail and the heart feels heavy, Sad Shayari helps articulate unsaid pain, late-night tears, and silent heartbreak. Here are deep, emotional verses that touch the soul.",
    items: [
      {
        id: "ss-1",
        hindi: "ख़ामोशी बहुत कुछ कहती है,\nकान लगाकर नहीं दिल लगाकर सुनो! 🖤🥀",
        hinglish: "Khamoshi bahut kuch kehti hai,\nKaan lagakar nahi dil lagakar suno! 🖤🥀",
        category: "sad",
        format: "2-line",
        likes: 39500,
      },
      {
        id: "ss-2",
        hindi: "हम तो हँसते हैं दूसरों को हँसाने के लिए,\nवरना ज़ख़्म इतने हैं कि ठीक से रोया भी नहीं जाता! 🌧️",
        hinglish: "Hum to hanste hain doosron ko hasaane ke liye,\nWarna zakhm itne hain ki theek se roya bhi nahi jaata! 🌧️",
        category: "sad",
        format: "2-line",
        likes: 41200,
      },
      {
        id: "ss-3",
        hindi: "बहुत अंदर तक तबाह कर देते हैं,\nवो अश्क जो आँखों से कभी गिरते नहीं! 💔",
        hinglish: "Bahut andar tak tabaah kar dete hain,\nWo ashk jo aankhon se kabhi girte nahi! 💔",
        category: "sad",
        format: "2-line",
        likes: 35800,
      },
      {
        id: "ss-4",
        hindi: "वक़्त ने सिखा दी हर बात की गहराई,\nअब किसी के बदलने का अफ़सोस नहीं होता! 🕊️",
        hinglish: "Waqt ne sikha di har baat ki gehraai,\nAb kisi ke badalne ka afsos nahi hota! 🕊️",
        category: "sad",
        format: "2-line",
        likes: 37400,
      },
      {
        id: "ss-5",
        hindi: "छोड़ दिया हमने लोगों के पीछे भागना,\nजिसको जितनी कदर थी वो उतना साथ निभा गया! 🥀🖤",
        hinglish: "Chhod diya humne logon ke peeche bhaagna,\nJisko jitni kadar thi wo utna saath nibha gaya! 🥀🖤",
        category: "sad",
        format: "2-line",
        likes: 44100,
      },
      {
        id: "ss-6",
        hindi: "दर्द की भी अपनी एक अदा है,\nये सिर्फ सहने वालों पर ही फिदा है! 🌧️💔",
        hinglish: "Dard ki bhi apni ek adaa hai,\nYe sirf sehne waalon par hi fidaa hai! 🌧️💔",
        category: "sad",
        format: "2-line",
        likes: 39800,
      },
      {
        id: "ss-7",
        hindi: "काँच की तरह होते हैं कुछ दिल,\nटूट भी जाएँ तो किसी को चुभते नहीं! 🪞🥀",
        hinglish: "Kaanch ki tarah hote hain kuch dil,\nToot bhi jaayein to kisi ko chubhte nahi! 🪞🥀",
        category: "sad",
        format: "2-line",
        likes: 36500,
      },
      {
        id: "ss-8",
        hindi: "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले,\nबहुत निकले मिरे अरमाँ लेकिन फिर भी कम निकले! 📜🕊️",
        hinglish: "Hazaaron khwahishein aisi ki har khwahish pe dam nikle,\nBahut nikle mere armaan lekin phir bhi kam nikle! 📜🕊️",
        category: "sad",
        format: "2-line",
        likes: 68900,
      },
      {
        id: "ss-9",
        hindi: "बेवजह नहीं रोता कोई इश्क़ में फ़राज़,\nजिसे खुद से ज़्यादा चाहा हो वो रुला ही देता है! 🌧️🖤",
        hinglish: "Bewajah nahi rota koi ishq mein Faraz,\nJise khud se zyada chaaha ho wo rula hi deta hai! 🌧️🖤",
        category: "sad",
        format: "2-line",
        likes: 54200,
      },
    ],
  },

  // 3. Attitude Shayari (😎)
  {
    id: "attitude-shayari",
    slug: "attitude",
    title: "😎 Attitude Shayari (तेवर और रुतबा)",
    badge: "High Swag",
    count: "30+ Shayari",
    intro:
      "Establish your presence and show off your fearless confidence. These high-attitude, savage, and royal swag shayari lines are perfect for Instagram captions, bio, and WhatsApp status.",
    items: [
      {
        id: "as-1",
        hindi: "हम वहीं खड़े होते हैं जहाँ मैटर बड़े होते हैं,\nशेर के पाँव में अगर काँटा चुभ जाए तो कुत्ते राज नहीं करते! 👑🔥",
        hinglish: "Hum wahin khade hote hain jahan matter bade hote hain,\nSher ke paanv mein agar kaanta chubh jaaye to kutte raaj nahi karte! 👑🔥",
        category: "attitude",
        format: "2-line",
        likes: 49800,
      },
      {
        id: "as-2",
        hindi: "हमारी शराफ़त का अंदाज़ा तुम क्या लगाओगे,\nहम तो आँखें झुका कर भी दिलों पे हुकूमत करते हैं! 🦁⚡",
        hinglish: "Hamari sharaafat ka andaaza tum kya lagaoge,\nHum to aankhein jhuka kar bhi dilon pe hukoomat karte hain! 🦁⚡",
        category: "attitude",
        format: "2-line",
        likes: 44200,
      },
      {
        id: "as-3",
        hindi: "दुश्मन भी हमारे नाम से काँप उठते हैं,\nक्योंकि हम जंग बातों से नहीं, तेवरों से जीतते हैं! 💣",
        hinglish: "Dushman bhi hamare naam se kaanp uthte hain,\nKyunki hum jung baaton se nahi, tevaron se jeette hain! 💣",
        category: "attitude",
        format: "2-line",
        likes: 41800,
      },
      {
        id: "as-4",
        hindi: "पहचान ऐसी बनाओ कि लोग तुम्हें फॉलो करें,\nब्लॉक नहीं! 🕶️💯",
        hinglish: "Pehchaan aisi banao ki log tumhe follow karein,\nBlock nahi! 🕶️💯",
        category: "attitude",
        format: "2-line",
        likes: 38200,
      },
      {
        id: "as-5",
        hindi: "हथियार तो शौक के लिए रखते हैं,\nवरना खौफ पैदा करने के लिए हमारी आँखें ही काफी हैं! 👑💥",
        hinglish: "Hathiyaar to shauk ke liye rakhte hain,\nWarna khauf paida karne ke liye hamari aankhein hi kaafi hain! 👑💥",
        category: "attitude",
        format: "2-line",
        likes: 51200,
      },
      {
        id: "as-6",
        hindi: "वक्त आने दो बेटा, जवाब भी देंगे,\nऔर हिसाब भी बराबर लेंगे! ⏳🦁",
        hinglish: "Waqt aane do beta, jawaab bhi denge,\nAur hisaab bhi baraabar lenge! ⏳🦁",
        category: "attitude",
        format: "2-line",
        likes: 46700,
      },
      {
        id: "as-7",
        hindi: "हमारी बराबरी करने की कोशिश मत करना,\nशेर का शिकार करने के लिए कलेजा चाहिए, बातें नहीं! ⚡👊",
        hinglish: "Hamari baraabari karne ki koshish mat karna,\nSher ka shikaar karne ke liye kaleja chahiye, baatein nahi! ⚡👊",
        category: "attitude",
        format: "2-line",
        likes: 48900,
      },
      {
        id: "as-8",
        hindi: "तेवर हमारे वही पुराने हैं,\nहम आज भी अपने उसूलों के दीवाने हैं! 👑🦁",
        hinglish: "Tevar hamare wahi puraane hain,\nHum aaj bhi apne usoolon ke deewane hain! 👑🦁",
        category: "attitude",
        format: "2-line",
        likes: 67100,
      },
      {
        id: "as-9",
        hindi: "जो हमारे मुकद्दर में नहीं वो हमारी ज़िद है,\nऔर जो हमारी ज़िद है वो हमारा हक है! 💥🔥",
        hinglish: "Jo hamare muqaddar mein nahi wo hamari zid hai,\nAur jo hamari zid hai wo hamara haq hai! 💥🔥",
        category: "attitude",
        format: "2-line",
        likes: 58400,
      },
      {
        id: "as-10",
        hindi: "समंदर की तरह खामोश हूँ मैं,\nतूफान का इंतजार कर बेटा! 🌊⚡",
        hinglish: "Samandar ki tarah khamosh hoon main,\nToofan ka intezaar kar beta! 🌊⚡",
        category: "attitude",
        format: "2-line",
        likes: 52900,
      },
    ],
  },

  // 4. Romantic Shayari (💕)
  {
    id: "romantic-shayari",
    slug: "romantic",
    title: "💕 Romantic Shayari (इश्क़ और रोमांस)",
    badge: "Sweet Romance",
    count: "25+ Shayari",
    intro:
      "Sweet, heart-touching, and poetic romantic verses to express your endless adoration and ignite the spark of love in your relationship.",
    items: [
      {
        id: "rs-1",
        hindi: "तू चाँद और मैं सितारा होता,\nआसमाँ में एक आशियाना हमारा होता,\nलोग तुझे दूर से देखते,\nपास से देखने का हक़ बस हमारा होता! 🌙🤍",
        hinglish: "Tu chaand aur main sitaara hota,\nAasmaan mein ek aashiyana hamara hota,\nLog tujhe door se dekhte,\nPaas se dekhne ka haq bas hamara hota! 🌙🤍",
        category: "romantic",
        format: "4-line",
        likes: 46800,
      },
      {
        id: "rs-2",
        hindi: "आँखों की चमक, चेहरे की हँसी हो तुम,\nमेरी ज़िंदगी की सबसे खूबसूरत खुशी हो तुम! 🌹✨",
        hinglish: "Aankhon ki chamak, chehre ki hansi ho tum,\nMeri zindagi ki sabse khoobsurat khushi ho tum! 🌹✨",
        category: "romantic",
        format: "2-line",
        likes: 41500,
      },
      {
        id: "rs-3",
        hindi: "दिल की धड़कन बनकर तुम धड़कते हो,\nसाँसों की खुशबू बनकर तुम महकते हो! 💖",
        hinglish: "Dil ki dhadkan bankar tum dhadakte ho,\nSaanson ki khushboo bankar tum mehakte ho! 💖",
        category: "romantic",
        format: "2-line",
        likes: 37900,
      },
    ],
  },

  // 5. Friendship / Dosti Shayari (🤝)
  {
    id: "dosti-shayari",
    slug: "dosti",
    title: "🤝 Friendship & Dosti Shayari (यारी शायरी)",
    badge: "True Yaari",
    count: "25+ Shayari",
    intro:
      "Celebrate lifelong bonds, brotherhood, and crazy memories with the best Dosti Shayari dedicated to your partners-in-crime.",
    items: [
      {
        id: "ds-1",
        hindi: "दोस्ती में दोस्त, दोस्त का ख़ुदा होता है,\nमहसूस तब होता है जब वो जुदा होता है! 🤝🌸",
        hinglish: "Dosti mein dost, dost ka khuda hota hai,\nMehsoos tab hota hai jab wo juda hota hai! 🤝🌸",
        category: "friendship",
        format: "2-line",
        likes: 43200,
      },
      {
        id: "ds-2",
        hindi: "लाखों मिलेंगे ज़िंदगी की राहों में,\nमगर तुम जैसा यार हर किसी को नसीब नहीं होता! 🤜🤛🔥",
        hinglish: "Laakhon milenge zindagi ki raahon mein,\nMagar tum jaisa yaar har kisi ko naseeb nahi hota! 🤜🤛🔥",
        category: "friendship",
        format: "2-line",
        likes: 47100,
      },
      {
        id: "ds-3",
        hindi: "दोस्ती वो नहीं जो जान देती है,\nदोस्ती वो है जो हर मोड़ पर मुस्कान देती है! 🥂",
        hinglish: "Dosti wo nahi jo jaan deti hai,\nDosti wo hai jo har mod par muskaan deti hai! 🥂",
        category: "friendship",
        format: "2-line",
        likes: 38400,
      },
    ],
  },

  // 6. Motivational Shayari (💪)
  {
    id: "motivational-shayari",
    slug: "motivational",
    title: "💪 Motivational Shayari (हौसलों की उड़ान)",
    badge: "High Energy",
    count: "20+ Shayari",
    intro:
      "Ignite your burning desire to achieve greatness. These powerful motivational verses build discipline, resilience, and conquer self-doubt.",
    items: [
      {
        id: "ms-1",
        hindi: "मंज़िलें उन्हीं को मिलती हैं जिनके सपनों में जान होती है,\nपंखों से कुछ नहीं होता, हौसलों से उड़ान होती है! 🚀✨",
        hinglish: "Manzilein unhi ko milti hain jinke sapno mein jaan hoti hai,\nPankhon se kuch nahi hota, hauslon se udaan hoti hai! 🚀✨",
        category: "motivational",
        format: "2-line",
        likes: 48900,
      },
      {
        id: "ms-2",
        hindi: "मुश्किलों से भाग जाना आसान होता है,\nहर पहलू ज़िंदगी का इम्तिहान होता है,\nडरने वालों को मिलता नहीं कुछ ज़िंदगी में,\nलड़ने वालों के कदमों में जहाँ होता है! 🏆🔥",
        hinglish: "Mushkilon se bhaag jaana aasaan hota hai,\nHar pehlu zindagi ka imtihaan hota hai,\nDarne waalon ko milta nahi kuch zindagi mein,\nLadne waalon ke kadmon mein jahaan hota hai! 🏆🔥",
        category: "motivational",
        format: "4-line",
        likes: 51200,
      },
      {
        id: "ms-3",
        hindi: "वक्त को बदलने में वक्त लगता है,\nबस खुद पर भरोसा और मेहनत जारी रखो! ⚡💼",
        hinglish: "Waqt ko badalne mein waqt lagta hai,\nBas khud par bharosa aur mehnat jaari rakho! ⚡💼",
        category: "motivational",
        format: "2-line",
        likes: 39100,
      },
    ],
  },

  // 7. 2-Line Shayari (⚡)
  {
    id: "two-line-shayari",
    slug: "2-line",
    title: "⚡ 2 Line Short Shayari (दो लाइन शायरी)",
    badge: "Punchy & Quick",
    count: "30+ Shayari",
    intro:
      "Short, deep, and high-impact 2-line poetry. Ideal for quick WhatsApp status updates, Instagram stories, and SMS messages.",
    items: [
      {
        id: "tl-1",
        hindi: "सफ़र खूबसूरत है मंज़िल से भी,\nबस एक अच्छे हमसफ़र की तलाश है! 🌿🤍",
        hinglish: "Safar khoobsurat hai manzil se bhi,\nBas ek achhe humsafar ki talaash hai! 🌿🤍",
        category: "two-line",
        format: "2-line",
        likes: 43500,
      },
      {
        id: "tl-2",
        hindi: "बातें तो बहुत हैं कहने को,\nमगर ख़ामोशी में जो सुकून है वो कहीं नहीं! ☕🌙",
        hinglish: "Baatein to bahut hain kehne ko,\nMagar khamoshi mein jo sukoon hai wo kahin nahi! ☕🌙",
        category: "two-line",
        format: "2-line",
        likes: 38200,
      },
      {
        id: "tl-3",
        hindi: "ज़िंदगी को आसान नहीं,\nबस खुद को मज़बूत बनाना पड़ता है! 🛡️⚡",
        hinglish: "Zindagi ko aasaan nahi,\nBas khud ko mazboot banana padta hai! 🛡️⚡",
        category: "two-line",
        format: "2-line",
        likes: 41900,
      },
    ],
  },

  // 8. 4-Line Shayari (📜)
  {
    id: "four-line-shayari",
    slug: "4-line",
    title: "📜 4 Line Deep Shayari (चार लाइन शायरी)",
    badge: "Poetic Masterpiece",
    count: "25+ Shayari",
    intro:
      "Rich four-line stanzas (Rubaiyat) that weave a complete story with deep rhyming cadence, emotional weight, and profound meaning.",
    items: [
      {
        id: "fl-1",
        hindi: "हज़ारों महफ़िलें हैं और लाखों मेले हैं,\nमगर जहाँ तुम नहीं वहाँ हम अकेले हैं!\nखुदा करे वो लम्हा कभी खत्म न हो,\nजिस लम्हे में हम और तुम दोनों साथ हैं! 🌹💫",
        hinglish: "Hazaaron mehfilein hain aur laakhon mele hain,\nMagar jahan tum nahi wahan hum akele hain!\nKhuda kare wo lamha kabhi khatm na ho,\nJis lamhe mein hum aur tum dono saath hain! 🌹💫",
        category: "four-line",
        format: "4-line",
        likes: 47900,
      },
      {
        id: "fl-2",
        hindi: "ना किसी की आँख का नूर हूँ,\nना किसी के दिल का क़रार हूँ,\nजो किसी के काम ना आ सके,\nमैं वो एक मुश्त-ए-ग़ुबार हूँ! 🥀🖤",
        hinglish: "Na kisi ki aankh ka noor hoon,\nNa kisi ke dil ka qaraar hoon,\nJo kisi ke kaam na aa sake,\nMain wo ek musht-e-gubaar hoon! 🥀🖤",
        category: "four-line",
        format: "4-line",
        likes: 42100,
      },
    ],
  },

  // 9. Islamic Shayari & Duas (🌙)
  {
    id: "islamic-shayari",
    slug: "islamic",
    title: "🌙 Islamic Shayari & Duas (इस्लामिक शायरी)",
    badge: "Spiritual Peace",
    count: "20+ Shayari",
    intro:
      "Soul-cleansing Islamic poetry celebrating the love of Allah, Sabr, Shukr, Quranic wisdom, and Jummah Mubarak blessings.",
    items: [
      {
        id: "is-1",
        hindi: "दिलों को सुकून सिर्फ अल्लाह के ज़िक्र में मिलता है,\nसजदे में झुक जाओ तो हर मसले का हल मिलता है! 🌙🤲",
        hinglish: "Dilon ko sukoon sirf Allah ke zikr mein milta hai,\nSajde mein jhuk jaao to har masle ka hal milta hai! 🌙🤲",
        category: "islamic",
        format: "2-line",
        likes: 49200,
      },
      {
        id: "is-2",
        hindi: "हज़ार बार टूट कर भी जो ना टूटे वो सब्र है,\nऔर जो हर हाल में लबों पे रहे वो शुक्र है! 🤍📖",
        hinglish: "Hazaar baar toot kar bhi jo na toote wo Sabr hai,\nAur jo har haal mein labon pe rahe wo Shukr hai! 🤍📖",
        category: "islamic",
        format: "2-line",
        likes: 46100,
      },
    ],
  },
];

export interface ShayariIntentSubpage {
  slug: string;
  title: string;
  badge: string;
  heading: string;
  description: string;
  relatedSectionId: string;
  faqs: { question: string; answer: string }[];
}

export const SHAYARI_INTENT_SUBPAGES: ShayariIntentSubpage[] = [
  {
    slug: "love",
    title: "Love Shayari: 100+ Best Romantic & Pyar Bhari Shayari in Hindi (2026)",
    badge: "❤️ Love Shayari",
    heading: "100+ Best Love Shayari in Hindi & Hinglish for Lovers",
    description: "Explore the most beautiful love shayari, romantic 2-line couple quotes, and emotional pyar bhari shayari with 1-click copy.",
    relatedSectionId: "love-shayari",
    faqs: [
      { question: "What is the best Love Shayari for WhatsApp?", answer: "Two-line rhyming couplets that express deep loyalty, admiration, and affection work best." },
      { question: "Can I copy these Love Shayari in Devanagari Hindi?", answer: "Yes! All shayari lines are provided in both Hindi (हिंदी) and Hinglish script." },
    ],
  },
  {
    slug: "sad",
    title: "Sad Shayari: 100+ Dard Bhari & Emotional Heartbreak Shayari",
    badge: "💔 Sad Shayari",
    heading: "100+ Deep Sad Shayari & Heartbreak Poetry in Hindi",
    description: "Emotional, sad, and touching verses to express unsaid pain, silent tears, and heartbreak recovery.",
    relatedSectionId: "sad-shayari",
    faqs: [
      { question: "Why do people read Sad Shayari?", answer: "Sad poetry provides catharsis and emotional validation during times of solitude and heartbreak." },
    ],
  },
  {
    slug: "attitude",
    title: "Attitude Shayari: 100+ Royal Swag & Bhaigiri Quotes (2026)",
    badge: "😎 Attitude Shayari",
    heading: "100+ Royal Attitude Shayari for Boys & Girls",
    description: "High-swag attitude shayari, killer royal status, and bold tevar lines for Instagram & WhatsApp.",
    relatedSectionId: "attitude-shayari",
    faqs: [
      { question: "How to use attitude shayari on Instagram?", answer: "Pair a punchy 2-line attitude shayari with your portrait or reel for instant high engagement." },
    ],
  },
  {
    slug: "romantic",
    title: "Romantic Shayari: 100+ Ishq & Mohabbat Poetry for Couples",
    badge: "💕 Romantic Shayari",
    heading: "100+ Sweet Romantic Shayari for Girlfriend & Boyfriend",
    description: "Express your heart's romance with poetic metaphors, moonlit verses, and sweet promises.",
    relatedSectionId: "romantic-shayari",
    faqs: [
      { question: "What is the sweetest romantic shayari?", answer: "Lines that praise the partner's eyes, smile, and presence in your life." },
    ],
  },
  {
    slug: "dosti",
    title: "Dosti Shayari: 100+ Friendship & Yaari Quotes in Hindi",
    badge: "🤝 Dosti Shayari",
    heading: "100+ True Friendship & Dosti Yaari Shayari",
    description: "Celebrate true friendship, brotherhood, and partner-in-crime memories with touching dosti poetry.",
    relatedSectionId: "dosti-shayari",
    faqs: [
      { question: "What makes a good friendship shayari?", answer: "Authentic expressions of trust, loyalty, and lifelong bonding through ups and downs." },
    ],
  },
  {
    slug: "motivational",
    title: "Motivational Shayari: 100+ Success, Hard Work & Hausla Poetry",
    badge: "💪 Motivational Shayari",
    heading: "100+ High-Energy Motivational Shayari for Success",
    description: "Fuel your drive, hustle, and self-belief with inspiring motivational poetry.",
    relatedSectionId: "motivational-shayari",
    faqs: [
      { question: "When to read motivational shayari?", answer: "Early morning before starting work or whenever you face challenging obstacles." },
    ],
  },
  {
    slug: "2-line",
    title: "2 Line Shayari: 100+ Short, Punchy & Viral Couplets in Hindi",
    badge: "⚡ 2 Line Shayari",
    heading: "100+ Best 2 Line Short Shayari for Status & Bio",
    description: "Bite-sized, impactful 2-line couplets ideal for quick status updates and captions.",
    relatedSectionId: "two-line-shayari",
    faqs: [
      { question: "Why is 2-line shayari so popular?", answer: "It delivers a complete, powerful thought in just two rhyming lines that fit on any mobile screen." },
    ],
  },
  {
    slug: "4-line",
    title: "4 Line Shayari: 100+ Deep Stanzas & Romantic Rubaiyat",
    badge: "📜 4 Line Shayari",
    heading: "100+ Deep 4 Line Shayari & Classical Stanzas",
    description: "Immersive four-line poetry capturing complete narratives of love, pain, and life wisdom.",
    relatedSectionId: "four-line-shayari",
    faqs: [
      { question: "What is a 4-line shayari called?", answer: "In Urdu/Hindi classical poetry, four-line verses are often called Rubaiyat or Qata." },
    ],
  },
  {
    slug: "islamic",
    title: "Islamic Shayari: 100+ Duas, Sabr, Shukr & Jummah Poetry",
    badge: "🌙 Islamic Shayari",
    heading: "100+ Soulful Islamic Shayari & Spiritual Reminders",
    description: "Spiritual verses celebrating Sabr, Shukr, Quranic guidance, and Jummah Mubarak blessings.",
    relatedSectionId: "islamic-shayari",
    faqs: [
      { question: "When to post Islamic shayari?", answer: "Every Friday, during Ramadan, Eid, and daily morning prayers." },
    ],
  },
  {
    slug: "bewafa",
    title: "Bewafa Shayari: 100+ Dhokha, Broken Heart & Dard Bhari Poetry",
    badge: "🥀 Bewafa Shayari",
    heading: "100+ Best Bewafa Shayari in Hindi for Broken Hearts",
    description: "Express the deep agony of betrayal, broken promises, and unfaithful love with emotional bewafa poetry.",
    relatedSectionId: "sad-shayari",
    faqs: [
      { question: "What is a classic bewafa shayari line?", answer: "'Humne to chaha tha unhe jaan se badhkar, par wo hume aazmate rahe gair samajhkar! 🥀💔'" },
    ],
  },
  {
    slug: "maa",
    title: "Maa Shayari: 100+ Emotional Mother Love & Jannat Poetry in Hindi",
    badge: "❤️ Maa Ki Mohabbat",
    heading: "100+ Heartfelt Maa Shayari & Emotional Mother Quotes",
    description: "Dedicated to the purest love in the universe. Touch your mother's heart with sweet and grateful Maa Shayari in Hindi.",
    relatedSectionId: "love-shayari",
    faqs: [
      { question: "Why is Maa shayari so emotional?", answer: "A mother's love is unconditional, making poetic gratitude for her sacrifices deeply touching." },
    ],
  },
  {
    slug: "zindagi",
    title: "Zindagi Shayari: 100+ Life Reality, Karma & Sukoon Poetry",
    badge: "🕊️ Zindagi Ka Safar",
    heading: "100+ Deep Zindagi Shayari & Life Truth Verses in Hindi",
    description: "Reflections on destiny, time, struggles, and the bitter-sweet journey of life captured in timeless couplets.",
    relatedSectionId: "motivational-shayari",
    faqs: [
      { question: "What does Zindagi Shayari teach us?", answer: "It teaches patience, maturity, letting go of trivial worries, and appreciating every passing breath." },
    ],
  },
  {
    slug: "yaadein",
    title: "Yaadein Shayari: 100+ Missing You & Purani Yaadein Poetry",
    badge: "🌙 Yaadon Ka Safar",
    heading: "100+ Soulful Yaadein Shayari in Hindi for Nostalgic Moments",
    description: "When old memories keep you awake at night, express your nostalgic longing with touching Yaadein couplets.",
    relatedSectionId: "sad-shayari",
    faqs: [
      { question: "How to express missing someone through shayari?", answer: "Share lines that evoke shared quiet moments, rain, or moonlight." },
    ],
  },
  {
    slug: "aankhein",
    title: "Aankhein Shayari: 100+ Tareef & Beautiful Eyes Poetry in Hindi",
    badge: "👁️ Aankhon Ki Tareef",
    heading: "100+ Romantic Aankhein Shayari & Eye Beauty Quotes",
    description: "Praise her mesmerizing eyes, innocent gaze, and kajal with sweet romantic aankhein shayari.",
    relatedSectionId: "romantic-shayari",
    faqs: [
      { question: "What is a good shayari for her eyes?", answer: "'Teri aankhon ke samundar me doob jane ko jee chahta hai, teri ek nazar se ghayal ho jane ko jee chahta hai! ✨🌹'" },
    ],
  },
  {
    slug: "khamoshi",
    title: "Khamoshi Shayari: 100+ Silent Pain & Sukoon Poetry in Hindi",
    badge: "🤫 Khamoshi & Sukoon",
    heading: "100+ Deep Khamoshi Shayari & Unsaid Words Poetry",
    description: "When words are not enough, let silence speak. Deep couplets on quiet strength, unspoken thoughts, and calm solitude.",
    relatedSectionId: "two-line-shayari",
    faqs: [
      { question: "Why is silence celebrated in Urdu/Hindi poetry?", answer: "Khamoshi signifies deep dignity, emotional self-control, and thoughts that transcend ordinary speech." },
    ],
  },
];
