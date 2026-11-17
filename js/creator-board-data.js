/* FISH ME! Creator Crew weekly board data (creator-board.html).
   Update this file once a week:
   - weekStart / payday / checked: dates as YYYY-MM-DD. Videos posted from weekStart up to payday count; Diamonds go out on payday (Saturday).
   - creators: one row per crew member. tier is Bait, Angler, Captain or Admiral. avatar is a 160x160 image in img/creator-board/avatars/.
   - videos: one row per FISH ME! video found this week.
       status: "ok" = Approved, "wait" = Waiting for a Reviewer, "bad" = Missing #FISHME
       idea: the Idea Board number if the caption tags one (worth 2 Catch Points instead of 1)
       note: optional line shown under the video
*/
const DATA = {
  weekStart: "2026-11-14",
  payday: "2026-11-21",
  checked: "2026-11-17",
  tiers: {
    Bait:    {cls:"t1", level:"Tier 1", icon:"img/creator-crew/icon-hook.webp",    rate:120,   unit:"per approved video"},
    Angler:  {cls:"t2", level:"Tier 2", icon:"img/creator-crew/icon-runner.webp",  rate:320,   unit:"per approved video"},
    Captain: {cls:"t3", level:"Tier 3", icon:"img/creator-crew/icon-reel.webp", rate:520,   unit:"per approved video"},
    Admiral: {cls:"t4", level:"Tier 4", icon:"img/creator-crew/icon-trophy.webp", rate:10000, unit:"every month", monthly:true}
  },
  creators: [
    {name:"Mreggy3", discord:"MR.EGGY🥚", tier:"Angler", link:"https://www.tiktok.com/@mreggy3", handle:"mreggy3", profile:"Mr.Eggy🥚", avatar:"img/creator-board/avatars/mreggy3.webp"},
    {name:"ryano82", discord:"🇮🇪Ryano🎄(3.16k/5k)subs🎉", tier:"Angler", link:"https://www.youtube.com/@rbrb-ie", handle:"RBRB-ie", profile:"RBRBVR", avatar:"img/creator-board/avatars/rbrb-ie.webp"},
    {name:"gxuv.", discord:"💸|†-ZenTRO-†|💸", tier:"Angler", link:"https://www.tiktok.com/@xkaified", handle:"xkaified", profile:"ZenTRO", avatar:"img/creator-board/avatars/xkaified.webp"},
    {name:"Bam Am", discord:"Bam am", tier:"Angler", link:"https://www.youtube.com/@Bamam999", handle:"Bamam999", profile:"Bam am", avatar:"img/creator-board/avatars/bamam999.webp"},
    {name:"blockbuildere", discord:"!| BlockBuilderE 📦 |!", tier:"Angler", link:"https://www.youtube.com/@BlockBuilderE", handle:"BlockBuilderE", profile:"BlockBuilderE Gaming", avatar:"img/creator-board/avatars/blockbuildere.webp"},
    {name:"RedRiptide", discord:"Red Riptide", tier:"Angler", link:"https://www.youtube.com/@RedRiptide", handle:"RedRiptide", profile:"Red Riptide", avatar:"img/creator-board/avatars/redriptide.webp"},
    {name:"60v.sor", discord:"🇻🇦Soren🇩🇪 (ping4help)", tier:"Bait", link:"https://www.tiktok.com/@60v.sor", handle:"60v.sor", profile:"🇻🇦Soren🇩🇪", avatar:"img/creator-board/avatars/60v-sor.webp"},
    {name:"frogvr5414", discord:"Plurpiz_15.2011", tier:"Bait", link:"https://www.youtube.com/@plurpiz15", handle:"Plurpiz15", profile:"Plurpiz15", avatar:"img/creator-board/avatars/plurpiz15.webp"},
    {name:"Slingezy", discord:"Slingezy", tier:"Bait", link:"https://www.youtube.com/@slingezy", handle:"Slingezy", profile:"Slingezy", avatar:"img/creator-board/avatars/slingezy.webp"},
    {name:"ametrinevr", discord:"🦃 Ameturkey 🦃", tier:"Bait", link:"https://www.youtube.com/@ametrinevr", handle:"AmetrineVR", profile:"Ametrine", avatar:"img/creator-board/avatars/ametrinevr.webp"},
    {name:"Thegamermevr3", discord:"Thegamermevr", tier:"Bait", link:"https://www.youtube.com/@thegamermevr", handle:"Thegamermevr", profile:"GamerGT", avatar:"img/creator-board/avatars/thegamermevr.webp"},
    {name:"poopy6969", discord:"POOPY", tier:"Bait", link:"https://www.tiktok.com/@69zzz675", handle:"69zzz675", profile:"🤨🥱", avatar:"img/creator-board/avatars/69zzz675.webp"},
    {name:"turtle_man32", discord:"buter_vr", tier:"Bait", link:"https://www.youtube.com/@buter__VR111", handle:"buter__VR111", profile:"buter__vr", avatar:"img/creator-board/avatars/buter__vr111.webp"},
    {name:"dustin73245256357", discord:"dustin", tier:"Bait", link:"https://www.youtube.com/@shiestygangsters", handle:"shiestygangsters", profile:"shiesty gangsters", avatar:"img/creator-board/avatars/shiestygangsters.webp"},
    {name:"Bentley130667", discord:"Bentley13", tier:"Bait", link:"https://www.tiktok.com/@bentley5766", handle:"bentley5766", profile:"Bentley", avatar:"img/creator-board/avatars/bentley5766.webp"},
    {name:"Ilovegtag0742", discord:"blueboiivrcc", tier:"Bait", link:"https://www.youtube.com/@blueboiivr", handle:"blueboiivr", profile:"blueboiivr and miguel", avatar:"img/creator-board/avatars/blueboiivr.webp"},
    {name:"ryder_71818", discord:"Ryder718", tier:"Bait", link:"https://www.youtube.com/@ryder718.18", handle:"Ryder718.18", profile:"Ryder718", avatar:"img/creator-board/avatars/ryder718-18.webp"},
    {name:"WafflePlopVR", discord:"WafflePlopVR", tier:"Bait", link:"https://www.youtube.com/@waffleplopvr", handle:"WafflePlopVR", profile:"WafflePlopVR", avatar:"img/creator-board/avatars/waffleplopvr.webp"},
    {name:"swishylava", discord:"Player1", tier:"Bait", link:"https://www.youtube.com/@tamvibesvr", handle:"TAMVibesVR", profile:"Vibes gd", avatar:"img/creator-board/avatars/tamvibesvr.webp"},
    {name:"official_fishyvr", discord:"FishyVR", tier:"Bait", link:"https://www.tiktok.com/@official_fishyvr", handle:"official_fishyvr", profile:"FishyVr", avatar:"img/creator-board/avatars/official_fishyvr.webp"},
    {name:"lavavr12345", discord:"LAVAVR123", tier:"Bait", link:"https://www.tiktok.com/@lavavr1234", handle:"lavavr1234", profile:"LAVAVR123", avatar:"img/creator-board/avatars/lavavr1234.webp"},
    {name:"novavrofficial", discord:"!『Nova』!", tier:"Bait", link:"https://www.youtube.com/@novavrofficial", handle:"Novavrofficial", profile:"ᑎOᐯᗩᐯᖇOᖴᖴIᑕIᗩᒪ", avatar:"img/creator-board/avatars/novavrofficial.webp"},
    {name:"patriot.vr_lar109", discord:"Patriot || Ping 4 help", tier:"Bait", link:"https://www.youtube.com/@Patriotvr.1209", handle:"Patriotvr.1209", profile:"PatriotVR", avatar:"img/creator-board/avatars/patriotvr.webp"},
    {name:"s3b_1624", discord:"!Mr_Sebb🇨🇦 (Ping4help)", tier:"Bait", link:"", handle:"", profile:"", avatar:"img/creator-board/avatars/no-channel.webp"},
    {name:"banana.dog0850", discord:"Bananadog0850.yt 810 subs", tier:"Bait", link:"https://www.youtube.com/@Bananadog0850", handle:"Bananadog0850", profile:"Bananadog0850🍌🐶", avatar:"img/creator-board/avatars/bananadog0850.webp"}
  ],
  /* status: ok = Approved, wait = Waiting for a Reviewer, bad = Missing #FISHME. idea = Idea Board number if tagged */
  videos: [
    {creator:"RedRiptide", platform:"YouTube", url:"https://www.youtube.com/shorts/TilS7Iu_KVY", title:"Radiation fish are no joke!", date:"2026-11-16", views:969, likes:5, status:"ok", idea:6},
    {creator:"RedRiptide", platform:"YouTube", url:"https://www.youtube.com/shorts/VsadJxbHx6M", title:"Dev chaos inside of Fish Me!", date:"2026-11-15", views:523, likes:7, status:"wait"},
    {creator:"RedRiptide", platform:"YouTube", url:"https://www.youtube.com/shorts/8DttBIQ-lYs", title:"Weekly quest completed!", date:"2026-11-14", views:433, likes:5, status:"bad", note:"Caption uses #fishmevr. Add #FISHME and the Discord link."},
    {creator:"gxuv.", platform:"TikTok", url:"https://www.tiktok.com/@xkaified/video/7708148139978460438", title:"You Don't Have To Ask Me Twice! 😂😂", date:"2026-11-14", views:908, likes:9, status:"wait"},
    {creator:"gxuv.", platform:"TikTok", url:"https://www.tiktok.com/@xkaified/video/7708129246157212950", title:"LET ME OUTTT!!! 😂", date:"2026-11-14", views:821, likes:3, status:"wait"},
    {creator:"gxuv.", platform:"TikTok", url:"https://www.tiktok.com/@xkaified/video/7708414013180284182", title:"10 Types Of FISHERS In FISH ME! 🎣", date:"2026-11-15", views:268, likes:4, status:"wait"},
    {creator:"gxuv.", platform:"TikTok", url:"https://www.tiktok.com/@xkaified/video/7708661600755911958", title:"BE A FISH ME OG TODAY!🎣💫", date:"2026-11-16", views:254, likes:5, status:"wait"},
    {creator:"lavavr12345", platform:"TikTok", url:"https://www.tiktok.com/@lavavr1234/video/7708138323461672206", title:"Idea #5: Machete only", date:"2026-11-14", views:308, likes:4, status:"ok", idea:5},
    {creator:"lavavr12345", platform:"TikTok", url:"https://www.tiktok.com/@lavavr1234/video/7708134877752790286", title:"teaching a new player how to play", date:"2026-11-14", views:257, likes:3, status:"wait", note:"Caption uses #fishmevr. Add #FISHME."},
    {creator:"ryano82", platform:"YouTube", url:"https://www.youtube.com/shorts/QSxDR6qDxDU", title:"New Game Free Cosmetics", date:"2026-11-15", views:269, likes:2, status:"wait"},
    {creator:"60v.sor", platform:"TikTok", url:"https://www.tiktok.com/@60v.sor/video/7708568031651171598", title:"New fish me update", date:"2026-11-16", views:237, likes:7, status:"wait"},
    {creator:"poopy6969", platform:"TikTok", url:"https://www.tiktok.com/@69zzz675/video/7708321489740746014", title:"#fish #vr #fishme #gorilla #og", date:"2026-11-15", views:134, likes:3, status:"wait"},
    {creator:"Mreggy3", platform:"TikTok", url:"https://www.tiktok.com/@mreggy3/video/7708470332729920799", title:"Best game of all time", date:"2026-11-15", views:161, likes:2, status:"bad"},
    {creator:"WafflePlopVR", platform:"YouTube", url:"https://www.youtube.com/shorts/iJ2mU9dooWg", title:"THANKS GUYS!", date:"2026-11-15", views:123, likes:2, status:"wait"},
    {creator:"Ilovegtag0742", platform:"YouTube", url:"https://www.youtube.com/shorts/wc7sVQxTfAU", title:"fish me but i can only fish for 5 mins", date:"2026-11-14", views:58, likes:0, status:"ok", idea:12},
    {creator:"WafflePlopVR", platform:"YouTube", url:"https://www.youtube.com/shorts/bb-OLyufMQQ", title:"My top 5 Fish me cosmetics!", date:"2026-11-15", views:34, likes:0, status:"ok", idea:30}
  ]
};

