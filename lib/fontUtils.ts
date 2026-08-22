// Unicode character map transformations for Aesthetic Font Generator

const FONT_MAPS: Record<string, { upper: string; lower: string; digits?: string }> = {
  cursive: {
    upper: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
    lower: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
  },
  boldCursive: {
    upper: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
    lower: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
  },
  boldSerif: {
    upper: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    lower: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
    digits: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
  },
  boldSans: {
    upper: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
    lower: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    digits: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",
  },
  italicSerif: {
    upper: "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍",
    lower: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧",
  },
  italicSans: {
    upper: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡",
    lower: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
  },
  monospace: {
    upper: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈金",
    lower: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
    digits: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿",
  },
  doubleStruck: {
    upper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    lower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
    digits: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",
  },
  circled: {
    upper: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    lower: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    digits: "⓪①②③④⑤⑥⑦⑧⑨",
  },
  squared: {
    upper: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    lower: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
  },
  invertedCircled: {
    upper: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    lower: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
  },
};

const PLAIN_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const PLAIN_LOWER = "abcdefghijklmnopqrstuvwxyz";
const PLAIN_DIGITS = "0123456789";

export interface FontStyleOption {
  id: string;
  name: string;
  category: "popular" | "aesthetic" | "fancy" | "decorative";
  sample: string;
}

export const FONT_STYLES: FontStyleOption[] = [
  { id: "cursive", name: "Cursive Script", category: "aesthetic", sample: "𝓒𝓾𝓽𝓮 & 𝓐𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬" },
  { id: "boldCursive", name: "Gothic / Fraktur", category: "fancy", sample: "𝔊𝔬𝔱𝔥𝔦𝔠 𝔖𝔱𝔶𝔩𝔢" },
  { id: "boldSerif", name: "Bold Serif", category: "popular", sample: "𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟 𝐓𝐞𝐱𝐭" },
  { id: "boldSans", name: "Bold Sans-Serif", category: "popular", sample: "𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀 𝗧𝗲𝘅𝘁" },
  { id: "italicSans", name: "Sleek Italic", category: "aesthetic", sample: "𝘚𝘭𝘦𝘦𝘬 𝘐𝘵𝘢𝘭𝘪𝘤 𝘍𝘰𝘯𝘵" },
  { id: "italicSerif", name: "Classic Italic", category: "aesthetic", sample: "𝐶𝑙𝑎𝑠𝑠𝑖𝑐 𝐼𝑡𝑎𝑙𝑖𝑐" },
  { id: "monospace", name: "Typewriter / Mono", category: "popular", sample: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚃𝚎𝚡𝚝" },
  { id: "doubleStruck", name: "Double Struck (Outline)", category: "fancy", sample: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜" },
  { id: "circled", name: "Bubble Circled", category: "decorative", sample: "Ⓒⓘⓡⓒⓛⓔⓓ Ⓣⓔⓧⓣ" },
  { id: "squared", name: "Boxed / Squared", category: "decorative", sample: "🄱🄾🅇🄴🄳 🅃🄴🅇🅃" },
  { id: "invertedCircled", name: "Dark Bubble", category: "decorative", sample: "🅓🅐🅡🅚 🅑🅤🅑🅑🅛🅔" },
  { id: "spaced", name: "A E S T H E T I C (Spaced)", category: "aesthetic", sample: "A E S T H E T I C" },
  { id: "underline", name: "Underlined", category: "popular", sample: "U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲" },
  { id: "strikethrough", name: "Strikethrough", category: "popular", sample: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶" },
];

export function transformText(text: string, styleId: string): string {
  if (!text) return "";

  if (styleId === "spaced") {
    return text.split("").join(" ");
  }

  if (styleId === "underline") {
    return text
      .split("")
      .map((char) => `${char}\u0332`)
      .join("");
  }

  if (styleId === "strikethrough") {
    return text
      .split("")
      .map((char) => `${char}\u0336`)
      .join("");
  }

  const map = FONT_MAPS[styleId];
  if (!map) return text;

  const upperChars = Array.from(map.upper);
  const lowerChars = Array.from(map.lower);
  const digitChars = map.digits ? Array.from(map.digits) : null;

  return text
    .split("")
    .map((char) => {
      const upIdx = PLAIN_UPPER.indexOf(char);
      if (upIdx !== -1 && upperChars[upIdx]) return upperChars[upIdx];

      const lowIdx = PLAIN_LOWER.indexOf(char);
      if (lowIdx !== -1 && lowerChars[lowIdx]) return lowerChars[lowIdx];

      if (digitChars) {
        const digIdx = PLAIN_DIGITS.indexOf(char);
        if (digIdx !== -1 && digitChars[digIdx]) return digitChars[digIdx];
      }

      return char;
    })
    .join("");
}
