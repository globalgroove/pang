/* =====================================================================
   SITE FILE  -  shared by every page (menu, logo, project list, search)
   =====================================================================
   This is the only file to edit when you add a project:
   copy one { ... } block in "projects" (or "commercial"), paste it below, change the values.
   The tables on the Work page and the search in the menu update by themselves.

   Rules:
     - Keep the quotation marks "like this" and the commas at line ends.
     - Links are written relative to the site root and end in the file name,
       e.g. "work/gmr/index.html" (so they also work when you open the files
       straight from your computer).
   ===================================================================== */
const SITE = {

  title: "PANG",                                     // small title next to the logo, top left on every page

  logo: { src: "", alt: "Home", mark: "globe" },

  discogs: "https://www.discogs.com/artist/7284073-Francisco-Ant%C3%A3o",
                                         // Discogs credits page. The Discography page links to it,
                                         // unless a release has its own "discogs" address below
                                         // empty src = the drawn mark: "globe", "registration" or "lens"
                                         // or a small square SVG/PNG with transparent background, e.g. "id/logo.svg"

  /* ---- MENU:  [ "text", "link" ]  ----------------------------------- */
  /* a third part makes a sub-list that folds open under that line:      */
  /*   "projects"          = the project list below                      */
  /*   [ ["text","link"] ] = a list written here                         */
  /* with link "" the line only opens the sub-list; with a link (e.g.    */
  /* "work/index.html") the text opens that page and the small arrow opens the list */
  menu: [
    ["Discography", "discography/index.html"],
    ["Work",        "work/index.html"],
    ["Contact",     "contact/index.html"],
    ["About",       "about/index.html"]
  ],

  /* ---- PROJECTS: one block per project page -------------------------- */
  /* Feeds the first table on the Work page and the search in the menu.    */
  /* The table lists them in this order (first here = top row).            */
  /*   title, year, type, role : shown in the table                        */
  /*   client  : optional, shown in the preview (author, artist or client) */
  /*   link    : the project page, relative to the site root               */
  /*             (copy work/_template/ to make a new page)                 */
  /*   image   : preview image on the Work page, relative to the site root */
  /*   text    : one or two short lines for the preview                    */
  /*   keywords: extra words for the search only (not shown)               */
  /* A project without a page yet: leave link "" (listed, not clickable).  */
  projects: [
    {
      title: "Agora baixou o sol", year: "2026", type: "Dance", role: "Sound direction", client: "Luísa Saraiva",
      link: "work/agora-baixou-o-sol/index.html",
      image: "work/agora-baixou-o-sol/imgs/cover.jpg",
      text: "",
      keywords: "agora solo ddd radial tba"
    },
    {
      title: "RedSkyFalls", year: "2026", type: "Installation", role: "Audio and video implementation", client: "Alexandre Estrela",
      link: "work/redskyfalls/index.html",
      image: "work/redskyfalls/imgs/cover.jpg",
      text: "",
      keywords: "red sky falls venice biennale portugal pavilion"
    },
    {
      title: "Bocarra", year: "2024", type: "Dance", role: "Sound direction", client: "Luísa Saraiva",
      link: "",
      image: "",
      text: "",
      keywords: "pact alkantara ddd"
    },
    {
      title: "Tirana", year: "2022", type: "Performance", role: "Sound dramaturgy", client: "Luísa Saraiva",
      link: "",
      image: "",
      text: "",
      keywords: "serralves museu como performance"
    },
    {
      title: "Lago Libidinal", year: "2022", type: "Stage", role: "Sound design, software", client: "Jonathan Saldanha",
      link: "",
      image: "",
      text: "",
      keywords: "scale travels index ccb rivoli"
    },
    {
      title: "Lithium Faust", year: "2021", type: "Stage", role: "Sound design", client: "Jonathan Saldanha",
      link: "",
      image: "",
      text: "",
      keywords: "tmp"
    },
    {
      title: "Mercúrio Vermelho", year: "2020", type: "Stage", role: "Sound design", client: "Jonathan Saldanha",
      link: "",
      image: "",
      text: "",
      keywords: "tmp voice"
    },
    {
      title: "Work", year: "2023", type: "Sound piece", role: "Sound commission", client: "Diogo Tudela ++",
      link: "",
      image: "",
      text: "",
      keywords: "serralves"
    },
    {
      title: "Untitled", year: "2020", type: "Residency", role: "Sound commission", client: "Berru",
      link: "",
      image: "",
      text: "",
      keywords: "artworks no entulho"
    }
  ],

  /* ---- COMMERCIAL: same fields as projects, for the Commercial table ---- */
  /* Shown under the projects on the Work page, with its own heading.      */
  /* [] hides the Commercial table.                                        */
  commercialHeading: "Commercial",
  commercial: [
    {
      title: "Commercial project title", year: "2026", type: "Sound design", role: "", client: "",
      link: "",
      image: "",
      text: "",
      keywords: ""
    }
  ],

  /* ---- RELEASES: one line per record, for the Discography page --------- */
  /* Listed in this order (first here = top row).                          */
  /*   artist, title, role, year : shown in the list                       */
  /*   all of them, plus format and label : the sheet under the cover      */
  /*   cover : square image, relative to the site root, e.g.               */
  /*           "discography/covers/spin.jpg". "" = dotted placeholder      */
  /*   discogs : the release's own Discogs page, e.g.                      */
  /*             "https://www.discogs.com/release/123456-Artist-Title".    */
  /*             "" = the link goes to the Discogs credits page above      */
  releases: [
    { artist: "SPITBENDER",          title: "SPIN",                     role: "AUTHOR, PRODUCER",             format: "VINYL, 12\" LP",  label: "PERF",              year: "2026",    cover: "discography/covers/spin.jpg", discogs: "" },
    { artist: "TRASGO",              title: "TRASGO",                   role: "PRODUCER, RECORDING, MIXING",  format: "CD, LP",          label: "NOT ON LABEL",      year: "2026",    cover: "discography/covers/trasgo.jpg", discogs: "" },
    { artist: "ANTÓNIO FEITEIRA",    title: "PERFORMING THE HEIMLICH..", role: "CO-PRODUCER, MIXING",         format: "K7, EP",          label: "EASTERN NURSERIES", year: "2025",    cover: "discography/covers/AF.jpg", discogs: "" },
    { artist: "AMULETO APOTROPAICO", title: "AMULETO APOTROPAICO",      role: "CO-PRODUCER, MIXING",          format: "VINYL, 12\" LP",  label: "PERF",              year: "2025",    cover: "discography/covers/Amuleto.jpg", discogs: "" },
    { artist: "RAMRIFE",             title: "DESTERRADO",               role: "MASTERING",                    format: "CD-R, LP",        label: "KHTHON",            year: "2025",    cover: "discography/covers/ramrife_cover.jpg", discogs: "" },
    { artist: "HHY & THE MACUMBAS",  title: "BOM SANGUE MAU",           role: "FT.",                          format: "VINYL, LP",       label: "HORROR VECTOR",     year: "2024",    cover: "discography/covers/Macumbas.jpg", discogs: "" },
    { artist: "VOLSK",               title: "SCORPIO RISING",           role: "AUTHOR, PRODUCER",             format: "CD, EP",          label: "CAPITAL DECAY",     year: "2019",    cover: "discography/covers/ScorpioRising.jpg", discogs: "" },
    { artist: "VSO/VOLSK",           title: "SPIRAL SYSTEM",            role: "CO-AUTHOR, PRODUCER",          format: "DIGITAL, SINGLE", label: "MERA",              year: "2020",    cover: "discography/covers/Spyral.jpg", discogs: "" },
    { artist: "VSO/VOLSK",           title: "SACRED BONFIRE",           role: "CO-AUTHOR, PRODUCER",          format: "DIGITAL, V/A",    label: "ARENA SPA X FTP",   year: "2020",    cover: "discography/covers/STT.jpg", discogs: "" },
    { artist: "VSO/VOLSK",           title: "ACID REIGN",               role: "CO-AUTHOR, PRODUCER",          format: "DIGITAL, EP",     label: "MERA",              year: "2020",    cover: "discography/covers/AcidReign.jpg", discogs: "" },
    { artist: "JULIUS GABRIEL",      title: "AETHERHALLEN",             role: "MIXING",                       format: "DIGITAL, EP",     label: "LOVERS & LOLLIPOPS", year: "2019",   cover: "discography/covers/Julius.jpg", discogs: "" },
    { artist: "UNKNOWN",             title: "",                         role: "DRIVER",                       format: "ARCHIVE",         label: "",                  year: "ONGOING", cover: "", discogs: "" }
  ],

  /* ---- CONTACT: one line per way to reach you, for the Contact page ----- */
  /* Listed in this order (first here = top row).                          */
  /*   channel : what it is (Email, Discogs, Bandcamp, Instagram ...)       */
  /*   value   : what is shown (the address, a name, a handle)              */
  /*   link    : for email the address itself (mailto: is added);           */
  /*             for the rest a web address. "" = shown, not linked         */
  /*   note    : optional short line under the details                      */
  contact: [
    { channel: "Email",   value: "name@example.com", link: "name@example.com", note: "" }   // placeholder: replace with the pang address
  ]
};
