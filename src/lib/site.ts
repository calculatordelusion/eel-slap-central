export const SITE = {
  name: "Eel Slap",
  tagline: "The complete guide to the internet's most oddly satisfying eel",
  publisher: "Eel Slap",
  updated: "2026-08-14",
  reviewed: "2026-08-14",
};

export type NavItem = { label: string; to: string; description?: string };

export const NAV: { label: string; items: NavItem[] }[] = [
  {
    label: "Explore",
    items: [
      { label: "Play Eel Slap", to: "/play", description: "The interactive slap, rebuilt for modern browsers" },
      { label: "What is Eel Slap?", to: "/about", description: "A plain-language definition and quick answers" },
      { label: "How it works", to: "/how-it-works", description: "Frame sequences, cursor tracking and preloading" },
      { label: "Gallery", to: "/gallery", description: "Frames, interface details and visual anatomy" },
    ],
  },
  {
    label: "Learn",
    items: [
      { label: "History", to: "/history", description: "From 2011 single-serving site to lasting classic" },
      { label: "Internet meme history", to: "/meme-history", description: "Where Eel Slap sits in meme culture" },
      { label: "Fun facts", to: "/fun-facts", description: "Trivia, numbers and oddities" },
      { label: "FAQ", to: "/faq", description: "Every common question, answered directly" },
    ],
  },
  {
    label: "More",
    items: [
      { label: "Blog", to: "/blog", description: "Essays on nostalgia, Flash and browser toys" },
      { label: "Resources", to: "/resources", description: "Sources, further reading and similar sites" },
      { label: "Editorial policy", to: "/editorial-policy", description: "How we research and fact-check" },
      { label: "Contact", to: "/contact", description: "Corrections, tips and questions" },
    ],
  },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "HTML Sitemap", to: "/sitemap" },
];

export const ALL_PAGES: NavItem[] = [
  { label: "Home", to: "/" },
  ...NAV.flatMap((g) => g.items),
  ...FOOTER_LEGAL,
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is Eel Slap?",
    a: "Eel Slap is a single-serving website where moving your mouse left and right swings a live eel into the face of a calm-looking man. It is a browser toy, not a game you can win: there is no score, no timer and no goal beyond the slap itself.",
  },
  {
    q: "Is Eel Slap safe to play?",
    a: "Yes, Eel Slap is broadly safe and harmless. It contains no gore, no offensive language, and requires no user accounts or personal data. It is a piece of slapstick humor using a fish, similar to a digital flipbook.",
  },
  {
    q: "Who is the man in the Eel Slap video?",
    a: "The man is a model who posed specifically for the frame sequence. He is intentionally anonymous to keep the joke focused on the absurdity of the situation rather than a specific person. His calm expression is a key part of the meme's humor.",
  },
  {
    q: "What is the name of the fish in Eel Slap?",
    a: "The fish used in the original animation is a real eel. Its physical weight and texture are what make the animation look so convincing and satisfying when it 'lands' on the target's face.",
  },
  {
    q: "How do you play Eel Slap on mobile?",
    a: "On mobile devices and touch screens, you simply drag your finger horizontally across the image. The animation will follow your touch position exactly as it would a mouse cursor on a desktop computer.",
  },
  {
    q: "Does Eel Slap still work without Flash?",
    a: "Yes. Eel Slap never actually used Flash. It was built using a clever sequence of preloaded JPEG images and a small bit of JavaScript, which is why it survived the 2020 'Flash-pocalypse' that killed many other classic browser games.",
  },
  {
    q: "Why is Eel Slap so satisfying?",
    a: "The satisfaction comes from the immediate, 1:1 response between your hand movement and the eel's motion. This tight feedback loop, combined with the 'wet' visual impact of the eel, creates a unique sensory experience.",
  },
  {
    q: "What was the original Eel Slap website?",
    a: "The original Eel Slap was published at eelslap.com in 2011. Since then, several mirrors and copies have appeared to preserve the 'slapping with a fish' experience, including eelslap.org and this definitive archive, which is optimized to be the best and fastest way to play the eel slap game online today.",
  },
];

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  updated: string;
  minutes: number;
  body: Section[];
};

export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
};

