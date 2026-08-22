export interface HashtagTier {
  high: string[];
  medium: string[];
  low: string[];
}

export interface HashtagNiche {
  id: string;
  name: string;
  category: "viral" | "attitude" | "travel" | "fitness" | "fashion" | "food" | "tech" | "luxury" | "celebration" | "creators";
  icon: string;
  description: string;
  avgReach: string;
  difficulty: "Viral" | "Medium" | "Easy";
  preset30: string[];
  trending30: string[];
  reelsShorts: string[];
  ladder: HashtagTier;
}

export const HASHTAG_NICHES: Record<string, HashtagNiche> = {
  // 1. VIRAL & REELS SUITE
  reels: {
    id: "reels",
    name: "Reels & Viral Shorts",
    category: "viral",
    icon: "🎬",
    description: "Trending audio, FYP boosters, high-retention video algorithm tags.",
    avgReach: "24.5M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#reels", "#reelsinstagram", "#viral", "#trending", "#explorepage",
      "#fyp", "#foryou", "#viralpost", "#instadaily", "#trend",
      "#reelitfeelit", "#trendingreels", "#viralvideos", "#foryoupage", "#instareels",
      "#reelsvideo", "#reelkarofeelkaro", "#exploreindia", "#trendingnow", "#shortvideo",
      "#reelsindiaviral", "#contentcreatorindia", "#trendingsong", "#dailyreelsfeed", "#algorithmboost",
      "#creatorsforgrowth", "#viralreelsindia", "#trendingaudio", "#highviews", "#reelsviral"
    ],
    trending30: [
      "#reelsvideo2026", "#explorepagereels", "#viralreelsnow", "#trendingtoday", "#foryoufeed",
      "#instareelsindia", "#reelviralhacks", "#shortsviral", "#trendingalgorithm", "#feedviral",
      "#reelitviral", "#creatorreels", "#contentvirality", "#viralexplore", "#reelsoninstagram",
      "#videocreators", "#trendingmusicreels", "#shortformvideo", "#viralmoments", "#boostmyreach",
      "#dailyviralvideo", "#reelsgrowth", "#trendingstatus", "#viralshortfeed", "#fypreels",
      "#viralcontentdaily", "#reelsoftheday", "#reelsexplore", "#instaviralpost", "#trendingnowreels"
    ],
    reelsShorts: ["#reels", "#reelsinstagram", "#viral", "#trending", "#explorepage", "#fyp", "#foryou"],
    ladder: {
      high: ["#reels", "#reelsinstagram", "#viral", "#trending", "#explorepage", "#fyp", "#viralpost", "#foryoupage"],
      medium: ["#reelitfeelit", "#trendingreels", "#viralvideos", "#instareels", "#reelkarofeelkaro", "#trendingnow"],
      low: ["#reelsindiaviral", "#contentcreatorindia", "#trendingsong", "#dailyreelsfeed", "#algorithmboost", "#creatorsforgrowth"]
    }
  },

  viral_all: {
    id: "viral_all",
    name: "Universal Viral & Explore",
    category: "viral",
    icon: "🔥",
    description: "All-time highest reach tags for maximum organic algorithm distribution.",
    avgReach: "45.2M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#viral", "#explorepage", "#trending", "#explore", "#instagood",
      "#love", "#reels", "#fashion", "#fyp", "#trend",
      "#follow", "#like", "#trendingreels", "#photography", "#india",
      "#instadaily", "#tiktok", "#foryou", "#followforfollowback", "#reelsinstagram",
      "#likeforlikes", "#trendingnow", "#memes", "#style", "#photooftheday",
      "#viralpost", "#music", "#viralvideos", "#insta", "#beautiful"
    ],
    trending30: [
      "#trendingpost", "#viralcontent", "#exploretocreate", "#dailyviral", "#feedpost",
      "#viralalgorithm", "#reachgrowth", "#organicreach", "#topviral", "#trendsetter",
      "#explorefeed", "#viraloftheday", "#discoverpage", "#viralgram", "#trendingtoday",
      "#instatrend", "#newtrend", "#viralline", "#viraltrending", "#boostreach",
      "#instapostviral", "#trendingworldwide", "#viraltop", "#popularposts", "#exploretrend",
      "#highreach", "#viralforyou", "#trendnow", "#viralmedia", "#growmyaccount"
    ],
    reelsShorts: ["#viral", "#explorepage", "#trending", "#fyp", "#trendingnow", "#viralpost", "#explore"],
    ladder: {
      high: ["#viral", "#explorepage", "#trending", "#explore", "#instagood", "#fyp", "#trendingreels", "#foryou"],
      medium: ["#viralpost", "#trendingnow", "#viralvideos", "#exploretocreate", "#dailyviral", "#organicreach"],
      low: ["#reachgrowth", "#topviral", "#viraloftheday", "#discoverpage", "#boostreach", "#instapostviral"]
    }
  },

  baddie_viral: {
    id: "baddie_viral",
    name: "Baddie & Glam Swag",
    category: "viral",
    icon: "💅",
    description: "Glamorous, confident, baddie energy tags for chic reels and selfies.",
    avgReach: "19.8M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#baddie", "#baddiestyle", "#glam", "#slay", "#ootd",
      "#aesthetic", "#bossbabe", "#glowup", "#prettyinpink", "#confidence",
      "#selflove", "#baddieoutfits", "#makeupgoals", "#flawless", "#luxeglam",
      "#cleangirl", "#aestheticfeed", "#modelvibes", "#gorgeous", "#itgirl",
      "#baddievibes", "#fashionbaddie", "#glowingskin", "#sheisart", "#independentwoman",
      "#classyandfashionable", "#baddieposts", "#aestheticgirl", "#stunninglook", "#divavibes"
    ],
    trending30: [
      "#itgirlenergy", "#cleangirlaesthetic", "#baddiemood", "#glamaesthetic", "#slayqueen",
      "#confidenceisbeauty", "#girlyvibes", "#aestheticoutfit", "#baddiefits", "#chiclook",
      "#selfworth", "#bossladymindset", "#highvaluewoman", "#unbotheredqueen", "#aestheticlooks",
      "#luxegirl", "#stylishbeauty", "#baddiemakeup", "#glamourlook", "#gorgeousgirl",
      "#goldenhourglow", "#divadiaries", "#aestheticreels", "#modelpose", "#hotgirlwalk",
      "#baddieaesthetic", "#sheisqueen", "#classybaddie", "#glamlook", "#itgirloutfit"
    ],
    reelsShorts: ["#baddie", "#itgirl", "#glam", "#slay", "#baddiestyle", "#ootd", "#aesthetic"],
    ladder: {
      high: ["#baddie", "#glam", "#ootd", "#aesthetic", "#bossbabe", "#glowup", "#selflove", "#slay"],
      medium: ["#baddiestyle", "#baddieoutfits", "#cleangirl", "#modelvibes", "#itgirl", "#baddievibes"],
      low: ["#itgirlenergy", "#unbotheredqueen", "#classybaddie", "#divadiaries", "#highvaluewoman", "#baddiemood"]
    }
  },

  // 2. ATTITUDE, MOOD & PERSONALITY
  attitude_royal: {
    id: "attitude_royal",
    name: "Royal Attitude & VIP Swag",
    category: "attitude",
    icon: "👑",
    description: "High-status quotes, silent moves, alpha confidence, and fearless vibe.",
    avgReach: "32.1M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#attitude", "#bossmode", "#motivation", "#mindset", "#confidence",
      "#successmindset", "#kingvibes", "#alphaswaggers", "#royallook", "#selfmade",
      "#silentmoves", "#reelsindia", "#independentmind", "#unbothered", "#royalattitude",
      "#rulebreaker", "#gentlemanstyle", "#unstoppable", "#dapperoutfit", "#classysavage",
      "#attitudequotesdaily", "#selfmadeenergy", "#focusonmyself", "#strongmentality", "#hustlevibes",
      "#bosslifestyle", "#swagger", "#royalentry", "#alphamale", "#attitudeiseverything"
    ],
    trending30: [
      "#attitudestatus", "#bossmoves", "#unbotheredking", "#attitudeisattitude", "#alphasoul",
      "#silentgrind", "#highvaluelifestyle", "#royalblood", "#attitudeiseverything", "#confidenceboost",
      "#selfmademan", "#kingmindset", "#bossvibes", "#hustleattitude", "#fearlessheart",
      "#stayfocus", "#standalone", "#ownrules", "#swagstyle", "#attitudequotes",
      "#killerlook", "#attitudeking", "#personalitygoals", "#independentmindset", "#successvibes",
      "#boldandfearless", "#royalswag", "#alphavibes", "#classymind", "#selfrespect"
    ],
    reelsShorts: ["#attitude", "#bossmode", "#royalattitude", "#silentmoves", "#alphamindset", "#confidence", "#kingvibes"],
    ladder: {
      high: ["#attitude", "#motivation", "#mindset", "#confidence", "#successmindset", "#bossmode", "#selfmade", "#swagger"],
      medium: ["#silentmoves", "#royalattitude", "#independentmind", "#unbothered", "#rulebreaker", "#classysavage"],
      low: ["#attitudequotesdaily", "#selfmadeenergy", "#focusonmyself", "#strongmentality", "#hustlevibes", "#royalentry"]
    }
  },

  love_romance: {
    id: "love_romance",
    name: "Love, Romance & Couples",
    category: "attitude",
    icon: "❤️",
    description: "Couple goals, romantic quotes, relationship moments, and aesthetic love.",
    avgReach: "28.4M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#love", "#couplegoals", "#romance", "#loveyou", "#forever",
      "#couplelove", "#relationshipgoals", "#romanticquotes", "#soulmate", "#myheart",
      "#lovestory", "#togetherforever", "#couplemoments", "#sweetlove", "#cutecouple",
      "#lover", "#endlesslove", "#lovevibes", "#truelove", "#holdinghands",
      "#coupleshoot", "#romancereels", "#myoneandonly", "#purelove", "#hearttouching",
      "#foreverandalways", "#deepconnection", "#romanticmoments", "#loveislove", "#couplevibe"
    ],
    trending30: [
      "#couplegoals2026", "#romanticreels", "#soulmateconnection", "#lovestatusvideo", "#purelovequotes",
      "#togetherness", "#cutestcouple", "#myforeverlove", "#heartfeltmoments", "#romanticstatus",
      "#couplelovevibes", "#eternalromance", "#couplediaries", "#loveandpeace", "#sweetromance",
      "#relationshipstatus", "#romanticthoughts", "#loverslane", "#couplesofindia", "#sweetcouple",
      "#truelovequotes", "#deepfeeling", "#soulmatelove", "#pureheart", "#endlessromance",
      "#couplesgram", "#lovebird", "#sweetheart", "#romanticsong", "#romanticfeelings"
    ],
    reelsShorts: ["#love", "#couplegoals", "#romance", "#soulmate", "#lovestory", "#romanticquotes", "#forever"],
    ladder: {
      high: ["#love", "#couplegoals", "#romance", "#loveyou", "#forever", "#relationshipgoals", "#soulmate", "#lovestory"],
      medium: ["#romanticquotes", "#couplemoments", "#togetherforever", "#sweetlove", "#cutecouple", "#truelove"],
      low: ["#holdinghands", "#coupleshoot", "#romancereels", "#myoneandonly", "#deepconnection", "#couplediaries"]
    }
  },

  sad_broken: {
    id: "sad_broken",
    name: "Sad, Broken & Healing",
    category: "attitude",
    icon: "💔",
    description: "Heartbreak, deep thoughts, lonely nights, emotional quotes, and healing.",
    avgReach: "16.7M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#sad", "#heartbreak", "#brokenheart", "#lonely", "#pain",
      "#sadlines", "#emotional", "#hurt", "#alone", "#healing",
      "#deepfeelings", "#sadquotes", "#tears", "#silentpain", "#heartbroken",
      "#missingyou", "#lost", "#depressedquotes", "#solitude", "#darkthoughts",
      "#innerpeace", "#healingjourney", "#painfulmemories", "#unspokenwords", "#brokeninside",
      "#loneliness", "#mentalhealth", "#overthinking", "#lettinggo", "#emotionalquotes"
    ],
    trending30: [
      "#sadstatusvideo", "#heartbreakquotes", "#silenttears", "#brokenheartlines", "#emotionalstatus",
      "#alonevibes", "#lonelynights", "#deepheartbreak", "#painbehindthesmile", "#unsaidfeelings",
      "#healingprocess", "#overthinkinglatelastnight", "#sadshayari", "#dardoftheheart", "#aloneforever",
      "#brokenwords", "#healingfromwithin", "#lostsouls", "#solitudemood", "#hurtinginside",
      "#silentgrief", "#tearsdry", "#emotionalreel", "#lettinggogracefully", "#peaceoverpain",
      "#brokenpieces", "#sadthoughts", "#darknightthoughts", "#painandpoetry", "#healingenergy"
    ],
    reelsShorts: ["#sad", "#heartbreak", "#brokenheart", "#lonely", "#sadquotes", "#emotional", "#healing"],
    ladder: {
      high: ["#sad", "#heartbreak", "#brokenheart", "#lonely", "#pain", "#emotional", "#alone", "#healing"],
      medium: ["#sadlines", "#sadquotes", "#silentpain", "#missingyou", "#healingjourney", "#emotionalquotes"],
      low: ["#painfulmemories", "#unspokenwords", "#brokeninside", "#silenttears", "#alonevibes", "#peaceoverpain"]
    }
  },

  motivation_discipline: {
    id: "motivation_discipline",
    name: "Motivation & Discipline",
    category: "attitude",
    icon: "⚡",
    description: "Daily hustle, focus on goals, early morning grind, and resilience.",
    avgReach: "38.9M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#motivation", "#discipline", "#success", "#mindset", "#hardwork",
      "#grind", "#hustle", "#focus", "#goals", "#dreambig",
      "#nevergiveup", "#determination", "#dailygrind", "#consistency", "#ambition",
      "#entrepreneur", "#growthmindset", "#selfdiscipline", "#stayfocused", "#workhard",
      "#pushyourself", "#mindsetiseverything", "#championmindset", "#stayhungry", "#successmindset",
      "#dedication", "#motivationalquotes", "#hustlehard", "#buildyourempire", "#noexcuses"
    ],
    trending30: [
      "#dailymotivation2026", "#disciplineovermotivation", "#focusedmindset", "#grindmodeon", "#hustlequotes",
      "#successsecrets", "#selfgrowthjourney", "#hardworkpaysoff", "#morningroutinegrind", "#mentalstrength",
      "#championattitude", "#overcomeobstacles", "#disciplinedlife", "#unstoppableenergy", "#dreambigorgohome",
      "#dailyinspiration", "#mindsetshift", "#ambitionovereverything", "#stayconsistent", "#buildinprivate",
      "#focusonyourself", "#grindtoday", "#successdriven", "#powerofmind", "#hustledaily",
      "#motivationalthoughts", "#actiontaker", "#goalgetter", "#unshakable", "#relentlessgrind"
    ],
    reelsShorts: ["#motivation", "#discipline", "#hustle", "#mindset", "#success", "#grind", "#noexcuses"],
    ladder: {
      high: ["#motivation", "#success", "#mindset", "#hardwork", "#grind", "#hustle", "#goals", "#dreambig"],
      medium: ["#discipline", "#nevergiveup", "#determination", "#dailygrind", "#consistency", "#growthmindset"],
      low: ["#disciplineovermotivation", "#mindsetiseverything", "#championmindset", "#buildinprivate", "#relentlessgrind"]
    }
  },

  aesthetic_minimal: {
    id: "aesthetic_minimal",
    name: "Aesthetic & Vintage Minimal",
    category: "attitude",
    icon: "✨",
    description: "Soft tones, grain, film camera, cozy mornings, and beige mood boards.",
    avgReach: "22.3M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#aesthetic", "#vibes", "#mood", "#photography", "#art",
      "#aestheticfeed", "#vintagestyle", "#goldenhour", "#grainytones", "#softaesthetic",
      "#goldenhourglow", "#vintagevibes", "#cozycorners", "#softlighting", "#minimalistmood",
      "#filmisnotdead", "#analogphotography", "#aestheticaccount", "#warmtones", "#neutralpalette",
      "#filmphotographyvibe", "#pasteltones", "#aestheticfeedindia", "#grainyphoto", "#calmvibesdaily",
      "#cozymood", "#visualdiary", "#dreamyaesthetic", "#retrovibes", "#aestheticedit"
    ],
    trending30: [
      "#minimalistaesthetic", "#vintagefilter", "#grainyaesthetic", "#beigepalette", "#softtones",
      "#cozyaesthetic", "#filmlook", "#dreamytones", "#visualmood", "#aestheticmoments",
      "#minimalistphotography", "#analogvibes", "#goldenhourvibes", "#warmpalette", "#aestheticvibes",
      "#retroaesthetic", "#aestheticlife", "#gentleliving", "#slowlivingmovement", "#calmmood",
      "#artisticmind", "#aestheticfeedinspo", "#neutraltones", "#minimalistlifestyle", "#cozyvibes",
      "#visualstory", "#aestheticphoto", "#filmfeed", "#nostalgicvibes", "#aesthetictumblr"
    ],
    reelsShorts: ["#aesthetic", "#vibes", "#goldenhour", "#filmisnotdead", "#softaesthetic", "#vintagevibes", "#aestheticedit"],
    ladder: {
      high: ["#aesthetic", "#vibes", "#mood", "#photography", "#art", "#goldenhour", "#vintagestyle", "#softaesthetic"],
      medium: ["#goldenhourglow", "#vintagevibes", "#cozycorners", "#softlighting", "#filmisnotdead", "#aestheticfeed"],
      low: ["#filmphotographyvibe", "#pasteltones", "#grainyphoto", "#calmvibesdaily", "#visualdiary", "#slowlivingmovement"]
    }
  },

  // 3. TRAVEL & ADVENTURE
  travel_mountains: {
    id: "travel_mountains",
    name: "Mountains & Solo Wandering",
    category: "travel",
    icon: "🏔️",
    description: "Himalayas, hiking trails, chai in mountains, fog, and offbeat trips.",
    avgReach: "17.9M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#mountains", "#mountainlovers", "#himalayas", "#hiking", "#trekking",
      "#mountainvibes", "#solotraveler", "#naturelovers", "#wanderlust", "#peacefulmountains",
      "#foggyvibes", "#scenicviews", "#offbeatjourney", "#mountainscape", "#himalayanlife",
      "#mountaintrip", "#intothewild", "#adventuresoul", "#exploremountains", "#chaiandmountains",
      "#himalayangeographic", "#mountaincalling", "#himalayanroads", "#serenemountains", "#outdoorlovers",
      "#highaltitudetrek", "#naturephotography", "#wildernessculture", "#solotripvibes", "#mountaindump"
    ],
    trending30: [
      "#mountainsofindia", "#himalayantrip", "#trekkingdiaries", "#mountainlife", "#chaimountains",
      "#peaceinmountains", "#himalayanviews", "#solohikers", "#highpassjourney", "#natureescapes",
      "#serenehimalayas", "#cloudsandmountains", "#offbeathimalayas", "#exploringhighlands", "#wildhimalayas",
      "#mountainfog", "#himalayanpeace", "#trekkingvibes", "#himalayanpass", "#wanderwithme",
      "#mountainweather", "#campinginmountains", "#scenictrails", "#himalayanbeauty", "#mountainroadtrip",
      "#freshmountainair", "#solowanderer", "#himalayanlove", "#mountainaddict", "#climbthehills"
    ],
    reelsShorts: ["#mountains", "#mountainlovers", "#himalayas", "#solotraveler", "#mountainvibes", "#hiking", "#chaiandmountains"],
    ladder: {
      high: ["#mountains", "#hiking", "#trekking", "#naturelovers", "#wanderlust", "#scenicviews", "#outdoorlovers", "#mountainlovers"],
      medium: ["#mountainvibes", "#solotraveler", "#himalayas", "#foggyvibes", "#offbeatjourney", "#mountainscape"],
      low: ["#peacefulmountains", "#himalayanlife", "#chaiandmountains", "#himalayangeographic", "#mountaincalling", "#highaltitudetrek"]
    }
  },

  travel_beach: {
    id: "travel_beach",
    name: "Beach, Ocean & Sunset Escapes",
    category: "travel",
    icon: "🏖️",
    description: "Tropical beaches, sea waves, coconut trees, coastal breeze, and sunsets.",
    avgReach: "21.4M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#beach", "#beachvibes", "#sunset", "#ocean", "#sea",
      "#beachlife", "#tropicalvibes", "#coastal", "#beachsunset", "#vitaminsea",
      "#oceanview", "#sandytoes", "#islandlife", "#sealovers", "#beachday",
      "#sunsetsandpalmtrees", "#beachvacation", "#coastalliving", "#beachwalk", "#waves",
      "#saltandsea", "#seasidevibes", "#tropicalparadise", "#sunsetlovers", "#goldenhourbeach",
      "#beachmood", "#oceanbreeze", "#islandescape", "#seascape", "#beachphotodump"
    ],
    trending30: [
      "#beachsunsetvibes", "#oceanviews", "#tropicaltravel", "#islandvibes", "#seasideescape",
      "#coastalbeauty", "#beachholiday", "#beachescape", "#beachlover", "#sunsetatthebeach",
      "#oceanwaves", "#calmseas", "#sunandsea", "#paradiseisland", "#tropicalmood",
      "#coastalviews", "#beachdiaries", "#oceanmagic", "#sunsetsbythesea", "#beachaesthetic",
      "#warmbreeze", "#sunkissedskin", "#islandliving", "#coastaltrail", "#seasidepeace",
      "#palmtreeparadise", "#wavesandwind", "#endlessocean", "#beachtrip", "#seasidebliss"
    ],
    reelsShorts: ["#beach", "#beachvibes", "#ocean", "#sunset", "#beachlife", "#vitaminsea", "#beachsunset"],
    ladder: {
      high: ["#beach", "#sunset", "#ocean", "#sea", "#beachlife", "#beachvibes", "#tropicalvibes", "#sunsetlovers"],
      medium: ["#beachsunset", "#vitaminsea", "#oceanview", "#sandytoes", "#islandlife", "#sealovers"],
      low: ["#sunsetsandpalmtrees", "#saltandsea", "#goldenhourbeach", "#tropicalparadise", "#beachphotodump", "#seasidebliss"]
    }
  },

  travel_roadtrip: {
    id: "travel_roadtrip",
    name: "Road Trips & Bike Rides",
    category: "travel",
    icon: "🏍️",
    description: "Highways, rider brotherhood, long drives, scenic routes, and night rides.",
    avgReach: "15.3M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#roadtrip", "#bikeride", "#bikelover", "#rider", "#highway",
      "#longdrive", "#roadtrippers", "#motorcycle", "#bikelife", "#riderattitude",
      "#cruising", "#openroads", "#scenicdrive", "#nightdrive", "#travelbyroad",
      "#motorcyclelife", "#speedandpassion", "#twowheels", "#highwaycruiser", "#bikersofindia",
      "#ridercommunity", "#windingroads", "#roadtrippin", "#travelonwheels", "#windinmyhair",
      "#ridesafe", "#journeyoverdestination", "#exploreonwheels", "#ridersoul", "#roadtripdump"
    ],
    trending30: [
      "#roadtripdiaries", "#motorcycletravel", "#biketrip", "#longrider", "#highwayvibes",
      "#nightrides", "#twowheeltravel", "#bikeriders", "#speedandfreedom", "#scenichighway",
      "#openroadvibes", "#cruisingroads", "#motorcyclepassion", "#ridingintoforever", "#solorider",
      "#ridergoals", "#bikerscommunity", "#journeyonwheels", "#wanderonwheels", "#highspeedvibes",
      "#roadtripadventure", "#ridersunite", "#bikersjournal", "#twowheellove", "#mountainroadride",
      "#ridinglife", "#bikereels", "#highwaydiaries", "#openroadtherapy", "#ridersvibes"
    ],
    reelsShorts: ["#roadtrip", "#bikeride", "#bikelife", "#highway", "#longdrive", "#ridersoul", "#scenicdrive"],
    ladder: {
      high: ["#roadtrip", "#motorcycle", "#highway", "#bikelife", "#longdrive", "#bikeride", "#rider", "#roadtrippers"],
      medium: ["#scenicdrive", "#nightdrive", "#bikersofindia", "#ridercommunity", "#twowheels", "#cruising"],
      low: ["#speedandpassion", "#highwaycruiser", "#travelonwheels", "#journeyoverdestination", "#openroadtherapy", "#bikersjournal"]
    }
  },

  // 4. FITNESS, HEALTH & SPORTS
  fitness_gym: {
    id: "fitness_gym",
    name: "Gym Workout & Bodybuilding",
    category: "fitness",
    icon: "💪",
    description: "Heavy lifting, muscle hypertrophy, leg day, pump, and transformation.",
    avgReach: "34.5M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#fitness", "#gym", "#workout", "#fitfam", "#bodybuilding",
      "#fitnessmotivation", "#fitlife", "#gymlife", "#training", "#muscle",
      "#gymmotivation", "#legdayworkout", "#fitnessjourney", "#consistencyiskey", "#healthylifestyle",
      "#gains", "#shredded", "#chestday", "#cardioday", "#nopainnogain",
      "#dailygrindgym", "#mindovermatterfitness", "#naturalgains", "#fitnesscommunityindia", "#gymprogressdump",
      "#gymaddict", "#strengthtraining", "#fitspiration", "#gymrats", "#workoutroutine"
    ],
    trending30: [
      "#gymtok", "#pumpcheck", "#gymreels", "#workoutmotivation2026", "#hypertrophy",
      "#gymratlife", "#gainscheck", "#liftingheavy", "#shreddedphysique", "#fitnesstransformation",
      "#pushpulllegs", "#backandbiceps", "#chestpump", "#legdaypain", "#mindmuscleconnection",
      "#gymgoals", "#naturalbodybuilding", "#sweatsession", "#dailyworkout", "#strongereveryday",
      "#fitnessaddict", "#gymgrind", "#liftweights", "#fitfamindia", "#bodybuildinglifestyle",
      "#workoutsplit", "#physiquegoals", "#progressiveoverload", "#fitnessprogress", "#beastmodeon"
    ],
    reelsShorts: ["#gym", "#fitness", "#workout", "#gymmotivation", "#bodybuilding", "#gymlife", "#gains"],
    ladder: {
      high: ["#fitness", "#gym", "#workout", "#fitfam", "#bodybuilding", "#gymlife", "#fitnessmotivation", "#muscle"],
      medium: ["#gymmotivation", "#legdayworkout", "#fitnessjourney", "#gains", "#shredded", "#strengthtraining"],
      low: ["#dailygrindgym", "#mindovermatterfitness", "#naturalgains", "#gymprogressdump", "#mindmuscleconnection", "#progressiveoverload"]
    }
  },

  yoga_wellness: {
    id: "yoga_wellness",
    name: "Yoga, Calisthenics & Mindful Health",
    category: "fitness",
    icon: "🧘",
    description: "Flexibility, bodyweight skills, morning meditation, and holistic health.",
    avgReach: "14.2M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#yoga", "#yogalife", "#mindfulness", "#meditation", "#calisthenics",
      "#yogainspiration", "#wellness", "#innerpeace", "#yogaeverydamnday", "#flexibility",
      "#yogagirl", "#bodyweightworkout", "#healthandwellness", "#breathwork", "#yogajourney",
      "#mentalwellness", "#holisticliving", "#balanceandstrength", "#morningyoga", "#yogaflow",
      "#mindbodysoul", "#peacefulmind", "#calisthenicsmovement", "#yogalove", "#selfcarematters",
      "#healthyhabits", "#yogaposes", "#mindfulmovement", "#peaceofmind", "#dailyyoga"
    ],
    trending30: [
      "#yogainspirationdaily", "#calisthenicsworkout", "#bodyweighttraining", "#morningmindfulness", "#breathandflow",
      "#flexibilitygoals", "#yogapracticenotperfect", "#yogafordetox", "#peacefulhealing", "#mindfulnesspractice",
      "#yogacommunity", "#holisticwellness", "#bodyweightstrength", "#meditationtime", "#yogadaily",
      "#mindfulhabits", "#yogaforall", "#flexiblebody", "#movementculture", "#cleanliving",
      "#holistichealth", "#zenmode", "#innercalm", "#asanapractice", "#stretchdaily",
      "#yogaposeoftheday", "#mindfullife", "#calisthenicsskills", "#mindbodyconnection", "#peacefulenergy"
    ],
    reelsShorts: ["#yoga", "#yogalife", "#mindfulness", "#meditation", "#calisthenics", "#wellness", "#innerpeace"],
    ladder: {
      high: ["#yoga", "#meditation", "#wellness", "#mindfulness", "#healthandwellness", "#yogalife", "#flexibility", "#selfcarematters"],
      medium: ["#yogainspiration", "#yogaeverydamnday", "#calisthenics", "#bodyweightworkout", "#breathwork", "#yogajourney"],
      low: ["#balanceandstrength", "#morningyoga", "#calisthenicsmovement", "#mindfulmovement", "#breathandflow", "#movementculture"]
    }
  },

  // 5. FASHION, STYLE & BEAUTY
  fashion_streetwear: {
    id: "fashion_streetwear",
    name: "Streetwear, Sneakers & OOTD",
    category: "fashion",
    icon: "👟",
    description: "Sneaker drops, baggy fits, oversized tees, streetwear culture, and drip.",
    avgReach: "26.8M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#streetwear", "#sneakers", "#ootd", "#streetstyle", "#fashion",
      "#drip", "#sneakerhead", "#outfitoftheday", "#streetwearfashion", "#urbanstyle",
      "#hypebeast", "#outfitinspiration", "#oversized", "#baggyjeans", "#kicks",
      "#streetwearoutfit", "#fitcheck", "#dailyoutfit", "#snkrs", "#streetwearindia",
      "#dripcheck", "#fashiontrends", "#sneakercollector", "#vintageclothing", "#streetwearfits",
      "#casualoutfit", "#sneakerstyle", "#urbanstreetwear", "#streetfashioninspo", "#outfitdump"
    ],
    trending30: [
      "#streetweartok", "#fitchecktoday", "#sneakersof2026", "#dripfashion", "#streetwearinspo",
      "#oversizedfit", "#baggyoutfits", "#sneakerheadsindia", "#urbanfashioninspo", "#hypebeaststyle",
      "#streetwearculture", "#kicksoftheday", "#streetwearvibe", "#outfitideasformen", "#cleanfits",
      "#streetwearaesthetic", "#vintageoutfits", "#streetwearcommunity", "#dailyfits", "#sneakerlover",
      "#driptoohard", "#streetstylefashion", "#freshkicks", "#streetfits", "#outfitreel",
      "#streetwearbrands", "#baggycore", "#minimalstreetwear", "#sneakerheadcommunity", "#fitdump"
    ],
    reelsShorts: ["#streetwear", "#ootd", "#sneakers", "#streetstyle", "#drip", "#fitcheck", "#hypebeast"],
    ladder: {
      high: ["#fashion", "#streetwear", "#ootd", "#streetstyle", "#sneakers", "#outfitoftheday", "#hypebeast", "#style"],
      medium: ["#sneakerhead", "#streetwearfashion", "#urbanstyle", "#fitcheck", "#oversized", "#streetwearoutfit"],
      low: ["#streetwearindia", "#dripcheck", "#baggyjeans", "#sneakercollector", "#urbanstreetwear", "#cleanfits"]
    }
  },

  ethnic_saree: {
    id: "ethnic_saree",
    name: "Ethnic Glam & Saree Elegance",
    category: "fashion",
    icon: "🥻",
    description: "Saree drapes, traditional lehengas, festive wear, and desi aesthetic.",
    avgReach: "18.6M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#saree", "#sareelove", "#ethnicwear", "#traditional", "#indianwedding",
      "#sareedraping", "#ethnicfashion", "#desiwear", "#lehenga", "#indianculture",
      "#sareelover", "#desilook", "#ethnicglam", "#sareenotsorry", "#festivewear",
      "#traditionalwear", "#indianbeauty", "#sareegram", "#indianfashion", "#ethnicoutfit",
      "#sareeinspiration", "#desiswag", "#sareequeen", "#traditionallook", "#ethnicvibes",
      "#sareepost", "#culturaldress", "#desifashion", "#ethniccollection", "#sareestyling"
    ],
    trending30: [
      "#sareetrends2026", "#ethnicwearindia", "#sareedrapestyle", "#desiglam", "#traditionaloutfit",
      "#sareeblouseinspiration", "#festivefashion", "#indianethnicwear", "#sareeglam", "#lehengacholi",
      "#pureethnic", "#sareepassion", "#desilooks", "#traditionalvibe", "#sareesoftheseason",
      "#ethnicdress", "#sareediaries", "#indianfashionblogger", "#traditionalbeauty", "#desiaesthetic",
      "#sareelooks", "#ethnicchic", "#indianweddingwear", "#sareeloverclub", "#traditionalfashion",
      "#desigirlstyle", "#sareevideo", "#sareestylegoals", "#ethnicwearlove", "#sareeoftheday"
    ],
    reelsShorts: ["#saree", "#sareelove", "#ethnicwear", "#traditional", "#desiwear", "#sareedraping", "#ethnicglam"],
    ladder: {
      high: ["#saree", "#ethnicwear", "#traditional", "#indianwedding", "#lehenga", "#indianfashion", "#sareelove", "#desiwear"],
      medium: ["#sareedraping", "#ethnicfashion", "#desilook", "#ethnicglam", "#sareenotsorry", "#festivewear"],
      low: ["#sareeinspiration", "#desiswag", "#sareequeen", "#sareeblouseinspiration", "#sareediaries", "#ethnicchic"]
    }
  },

  // 6. FOOD & CAFE
  food_chai_cafe: {
    id: "food_chai_cafe",
    name: "Cafe Aesthetics, Coffee & Chai",
    category: "food",
    icon: "☕",
    description: "Chai tapri, specialty coffee latte art, cafe aesthetics, and bakery treats.",
    avgReach: "19.3M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#coffee", "#chai", "#chailover", "#coffeelover", "#cafe",
      "#cafehopping", "#coffeetime", "#latteart", "#chaitime", "#coffeeshop",
      "#coffeebreak", "#aestheticcafe", "#chaiphotography", "#coffeegram", "#morningcoffee",
      "#chailoversclub", "#cafelife", "#coffeeaddict", "#teatime", "#cozycafe",
      "#icedcoffee", "#chaidiaries", "#cafeculture", "#specialtycoffee", "#coffeelove",
      "#masalachai", "#coffeeporn", "#baristalife", "#cafefood", "#coffeedump"
    ],
    trending30: [
      "#cafeaestheticvibes", "#chaiaesthetic", "#specialtyroasters", "#coffeetok", "#chailoveforever",
      "#cozycoffeeshop", "#latteartgoals", "#coffeeritual", "#chaibreak", "#morningchailove",
      "#cafecorners", "#coffeeandbooks", "#chaivibes", "#aestheticcoffee", "#coffeequotes",
      "#coffeeshopvibes", "#chaisutra", "#brewmethods", "#cafediaries", "#coffeedate",
      "#coldcoffeelove", "#chaipic", "#coffeepassion", "#coffeemood", "#morningroutinecoffee",
      "#artisanbrew", "#chaitimefun", "#cafereel", "#coffeeoftheday", "#warmcuppa"
    ],
    reelsShorts: ["#coffee", "#chai", "#chailover", "#coffeetime", "#cafehopping", "#latteart", "#cafe"],
    ladder: {
      high: ["#coffee", "#coffeelover", "#cafe", "#coffeetime", "#latteart", "#coffeeshop", "#coffeeaddict", "#teatime"],
      medium: ["#chai", "#chailover", "#cafehopping", "#chaitime", "#aestheticcafe", "#cozycafe"],
      low: ["#chaiphotography", "#chailoversclub", "#chaidiaries", "#masalachai", "#specialtycoffee", "#chaisutra"]
    }
  },

  food_street_delish: {
    id: "food_street_delish",
    name: "Street Food & Foodie Cravings",
    category: "food",
    icon: "🍕",
    description: "Street food stalls, spicy cravings, burger dumps, and food vlogging.",
    avgReach: "25.7M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#food", "#foodie", "#foodporn", "#instafood", "#streetfood",
      "#yummy", "#delicious", "#foodphotography", "#foodstagram", "#foodlover",
      "#streetfoodindia", "#foodblogger", "#tasty", "#foodgasm", "#desifood",
      "#streetfoodlover", "#fastfood", "#foodvlog", "#foodiesofindia", "#delhifoodie",
      "#mumbaifoodie", "#foodcravings", "#homemadefood", "#spicyfood", "#sweettooth",
      "#foodiesofinstagram", "#cheatmeal", "#foodlove", "#foodielife", "#fooddump"
    ],
    trending30: [
      "#streetfoodreels", "#foodtok", "#viralstreetfood", "#foodcravingsdaily", "#desifoodie",
      "#tastyfood", "#indianstreetfood", "#mouthwateringfood", "#spicystreetfood", "#streetfoodchannel",
      "#foodloversindia", "#foodexplore", "#beststreetfood", "#foodvloggerlife", "#yummyinmytummy",
      "#deliciousfoodies", "#foodhunting", "#uniquefood", "#streetfoodtaste", "#foodiegram",
      "#delhieats", "#mumbaieats", "#foodaddiction", "#streetfoodlovers", "#eatfamous",
      "#foodheaven", "#comfortfood", "#foodblogging", "#foodiefeature", "#foodgravings"
    ],
    reelsShorts: ["#food", "#foodie", "#streetfood", "#foodporn", "#yummy", "#delicious", "#foodblogger"],
    ladder: {
      high: ["#food", "#foodie", "#foodporn", "#instafood", "#yummy", "#delicious", "#foodphotography", "#foodstagram"],
      medium: ["#streetfood", "#streetfoodindia", "#foodblogger", "#foodgasm", "#desifood", "#foodvlog"],
      low: ["#delhifoodie", "#mumbaifoodie", "#foodcravings", "#streetfoodlover", "#spicystreetfood", "#foodhunting"]
    }
  },

  // 7. TECH, AI & GAMING
  tech_coding_ai: {
    id: "tech_coding_ai",
    name: "Tech, Coding & AI Tools",
    category: "tech",
    icon: "🤖",
    description: "Web development, Python, AI prompts, software engineering, and gadgets.",
    avgReach: "20.1M Reach 🟢",
    difficulty: "Medium",
    preset30: [
      "#tech", "#technology", "#coding", "#programmer", "#developer",
      "#artificialintelligence", "#ai", "#softwaredeveloper", "#webdev", "#javascript",
      "#python", "#techgadgets", "#startuplife", "#programming", "#coders",
      "#machinelearning", "#datascience", "#techtrends", "#softwareengineering", "#buildinpublic",
      "#futuretech", "#codeandcoffee", "#techcommunity", "#developerlife", "#frontenddeveloper",
      "#backenddeveloper", "#aitools", "#coderlife", "#techinsider", "#techdump"
    ],
    trending30: [
      "#techtok", "#learntocode", "#codingreels", "#aitools2026", "#chatgptprompts",
      "#webdeveloperlife", "#fullstackdev", "#techstartups", "#programminghumor", "#techcareer",
      "#softwareengineerlife", "#futureoftech", "#generativeai", "#desksetupinspo", "#smarttech",
      "#codingtips", "#buildthefuture", "#codergoals", "#techcreator", "#devcommunity",
      "#javascriptdeveloper", "#pythonprogramming", "#appdevelopment", "#uiuxdesign", "#codingjourney",
      "#cleancode", "#techinnovations", "#codersofinstagram", "#futureai", "#developerworld"
    ],
    reelsShorts: ["#tech", "#coding", "#ai", "#developer", "#programming", "#technology", "#softwaredeveloper"],
    ladder: {
      high: ["#tech", "#technology", "#coding", "#programmer", "#developer", "#programming", "#ai", "#javascript"],
      medium: ["#artificialintelligence", "#softwaredeveloper", "#webdev", "#python", "#startuplife", "#machinelearning"],
      low: ["#buildinpublic", "#futuretech", "#codeandcoffee", "#aitools", "#techcreator", "#desksetupinspo"]
    }
  },

  gaming_anime: {
    id: "gaming_anime",
    name: "Gaming & Anime Culture",
    category: "tech",
    icon: "🎮",
    description: "Esports, PC battle stations, anime edits, gameplay highlights, and streamers.",
    avgReach: "31.2M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#gaming", "#gamer", "#anime", "#videogames", "#gamers",
      "#ps5", "#xbox", "#pcgaming", "#gamingcommunity", "#esports",
      "#streamer", "#twitchstreamer", "#animeedit", "#gameplay", "#battlestation",
      "#gamingmemes", "#otaku", "#animelover", "#gamingsetup", "#nintendo",
      "#gaminglife", "#manga", "#animeart", "#gamingclips", "#proplayer",
      "#rpg", "#gamingposts", "#animememes", "#gamergirl", "#gamingdump"
    ],
    trending30: [
      "#gametok", "#animetok", "#gaminghighlight", "#clutchmoment", "#animeedits2026",
      "#pcsetupinspo", "#streamerlife", "#gamingreels", "#gamingshorts", "#weebculture",
      "#animecommunity", "#competitivegaming", "#esportsplayer", "#gamingmoments", "#epicgameplay",
      "#gamingskills", "#custompcbuild", "#rgbsetup", "#cosplaycommunity", "#animelife",
      "#gamingvibes", "#gamergoals", "#headshotclip", "#retrogaming", "#gaminglifestyle",
      "#animefan", "#gamingnews", "#nextgengaming", "#pcgamerlife", "#streamersupport"
    ],
    reelsShorts: ["#gaming", "#gamer", "#anime", "#videogames", "#gamingsetup", "#gameplay", "#animeedit"],
    ladder: {
      high: ["#gaming", "#gamer", "#anime", "#videogames", "#ps5", "#pcgaming", "#gameplay", "#gamingcommunity"],
      medium: ["#streamer", "#gamingmemes", "#animeedit", "#gamingsetup", "#esports", "#otaku"],
      low: ["#battlestation", "#gamingclips", "#custompcbuild", "#clutchmoment", "#gaminghighlight", "#pcsetupinspo"]
    }
  },

  // 8. LUXURY, CARS & WEALTH
  luxury_cars: {
    id: "luxury_cars",
    name: "Supercars & Luxury Lifestyle",
    category: "luxury",
    icon: "🏎️",
    description: "Exotic supercars, luxury watches, private jets, high net worth lifestyle.",
    avgReach: "27.5M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#luxury", "#supercars", "#luxurylifestyle", "#cars", "#carsofinstagram",
      "#supercarsofindia", "#billionaire", "#rich", "#wealth", "#ferrari",
      "#lamborghini", "#porsche", "#luxurycars", "#expensive", "#exoticcars",
      "#millionairemindset", "#carporn", "#dreamcar", "#speedandluxury", "#hypercar",
      "#carlifestyle", "#luxuryliving", "#privatejet", "#rolex", "#eliteclass",
      "#carphotography", "#luxurytravel", "#v12", "#carspotting", "#luxurydump"
    ],
    trending30: [
      "#supercarsoftheworld", "#luxurycarsdaily", "#exoticcarspotting", "#billionairelifestyle", "#carreels",
      "#hypercarsdaily", "#millionairegrind", "#luxurywatchclub", "#fastandluxury", "#supercarreels",
      "#luxurylivingstyle", "#highrollers", "#supercarsspotting", "#dreamcarsdaily", "#luxelifestyle",
      "#exoticsonroad", "#carpornography", "#lambolife", "#ferrarifans", "#luxuryauto",
      "#luxurymotors", "#carphotographyindia", "#billionairemind", "#wealthbuilding", "#opulentlife",
      "#supercarculture", "#speeddemons", "#luxurydrive", "#supercardaily", "#elitelifestyle"
    ],
    reelsShorts: ["#luxury", "#supercars", "#luxurylifestyle", "#cars", "#lamborghini", "#ferrari", "#luxurycars"],
    ladder: {
      high: ["#luxury", "#supercars", "#cars", "#carsofinstagram", "#billionaire", "#luxurylifestyle", "#wealth", "#rich"],
      medium: ["#luxurycars", "#ferrari", "#lamborghini", "#porsche", "#millionairemindset", "#exoticcars"],
      low: ["#supercarsofindia", "#hypercar", "#speedandluxury", "#carspotting", "#luxurywatchclub", "#opulentlife"]
    }
  },

  // 9. CELEBRATIONS & FESTIVALS
  birthday_celebration: {
    id: "birthday_celebration",
    name: "Birthday Celebrations & Parties",
    category: "celebration",
    icon: "🎂",
    description: "Birthday photo dumps, party vibes, cake cutting, and milestone celebrations.",
    avgReach: "23.9M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#birthday", "#happybirthday", "#birthdaygirl", "#birthdayboy", "#celebration",
      "#birthdayvibes", "#birthdaycake", "#party", "#birthdayparty", "#anotheryearolder",
      "#birthdaycelebration", "#cheerstoanotheryear", "#birthdaylove", "#makingmemories", "#birthdaydump",
      "#turningolder", "#specialday", "#birthdayqueen", "#birthdayking", "#birthdaywishes",
      "#blessedwithanotheryear", "#birthdayfun", "#partynight", "#cakecutting", "#birthdayglam",
      "#birthdayphotodump", "#birthdaysurprise", "#celebratelife", "#gratefulheart", "#birthdaybash"
    ],
    trending30: [
      "#birthdayvibe2026", "#birthdayaesthetic", "#birthdaymoments", "#birthdayoutfitinspo", "#birthdayreel",
      "#celebratingme", "#birthdayglow", "#specialdayvibes", "#birthdaydinner", "#birthdaycheers",
      "#cakeandcandles", "#blessedbirthday", "#birthdaypost", "#birthdayweekend", "#birthdaycountdown",
      "#birthdayseason", "#birthdayloveandwishes", "#birthdaynightout", "#birthdaypartyideas", "#celebrateeveryday",
      "#gratefulformylife", "#birthdaymagic", "#birthdaylook", "#birthdaytreat", "#birthdaydiaries",
      "#birthdayvibesonpoint", "#cheerstoanotherchapter", "#newchapterunlocked", "#birthdayblessings", "#bdaycelebration"
    ],
    reelsShorts: ["#birthday", "#happybirthday", "#birthdaygirl", "#celebration", "#birthdayvibes", "#birthdayparty", "#birthdaycake"],
    ladder: {
      high: ["#birthday", "#happybirthday", "#celebration", "#party", "#birthdayparty", "#birthdaygirl", "#birthdayboy", "#specialday"],
      medium: ["#birthdayvibes", "#birthdaycake", "#birthdaycelebration", "#birthdayqueen", "#birthdaydump", "#birthdaywishes"],
      low: ["#blessedwithanotheryear", "#birthdayphotodump", "#birthdaysurprise", "#cheerstoanotheryear", "#newchapterunlocked", "#birthdayglow"]
    }
  },

  wedding_couple_event: {
    id: "wedding_couple_event",
    name: "Weddings, Sangeet & Bridal",
    category: "celebration",
    icon: "💍",
    description: "Bridal entry, mehendi, sangeet dancing, wedding vows, and royal mandap.",
    avgReach: "29.1M Reach 🔥",
    difficulty: "Viral",
    preset30: [
      "#wedding", "#indianwedding", "#weddingphotography", "#bride", "#groom",
      "#weddingseason", "#weddinginspiration", "#bridallook", "#sangeetnight", "#mehendiceremony",
      "#weddingdress", "#shaadiseason", "#bridalmakeup", "#weddingmoments", "#indianbride",
      "#coupleshoot", "#weddingday", "#royalwedding", "#haldivibes", "#weddinggoals",
      "#shaadivibes", "#bridalentry", "#weddingdecor", "#destinationwedding", "#weddingdiaries",
      "#justmarried", "#weddingsutra", "#weddingphotographer", "#foreverinlove", "#weddingdump"
    ],
    trending30: [
      "#weddingtrends2026", "#bridaloutfitinspo", "#shaadimagic", "#sangeetdanceperformance", "#mehendidesigns",
      "#weddingreelsvideo", "#royalweddinglook", "#haldiceremonyvibes", "#bridalglow", "#indianweddingdecor",
      "#weddingbells", "#shaaditime", "#brideandgroomgoals", "#weddingcelebration", "#destinationweddingindia",
      "#weddingstory", "#shaadidiaries", "#lehengabride", "#weddingdraping", "#bigfatindianwedding",
      "#varmalaceremony", "#mandapdecor", "#weddingdaymemories", "#loveandweddings", "#bridaljewelry",
      "#weddingcinematography", "#shaadilooks", "#weddingelegance", "#dreamwedding", "#weddinginspo"
    ],
    reelsShorts: ["#wedding", "#indianwedding", "#bride", "#weddingseason", "#weddingphotography", "#bridallook", "#shaadiseason"],
    ladder: {
      high: ["#wedding", "#indianwedding", "#weddingphotography", "#bride", "#groom", "#weddingseason", "#weddingdress", "#weddingday"],
      medium: ["#weddinginspiration", "#bridallook", "#sangeetnight", "#mehendiceremony", "#shaadiseason", "#bridalmakeup"],
      low: ["#shaadivibes", "#bridalentry", "#destinationwedding", "#weddingsutra", "#haldivibes", "#mandapdecor"]
    }
  }
};
