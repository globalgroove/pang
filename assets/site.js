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
    ["About",       "about/index.html"]
  ],

  /* ---- PROJECTS: one block per project page -------------------------- */
  /* Feeds the first table on the Work page and the search in the menu.    */
  /* The table lists them in this order (first here = top row).            */
  /*   title, artist, role, year : shown in the table                      */
  /*   all of them, plus format and premiere : the sheet under the image   */
  /*   link    : the project page, relative to the site root               */
  /*             (copy work/_template/ to make a new page)                 */
  /*   image   : preview image on the Work page, relative to the site root */
  /*   keywords: extra words for the search only (not shown)               */
  /* A project without a page yet: leave link "" (listed, not clickable).  */
  projects: [
    {
      title: "Agora baixou o sol", artist: "Luísa Saraiva", role: "Sound direction", format: "Dance", year: "2026",
      premiere: "Radial System, Berlin (DE)",
      link: "work/agora-baixou-o-sol/index.html",
      image: "work/agora-baixou-o-sol/imgs/cover.jpg",
      keywords: "agora solo ddd radial teatro bairro alto"
    },
    {
      title: "RedSkyFalls", artist: "Alexandre Estrela", role: "AV implementation", format: "Installation", year: "2026",
      premiere: "Portugal Pavilion, Venice Biennale",
      link: "work/redskyfalls/index.html",
      image: "work/redskyfalls/imgs/cover.jpg",
      keywords: "red sky falls venice biennale portugal pavilion fondaco marcello"
    },
    {
      title: "Bocarra", artist: "Luísa Saraiva", role: "Sound direction", format: "Dance", year: "2024",
      premiere: "",
      link: "",
      image: "",
      keywords: "pact zollverein alkantara ddd manufacture"
    },
    {
      title: "Tirana", artist: "Luísa Saraiva", role: "Sound dramaturgy", format: "Performance", year: "2022",
      premiere: "",
      link: "",
      image: "",
      keywords: "serralves museu como performance"
    },
    {
      title: "Lago Libidinal", artist: "Jonathan Saldanha", role: "Sound design, Software Dev", format: "Stage", year: "2022",
      premiere: "",
      link: "",
      image: "",
      keywords: "scale travels index ccb rivoli soopa"
    },
    {
      title: "Lithium Faust", artist: "Jonathan Saldanha", role: "Sound design", format: "Stage", year: "2021",
      premiere: "",
      link: "",
      image: "",
      keywords: "tmp"
    },
    {
      title: "Mercúrio Vermelho", artist: "Jonathan Saldanha", role: "Sound design", format: "Stage", year: "2020",
      premiere: "",
      link: "",
      image: "",
      keywords: "tmp voice"
    },
    {
      title: "Work", artist: "Diogo Tudela ++", role: "Co-author", format: "Sound piece", year: "2023",
      premiere: "",
      link: "",
      image: "",
      keywords: "serralves"
    },
    {
      title: "Untitled", artist: "Berru", role: "Co-author", format: "Residency", year: "2020",
      premiere: "",
      link: "",
      image: "",
      keywords: "artworks no entulho"
    }
  ],

  /* ---- COMMERCIAL: one block per job, for the Commercial table --------- */
  /* Shown under the projects on the Work page, with its own heading.      */
  /*   title, client, role, year : shown in the table                      */
  /*   client : who hired you (a studio, an agency)                        */
  /*   brand  : the end client, who the work is for in the end; "" when it */
  /*            is the client itself. Shown small under the client         */
  /*            ("for ...") and as "End client" in the panel               */
  /*   format, premiere, link, image, keywords : as for projects           */
  /* [] hides the Commercial table.                                        */
  commercialHeading: "Commercial",
  commercial: [
    {
      title: "Clinical Research", client: "Mulligan Studio", brand: "Boehringer Ingelheim", role: "OST & sound design", format: "Informational video", year: "2025",
      premiere: "",
      link: "",
      image: "",
      keywords: "boehringer mulligan film soundtrack"
    },
    {
      title: "Fora de Jogo SS23", client: "Fora de Jogo", brand: "ModaLisboa", role: "Sound commission", format: "Fashion show", year: "2023",
      premiere: "",
      link: "",
      image: "",
      keywords: "moda lisboa fashion runway"
    },
    {
      title: "Fora de Jogo SS22", client: "Fora de Jogo", brand: "ModaLisboa", role: "Sound commission", format: "Fashion show", year: "2022",
      premiere: "",
      link: "",
      image: "",
      keywords: "moda lisboa fashion runway"
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
    { artist: "Spitbender", title: "Spin", role: "Author, producer", format: "Vinyl, 12\" LP", label: "Perf", year: "2026", cover: "discography/covers/spin.jpg", discogs: "" },
    { artist: "Trasgo", title: "Trasgo", role: "Producer, recording, mixing", format: "CD, LP", label: "Not on label", year: "2026", cover: "discography/covers/trasgo.jpg", discogs: "" },
    { artist: "António Feiteira", title: "Performing the Heimlich on an Ouroboros", role: "Co-producer, mixing", format: "K7, EP", label: "Eastern Nurseries", year: "2025", cover: "discography/covers/AF.jpg", discogs: "" },
    { artist: "Amuleto Apotropaico", title: "Amuleto Apotropaico", role: "Co-producer, mixing", format: "Vinyl, 12\" LP", label: "Perf", year: "2025", cover: "discography/covers/Amuleto.jpg", discogs: "" },
    { artist: "Ramrife", title: "Desterrado", role: "Mastering", format: "CD-R, LP", label: "Khthon", year: "2025", cover: "discography/covers/ramrife_cover.jpg", discogs: "" },
    { artist: "HHY & The Macumbas", title: "Bom Sangue Mau", role: "Ft.", format: "Vinyl, LP", label: "Horror Vector", year: "2024", cover: "discography/covers/Macumbas.jpg", discogs: "" },
    { artist: "VOLSK", title: "Scorpio Rising", role: "Author, producer", format: "CD, EP", label: "Capital Decay", year: "2019", cover: "discography/covers/ScorpioRising.jpg", discogs: "" },
    { artist: "VSO/VOLSK", title: "Spiral System", role: "Co-author, producer", format: "Digital, single", label: "Mera", year: "2020", cover: "discography/covers/Spyral.jpg", discogs: "" },
    { artist: "VSO/VOLSK", title: "Sacred Bonfire", role: "Co-author, producer", format: "Digital, V/A", label: "Arena Spa x FTP", year: "2020", cover: "discography/covers/STT.jpg", discogs: "" },
    { artist: "VSO/VOLSK", title: "Acid Reign", role: "Co-author, producer", format: "Digital, EP", label: "Mera", year: "2020", cover: "discography/covers/AcidReign.jpg", discogs: "" },
    { artist: "Julius Gabriel", title: "Aetherhallen", role: "Mixing", format: "Digital, EP", label: "Lovers & Lollipops", year: "2019", cover: "discography/covers/Julius.jpg", discogs: "" }
  ],

  /* ---- CONTACT: one line per way to reach you, at the top of the About page */
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