export const POSTS: Post[] = [
  {
    slug: "how-eel-slap-became-an-internet-legend",
    title: "How Eel Slap Became an Internet Legend",
    description:
      "A look at the design decisions, timing and sharing habits that turned a one-joke website into a link people still send in 2026.",
    category: "Eel Slap",
    date: "2026-02-11",
    updated: "2026-08-14",
    minutes: 8,
    body: [
      {
        paragraphs: [
          "Most joke websites get one good week. Eel Slap got fifteen years and counting. The interesting question is not why people laughed the first time — a man being hit with a fish is a reliable gag — but why the link kept moving long after the novelty should have worn off.",
          "The short answer: the site is honest about being one joke, and it delivers that joke faster than almost anything else on the web.",
        ],
      },
      {
        heading: "The three-second contract",
        paragraphs: [
          "Eel Slap makes a deal with you in about three seconds. You arrive, you see a man, you move the mouse, the eel lands. There is no tutorial, no cookie wall between you and the punchline, no account, no loading bar that outlasts your patience.",
          "That speed matters more than it sounds. A shared link competes with everything else in a person's tab bar. Anything that asks for setup before the payoff loses. Eel Slap front-loads the payoff and asks for nothing.",
        ],
        bullets: [
          "Zero onboarding: the interaction is the instruction.",
          "Zero state: nothing is saved, so nothing has to be explained.",
          "Zero cost to leave: which paradoxically makes people stay longer.",
        ],
      },
      {
        heading: "Control is the joke",
        paragraphs: [
          "Watching a slap is mildly funny. Performing one is much funnier, because you own the timing. Slow the cursor and you get an agonising wind-up. Whip it across and the eel becomes a blur. The humour scales with your input, so the same twenty-odd frames produce dozens of different gags.",
          "This is the same trick behind flipbooks and scrubbing a video timeline: handing the audience the clock converts a passive image into a performance.",
        ],
      },
      {
        heading: "Built out of the boring parts of the web",
        paragraphs: [
          "Eel Slap is essentially a preloaded image sequence indexed by cursor position. There is no plugin, no engine, no build system that will rot. When Flash Player was switched off at the end of 2020 and huge stretches of 2000s web culture went dark overnight, Eel Slap simply carried on.",
          "Choosing unglamorous technology is an underrated form of preservation. The sites that survive are rarely the most advanced ones; they are the ones that asked the browser for the least.",
        ],
      },
      {
        heading: "Sharing without context",
        paragraphs: [
          "The classic Eel Slap message is a bare URL with no explanation. That absence is the setup — the recipient has to click to find out what it is, and the discovery is the reward. Adding a description would defuse it.",
          "Single-serving sites are built for exactly this kind of transmission. One page, one idea, one domain that tells you nothing and everything at once.",
        ],
      },
      {
        heading: "What builders can take from it",
        bullets: [
          "Ship the payoff before the polish. If the core interaction is not fun in three seconds, more features will not fix it.",
          "Give the user the timing. Interactivity that changes the rhythm of a joke beats interactivity that only changes the outcome.",
          "Prefer durable technology. Plain images and a few lines of script outlive frameworks and plugins.",
          "Keep the surface small. One page cannot confuse anyone.",
        ],
      },
    ],
  },
  {
    slug: "history-of-internet-flash-games",
    title: "A Short History of Internet Flash Games",
    description:
      "How Flash turned browsers into arcades, what the 2020 shutdown destroyed, and which parts of that culture survived in other forms.",
    category: "Web History",
    date: "2026-01-22",
    updated: "2026-08-14",
    minutes: 10,
    body: [
      {
        paragraphs: [
          "For roughly fifteen years, the browser was an arcade. Between the late 1990s and the mid 2010s, Flash let one person with a laptop build, publish and distribute a playable game without a publisher, a store or a download.",
        ],
      },
      {
        heading: "Why Flash won",
        bullets: [
          "It bundled drawing tools, animation timeline and a scripting language in one program.",
          "Vector art stayed sharp and small, which mattered enormously on dial-up and early broadband.",
          "The player plugin reached near-universal desktop installation, so 'works everywhere' was true in practice.",
          "Portals paid creators, which turned a hobby into a viable first job for a generation of developers.",
        ],
      },
      {
        heading: "A rough timeline",
        table: {
          head: ["Period", "What defined it"],
          rows: [
            ["1996–2000", "FutureSplash becomes Flash; animation and navigation intros dominate."],
            ["2000–2005", "Portal era: user-submitted games, ratings and sponsorships create a real economy."],
            ["2005–2010", "Peak output. Physics puzzlers, tower defence and idle games are invented or popularised here."],
            ["2010–2015", "Mobile app stores and HTML5 pull attention and money away from the plugin."],
            ["2017", "Adobe announces end-of-life for Flash Player."],
            ["Dec 2020", "Flash Player is switched off; embedded content stops running in mainstream browsers."],
          ],
        },
      },
      {
        heading: "What the shutdown actually cost",
        paragraphs: [
          "Losing a plugin is not the same as losing files, but in practice both happened. Many portals had already vanished, taking uploads with them. Source files were rarely archived. Games with server-side score systems lost half of themselves when the servers went quiet.",
          "Emulation projects and large archive efforts rescued a substantial slice of the catalogue, but they preserve the artefact more than the context: the comment threads, the front pages, the arguments about difficulty.",
        ],
      },
      {
        heading: "The parts that survived",
        paragraphs: [
          "Genres migrated. Idle and incremental games moved wholesale to mobile and the modern web. Physics puzzles found new life as app-store staples. And the non-game corner of the same culture — single-serving sites, toys, one-joke pages built from plain HTML and images — often survived untouched, because it never needed the plugin at all.",
          "Eel Slap belongs to that second group: same era, same sense of humour, different plumbing, and therefore still online.",
        ],
      },
    ],
  },
  {
    slug: "why-single-serving-sites-still-work",
    title: "Why Single-Serving Sites Still Work",
    description:
      "One page, one joke, one domain. An examination of the format that produced Eel Slap and why it keeps outliving richer web experiences.",
    category: "Internet Culture",
    date: "2025-12-03",
    updated: "2026-08-14",
    minutes: 7,
    body: [
      {
        paragraphs: [
          "A single-serving site does exactly one thing. It answers a question, shows one image, plays one sound, or supports one tiny interaction. Then it stops. No navigation, no related content, no newsletter interrupting the punchline.",
        ],
      },
      {
        heading: "The format's rules",
        bullets: [
          "One page. Scrolling is optional; navigation is absent.",
          "One idea, stated by the domain name itself.",
          "Instant payoff — the concept lands before you decide whether to stay.",
          "No account, no settings, usually no state at all.",
        ],
      },
      {
        heading: "Why they age well",
        paragraphs: [
          "Complexity is what rots. A site with a database, a login and three integrations has three ways to break and a monthly bill. A single HTML page with a folder of images has almost no failure modes and costs pennies to host.",
          "The format is also immune to feature creep, because there is nowhere to put a feature. That constraint keeps the joke intact.",
        ],
      },
      {
        heading: "The social mechanics",
        paragraphs: [
          "These sites are built to be sent, not browsed. The link is the whole message. Because the reward is the surprise, the sender gets a small performance out of it too — they know what is coming and you do not.",
          "Modern feeds fight this. Autoplaying previews and unfurled link cards spoil the reveal, which is one reason the format thrives in private messages more than public timelines.",
        ],
      },
      {
        heading: "Making one today",
        bullets: [
          "Pick one verb: slap, spin, count, calm, decide.",
          "Cut every element that is not that verb.",
          "Make it work on a phone with one thumb.",
          "Use static files so it still runs in a decade.",
        ],
      },
    ],
  },
  {
    slug: "the-psychology-of-repetitive-web-toys",
    title: "The Psychology of Repetitive Web Toys",
    description:
      "Bubble wrap simulators, cookie clickers and Eel Slap all exploit the same loop. Here is what makes small repeatable interactions satisfying.",
    category: "Design",
    date: "2025-11-18",
    updated: "2026-08-14",
    minutes: 9,
    body: [
      {
        paragraphs: [
          "There is a category of web page that does nothing useful and holds attention anyway. Pop virtual bubble wrap. Slap an eel. Watch a number climb. These toys share a structure worth understanding, whether you build software or just wonder where the last four minutes went.",
        ],
      },
      {
        heading: "Tight input-to-feedback loops",
        paragraphs: [
          "The gap between action and response has to be imperceptible. When feedback lands within roughly a tenth of a second, the brain treats the effect as caused by you rather than by the machine. That sense of agency is the entire product.",
          "Eel Slap achieves this by preloading every frame in advance, so the image swap is a memory lookup rather than a network request.",
        ],
      },
      {
        heading: "Predictable outcome, variable expression",
        paragraphs: [
          "The eel always lands. What changes is how you make it land. Predictability removes anxiety; expressive control keeps the action from going stale. Toys that get this ratio wrong either bore you immediately or frustrate you into leaving.",
        ],
      },
      {
        heading: "No penalty, no progress",
        bullets: [
          "Nothing is lost when you stop, so starting costs nothing.",
          "Nothing accumulates, so there is no obligation to return.",
          "The session length is entirely yours to set.",
        ],
      },
      {
        heading: "Physicality in a flat medium",
        paragraphs: [
          "Weight sells the joke. A real eel photographed in motion sags, wobbles and lands heavily in a way a smooth animation curve would not. Toys that feel good almost always borrow something from physical objects — mass, friction, resistance.",
        ],
      },
      {
        heading: "Where it turns manipulative",
        paragraphs: [
          "The same loop powers slot machines and infinite feeds. The difference is what the toy asks for. Eel Slap asks for nothing: no data, no purchase, no streak. When a mechanic like this is bolted onto a system that monetises attention, the pleasant version becomes the predatory one.",
        ],
      },
    ],
  },
  {
    slug: "best-classic-browser-toys-still-online",
    title: "Classic Browser Toys That Are Still Online",
    description:
      "A curated tour of surviving one-page web toys in the Eel Slap tradition, and what each one gets right.",
    category: "Internet Culture",
    date: "2025-10-09",
    updated: "2026-08-14",
    minutes: 6,
    body: [
      {
        paragraphs: [
          "Plenty of early-web humour is gone. What survives tends to share a profile: static files, no plugin, no server logic, a domain someone keeps renewing out of affection. Here is the shape of that surviving catalogue, grouped by what each type does well.",
        ],
      },
      {
        heading: "Cursor-driven toys",
        paragraphs: [
          "The Eel Slap family. Your pointer position drives an image sequence, so the user controls timing. Cheap to build, endlessly re-playable, and completely reliant on preloading to feel good.",
        ],
      },
      {
        heading: "Single-answer pages",
        paragraphs: [
          "Sites that exist to answer one recurring question, often with one enormous word. Their humour comes from confidence and typography rather than interaction.",
        ],
      },
      {
        heading: "Ambient loops",
        paragraphs: [
          "Rain sounds, drifting visuals, one animation that never ends. These trade the punchline for atmosphere and tend to be the longest-lived of the group because people use them while doing something else.",
        ],
      },
      {
        heading: "Counters and clickers",
        paragraphs: [
          "A number goes up. Everything else is decoration. This category later grew into an entire commercial genre, but the original one-page versions remain the purest form.",
        ],
      },
      {
        heading: "How to keep one alive",
        bullets: [
          "Static hosting, no database, no build step that needs maintenance.",
          "Own the domain long-term and set the renewal to automatic.",
          "Keep the original assets somewhere other than the server.",
          "Submit the page to a web archive so it outlives your hosting.",
        ],
      },
    ],
  },
  {
    slug: "evolution-of-internet-memes",
    title: "The Evolution of Internet Memes, 1996 to Now",
    description:
      "From email forwards to short-form video, a practical timeline of how memes travelled — and where interactive jokes like Eel Slap fit.",
    category: "Internet Culture",
    date: "2025-09-14",
    updated: "2026-08-14",
    minutes: 11,
    body: [
      {
        paragraphs: [
          "Memes did not change much in spirit. What changed is the pipe they travel through, and the pipe determines the form. Every era's dominant joke format is a fingerprint of that era's distribution technology.",
        ],
      },
      {
        heading: "Eras at a glance",
        table: {
          head: ["Era", "Main channel", "Typical format"],
          rows: [
            ["1996–2001", "Email forwards, personal pages", "Animated GIFs, chain messages, dancing figures"],
            ["2001–2007", "Forums, image boards, Flash portals", "Image macros, Flash loops, 'you have been sent here' pages"],
            ["2007–2012", "Blogs, single-serving sites, YouTube", "One-page jokes, rickrolls, viral videos"],
            ["2012–2017", "Twitter, Tumblr, Facebook", "Reaction images, screenshots, text posts"],
            ["2017–2022", "Instagram, TikTok", "Short video, audio-first formats, remix templates"],
            ["2022–now", "Group chats, algorithmic feeds, AI tools", "Generated images, in-joke fragments, revival of old links"],
          ],
        },
      },
      {
        heading: "The interactive branch",
        paragraphs: [
          "Between roughly 2007 and 2013, a strand of meme culture was playable rather than viewable. You did not watch the joke; you operated it. Eel Slap, spinning-object pages and cursor toys all belong here.",
          "That branch thinned out as feeds took over, because a feed can autoplay a video but cannot host an interaction. Links that require a click compete badly with content that plays itself.",
        ],
      },
      {
        heading: "Why old links keep coming back",
        paragraphs: [
          "Revivals are now part of the cycle. A fifteen-year-old page reappears in a group chat, gets a fresh round of screenshots, and briefly outperforms new content precisely because it is unfamiliar to younger users and nostalgic for older ones.",
          "Durability is a distribution strategy. Anything still online is eligible for rediscovery; anything that needed a plugin is not.",
        ],
      },
    ],
  },
  {
    slug: "preloading-images-for-instant-interaction",
    title: "Preloading Images for Instant Interaction",
    description:
      "The engineering detail that makes cursor-driven frame animations feel smooth — and how to build one today without jank.",
    category: "Engineering",
    date: "2025-08-27",
    updated: "2026-08-14",
    minutes: 8,
    body: [
      {
        paragraphs: [
          "A cursor-driven frame animation lives or dies on one thing: whether the next frame is already in memory when the pointer moves. Miss that and the effect collapses into a stutter that no amount of visual polish can rescue.",
        ],
      },
      {
        heading: "The core loop",
        bullets: [
          "Decode every frame before the interaction is enabled.",
          "Map pointer X within the container to a frame index.",
          "Apply the index inside a single animation frame callback, not on every raw event.",
          "Keep all frames mounted and toggle visibility, so no decode happens mid-swipe.",
        ],
      },
      {
        heading: "Why toggling beats swapping",
        paragraphs: [
          "Changing an image source forces the browser to fetch or at least re-decode. Rendering all frames stacked and switching which one is visible avoids that entirely: the work becomes a compositor-level change, which is cheap and predictable.",
          "The trade-off is memory. With a couple of dozen modest frames it is irrelevant; with hundreds of large photographs it is not, and a windowed approach that keeps neighbouring frames warm becomes the better design.",
        ],
      },
      {
        heading: "Handling input properly",
        paragraphs: [
          "Pointer events cover mouse, touch and pen in one code path, which removes an entire class of mobile bugs. Throttle to the display refresh rate with a requestAnimationFrame gate so a fast swipe does not queue dozens of redundant updates.",
          "Keyboard support costs almost nothing and makes the toy usable by people who cannot drag: arrow keys step a frame, Home and End jump to either extreme.",
        ],
      },
      {
        heading: "Respecting the user",
        bullets: [
          "Honour reduced-motion preferences by offering a static or stepped mode.",
          "Give the control a role, a label and a live description so assistive technology can report progress.",
          "Show a loading state until decoding finishes rather than exposing a broken half-ready interaction.",
        ],
      },
    ],
  },
  {
    slug: "nostalgia-web-design-lessons",
    title: "What Nostalgia Sites Teach Us About Good Design",
    description:
      "Retro web pages are not popular because they were better built. They are popular because of three qualities modern sites keep discarding.",
    category: "Design",
    date: "2025-07-16",
    updated: "2026-08-14",
    minutes: 7,
    body: [
      {
        paragraphs: [
          "It is easy to romanticise the old web. Much of it was slow, inaccessible and broken outside one browser. But the pages people still visit for pleasure share three qualities that modern sites routinely trade away.",
        ],
      },
      {
        heading: "1. The page is the product",
        paragraphs: [
          "No interstitial, no consent theatre stacked on a paywall stacked on a newsletter prompt. You land on the thing you came for. Every layer between arrival and payoff is a tax that compounds.",
        ],
      },
      {
        heading: "2. Personality over consistency",
        paragraphs: [
          "Old pages looked like someone made them. Present-day design systems buy consistency with sameness, and sameness is forgettable. A single deliberate oddity — a strange colour, an unnecessary animation, a joke in the footer — is what people remember and describe to others.",
        ],
      },
      {
        heading: "3. Finished, not maintained",
        paragraphs: [
          "A page can be done. Static content that never changes needs no roadmap and no migrations, and it is still there in ten years. Treating some work as finished rather than perpetually iterated is a legitimate design choice.",
        ],
      },
      {
        heading: "What not to copy",
        bullets: [
          "Fixed-width layouts that break on phones.",
          "Text baked into images, invisible to search and screen readers.",
          "Autoplaying audio with no control.",
          "Contrast chosen for vibes rather than legibility.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