/* Idea Board: 50 ideas, numbered in this order (the first line is #1).
   Keep the order the same so the idea numbers in captions stay right. */
const IDEAS = [
  ["Funniest fish escape", "Show the fish that got away from you in the funniest ways."],
  ["My fish attacked me", "Some fish fight back, so show the time one got you."],
  ["Funniest fails", "Missed shots, bad falls and everything that went wrong."],
  ["Whole lobby vs one fish", "Get your whole lobby to chase the same fish."],
  ["Machete only", "Play a full session using nothing but the Machete."],
  ["Radiation chaos", "Radiation fish always attack, so see if you can handle one."],
  ["Catch a Rainbow fish", "Keep fishing until you land the rarest mutation."],
  ["Silent fishing", "Play a whole session without saying a single word."],
  ["Speedrun your first catch", "Join a new lobby and see how fast you can land your first fish."],
  ["Funniest monkey moments", "Clip the silliest things the monkeys in your lobby do."],
  ["10 different fish", "Catch 10 different species in one session."],
  ["Catch a Secret fish", "Go hunting for a fish from the rarest tier."],
  ["Hot Rock only", "Spend a whole session fishing only on Hot Rock."],
  ["Every weapon, one fish each", "Kill one fish with every weapon you own."],
  ["Catch every mutation", "Try to catch Stone, Bronze, Gold, Radiation and Rainbow."],
  ["No fish escapes", "Play a session where you don't let a single fish get away."],
  ["One-arm challenge", "Fish, move and fight using only one arm."],
  ["First trip to Hot Rock", "Film your very first visit to Hot Rock."],
  ["Beat the Hammerhead", "Take on the Hammerhead boss and show how it goes."],
  ["Glock only on Hot Rock", "See if you can survive Hot Rock with just a Glock."],
  ["FISH ME! in 60 seconds", "Explain the game to a new player in one minute."],
  ["My favorite fishing spot", "Show the spot on Hot Rock where you catch the best fish."],
  ["Summon a boss with Boss Bait", "Show how you call a boss and what happens next."],
  ["Which weapon to buy first?", "Tell new players which weapon you'd get first and why."],
  ["How to stop fish escaping", "Share your best tips for finishing a catch."],
  ["Beginner tips", "Share three tips you wish you knew on your first day."],
  ["Movement tricks for fishing", "Show the arm-swing moves that help you chase fish."],
  ["Rarities explained", "Show what each rarity looks like, from Uncommon to Secret."],
  ["Upgrade Machine guide", "Show how you use the Upgrade Machine on your rod."],
  ["My top 5 cosmetics", "Show off the five looks you like most."],
  ["Hot Rock tour", "Walk us around Hot Rock and show what's there."],
  ["Hot Rock hidden spots", "Show the secret corners of Hot Rock that nobody knows about."],
  ["My biggest catch ever", "Show your biggest fish and how you caught it."],
  ["Rating every boat", "Try the boats from Starter Boat to Yacht and rate them."],
  ["Day 1 vs now", "Put your first clips next to how you play today."],
  ["Lose a fish at the last second", "Show a catch you lost right at the end."],
  ["Visit Creator Dock", "Go to Creator Dock and show what you find."],
  ["Lobby fashion show", "Find the best-dressed monkey in your lobby."],
  ["Everything new in the update", "Show what changed in the latest update."],
  ["Rare catch reaction", "Film your real reaction when you land something rare."],
  ["First catch of the day", "Hop in and film the first fish you catch."],
  ["10 fish in 5 minutes", "See how many fish you can catch before time runs out."],
  ["Biggest vs smallest fish", "Find the biggest and the smallest fish you can."],
  ["Chase a runaway fish", "Follow one fish that got away as far as it goes."],
  ["Fishing with a new friend", "Team up with someone new from your lobby."],
  ["Fish from every corner", "Catch a fish from every side of Hot Rock in one session."],
  ["Gold fish hunt", "Keep fishing until you catch a Gold fish."],
  ["Duo with another creator", "Team up with another Creator Crew member."],
  ["Lobby vs Hot Rock boss", "Get your lobby together to fight the Hot Rock boss."],
  ["Boat race with the lobby", "Race your lobby across the water and see whose boat wins."]
];
