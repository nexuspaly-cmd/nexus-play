const gamesDB = [
  {
    id: 1, title: "watch dogs 2", category: "RPG", genre: "Open World RPG",
    image: "https://jolstatic.fr/www/captures/2949/6/121016.jpg",
    banner: "https://img.succesone.fr/2020/06/Watch-Dogs-2-Series-SuccesOne.jpg",
    rating: 4.6, year: 2016, developer: "CD Projekt Red", publisher: "CD Projekt",
    description: "Watch Dogs 2 is an open-world hacking game set in a fictional version of San Francisco. You play as Marcus Holloway, a talented young hacker who joins the hacker group DedSec to fight corruption and expose powerful tech companies",
    screenshots: [
      "https://jolstatic.fr/www/captures/2949/6/121016.jpg",
      "https://cdn2.unrealengine.com/watch-dogs-2-group-photo-1920x1080-025a329984ec.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnbOk3JG-xBoV8XbdrRGfrxIh_TTFEIkXbA&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2400S", ram: "6 GB", gpu: "NVIDIA GeForce GTX 660 with 2 GB VRAMD ", storage: "50 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 2, title: "Grand Theft Auto V", category: "Action", genre: "Open World Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST83fk_Cun6qkGi75FjJuESTvG4wrUBiSwIA&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fuEjeu5YghplkQD47v6kDMg3tLv_YSpODw&s",
    rating: 4.8, year: 2013, developer: "Rockstar North", publisher: "Rockstar Games",
    description: "Grand Theft Auto V is a massive open world game set in Los Santos, featuring three unique criminals who plan and execute daring heists across the city.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw89V2xMGbKCMJJQrhwr1x9t2HEdq227cdKQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp3pkwcWXVLLn0E2Ev66eqbcntOPjwoRhdw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_qtkMmcfPCQU8LRu9EyVxffLPvgnibRrLw&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5 3470", ram: "8 GB", gpu: "NVIDIA GTX 660 2GB", storage: "110 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 3, title: "Elden Ring", category: "RPG", genre: "Action RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj-eE80q5ZAtGRLTLCUc492jfkyTH1A482A&s",
    banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1767883716",
    rating: 4.9, year: 2022, developer: "FromSoftware", publisher: "Bandai Namco",
    description: "Elden Ring is a fantasy action-RPG set in the Lands Between, where you embark on an epic journey to become the Elden Lord across a vast and breathtaking world.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGwr9XLjLqKpP82Lt9DE0Pckrocv2_PVRjw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJdkzI4obEYCEnHj8cVHHbDQDyJGpWctLOg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SNstq27BYamAOsIfUaNdVNeuZSiPp-qHIw&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-8400", ram: "12 GB", gpu: "NVIDIA GeForce GTX 1060 3GB", storage: "60 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 4, title: "Red Dead Redemption 2", category: "Action", genre: "Western Open World",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhE-gc5aRO5PA5GG654QUEmVswG4YttWm8A&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1c1Q0w7wvVNpnSS7hQfq4XcLHpl9ejxarg&s",
    rating: 4.9, year: 2018, developer: "Rockstar Studios", publisher: "Rockstar Games",
    description: "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland, following outlaw Arthur Morgan and the Van der Linde gang's fight for survival.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbr_-dkB-ywWsc_0G3u-N-A6G5ZNkYkAuWQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1i5F69QNvmtJw-gx0K4uQuczjHsOMyxBZAQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3OgaN9inUmfMmdMIHNUeUkfkVYi-qF5xlg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i7-4770K", ram: "12 GB", gpu: "NVIDIA GTX 1060 6GB", storage: "150 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 5, title: "The Witcher 3: Wild Hunt", category: "RPG", genre: "Fantasy RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYueuv81tb44oPSF00wFFooPN45_vMbcyoA&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEVZ0GGzeSsQWqcxx-JuJdL28EkQ9A03_zA&s",
    rating: 4.9, year: 2015, developer: "CD Projekt Red", publisher: "CD Projekt",
    description: "The Witcher 3 is a story-driven open world RPG set in a dark fantasy universe, where you play as monster hunter Geralt of Rivia searching for his adopted daughter.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSqHlMcQEeIVS8PLP0tEPywJ_mofRqGX0pw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS_NozCJ3yoK4bEzc0V9tqdQyCVqlajcNLQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxLlcZO--7EGSoko9peKkid8DPOKevSvvVg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 770", storage: "50 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 6, title: "God of War Ragnarök", category: "Action", genre: "Action Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomnVVOFQGTGQuWMH9ZpLj181YJjRcBNRQmg&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_FQTWLlPuRltYTU22XBavXv1jzcDuKY4KA&s",
    rating: 4.8, year: 2022, developer: "Santa Monica Studio", publisher: "Sony Interactive",
    description: "God of War Ragnarök continues the story of Kratos and his son Atreus as they journey through the Nine Realms to prevent the prophesied end of the world.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkGM8_QCoqET2u0RrYIDO6-iETlrPcRSEBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo-GCQUZZAmu0OZ_F-J0dB8Mi6HX4oMay8g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_6ritVj-i-O7KH4wCkoePYZf8N1TTDh93Q&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4670K", ram: "16 GB", gpu: "NVIDIA GTX 1060 6GB", storage: "70 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 7, title: "Call of Duty: Modern Warfare III", category: "Shooter", genre: "First-Person Shooter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmbkbDHiv0lTYbkcVY6MkYgqPDmRXYmUYcw&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYT6VzHVBFb5b1Lzw2YywgygPbrF5fwmx7kg&s",
    rating: 4.2, year: 2023, developer: "Sledgehammer Games", publisher: "Activision",
    description: "Call of Duty: Modern Warfare III delivers an epic campaign, thrilling multiplayer, and the return of classic maps in the latest installment of the iconic franchise.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmE5dIRXIb8F3VseqHTTeWI6wZ-jDe46pTA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF8edC666D0T7YaVxMWHlNb-veH3AU5gKSA&s",
      "https://bnetcmsus-a.akamaihd.net/cms/blog_header/9n/9N1NHD38UQD21696523887840.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600", ram: "12 GB", gpu: "NVIDIA GeForce GTX 1060", storage: "65 GB" },
    link: "#",
    featured: false, trending: true, popular: true
  },
  {
    id: 8, title: "Baldur's Gate 3", category: "RPG", genre: "CRPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQXSk_96yVPwUxUiLtAHkP6jO3fYy475JiQ&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCP8eYqKHQENl1luRi09Vjn4j_TCPHGEhjEg&s",
    rating: 4.9, year: 2023, developer: "Larian Studios", publisher: "Larian Studios",
    description: "Baldur's Gate 3 is a story-rich, party-based RPG set in the Dungeons & Dragons universe, where your choices shape a grand tale of friendship, betrayal, and survival.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVulLVABTcp5yN1uD7SO0SKt8Vk9LN7zYB8w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiR-6cofSMSDfSGWQdabODkqYjUyolPJ2BSw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtGDAfcDDqFP13qUVZM-RrUtzgsJ5xidE9g&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4690", ram: "16 GB", gpu: "NVIDIA GTX 970", storage: "150 GB" },
    link: "#",
    featured: true, trending: true, popular: true
  },
  {
    id: 9, title: "Fortnite", category: "Shooter", genre: "Battle Royale",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcJoN-JOldacW3GIJKsrYtiOY046-Bit9Uw&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySdSiqtlrKyNC-nllcoG3KrSo6L8mtG0Cpg&s",
    rating: 4.3, year: 2017, developer: "Epic Games", publisher: "Epic Games",
    description: "Fortnite is a free-to-play battle royale game where 100 players fight to be the last one standing on an ever-changing island filled with unique weapons and items.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqZu1qyE70aCJueDv9rjJjje3GMl-ykcuvw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGM-hx66x_J15DqNsPyZ5HUTx36lc8hWXjCA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngfmKNmuXdzQ0OWC3oFA0TftpRFPab3tUyA&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i3-3225", ram: "8 GB", gpu: "Intel HD 4000", storage: "30 GB" },
    link: "https://www.fortnite.com",
    featured: false, trending: true, popular: true
  },
  {
    id: 10, title: "Minecraft", category: "Sandbox", genre: "Sandbox Survival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxpCvpUwdj-Nn13e6lgmOSMUvenOiGTBpGg&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4d7VNSBo6hvPVU2iHZT6u9TQIHzjXS9khw&s",
    rating: 4.7, year: 2011, developer: "Mojang Studios", publisher: "Mojang",
    description: "Minecraft is a sandbox game where you can build anything you imagine, explore infinite worlds, craft tools, mine resources, and survive the night against creatures.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuifLup3n3aXNX_mhCsf62gQcJ25whSdpgFw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBKGoULb-iVVuYWVihTPK6GPwyJJYdLqvHw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4SJCTy5EADo6EY0jHuM2Bl62SP86zIVfBQ&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4690", ram: "8 GB", gpu: "Intel HD Graphics 4000", storage: "1 GB" },
    link: "#",
    featured: false, trending: true, popular: true
  },
  {
    id: 11, title: "Spider-Man 2", category: "Action", genre: "Open World Action",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EOqzgc8ztN21FRhKRDqsXzuU2kejbVqTKQ&s",
    rating: 4.7, year: 2023, developer: "Insomniac Games", publisher: "Sony Interactive",
    description: "Swing through Marvel's New York as both Peter Parker and Miles Morales in an epic action-adventure featuring an original story, new abilities, and iconic villains.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBmDb1-x32bkp_4qZrHcqQIboz0WKr-FgCg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQla4wmESCH56HzaddfQcKvzyWmSTP1tn-STA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrfg_MnZluWrEhV4nlQHBy4Bd755GnAvVAA&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4670K", ram: "16 GB", gpu: "NVIDIA GTX 1060 6GB", storage: "75 GB" },
    link: "#",
    featured: true, trending: false, popular: true
  },
  {
    id: 12, title: "FIFA 21", category: "Sports", genre: "Sports Simulation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILtycojJSEwx1bdbLZyzeL0mYpuikobE6eg&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbRicDk2uWMyZug9sZcpEkav1q8rFiXdFow&s",
    rating: 4.0, year: 2021, developer: "EA Vancouver", publisher: "EA Sports",
    description: "EA Sports FC 21 offers the most authentic football experience with HyperMotionV technology, Opta data, and thousands of real players, teams, and leagues.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRty1VUVbdc3NEJ-Zdpl8bWcaBEJ3mwyPufdQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S6bljuAjavVObT2SRfrVM_gkXH_0BPTO6Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOPk_Gw37GDdLq8JobfoWZ7ODymI5TxmkTg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GTX 1050 Ti", storage: "56 GB" },
    link: "#",
    featured: false, trending: false, popular: true
  },
  {
    id: 13, title: "Hogwarts Legacy", category: "RPG", genre: "Open World RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_QSQ0LDGX2v-SIxaqs5cAtC6PDOYcoBTHQ&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeJn7DetAWfXGXzY5Hp7-x1Dd3TjljzY1RQ&s",
    rating: 4.5, year: 2023, developer: "Avalanche Software", publisher: "Warner Bros",
    description: "Hogwarts Legacy is an open-world RPG set in the Harry Potter universe, where you attend Hogwarts School of Witchcraft and Wizardry and uncover a hidden magical secret.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitjM8IPKp3PcivkW-szhegEIgmPQWu7bBKA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzSPAFM85jRZVOKq_HhfWKz4CIsx0zF1hcA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbTJvb281hJ0HCMlCzUZ4cbDsUN-2Xtyvug&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600", ram: "16 GB", gpu: "NVIDIA GeForce GTX 960", storage: "85 GB" },
    link: "#",
    featured: false, trending: true, popular: true
  },
  {
    id: 14, title: "Starfield", category: "RPG", genre: "Space RPG",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1778168061",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxn2Gd10q9tbfh6CsUdXOHU4KT4o98X498Kw&s",
    rating: 4.1, year: 2023, developer: "Bethesda Game Studios", publisher: "Bethesda",
    description: "Starfield is the first new universe in over 25 years from Bethesda, set in space where you create your own story and explore over 1,000 planets across the galaxy.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JlJlf5uRuXeS0khMhs4agFT1uP639LMIAw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxBPF1WAxEqs05kLyfYy_V9gIiFsZ4CIMtg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD96aJTv_MgGOU8t6hs1t_qwznqGaTrDbObg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i7-6800K", ram: "16 GB", gpu: "NVIDIA GTX 1070 Ti", storage: "125 GB" },
    link: "#",
    featured: false, trending: false, popular: true
  },
  {
    id: 15, title: "Resident Evil 4 Remake", category: "Horror", genre: "Survival Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh6x2RZyvDY6NbPPfsl66IJhDD5utgc08KQ&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqv_AS6dBBopiNn_AiQnoxEkilkkIbl2T4dg&s",
    rating: 4.7, year: 2023, developer: "Capcom", publisher: "Capcom",
    description: "Resident Evil 4 Remake reimagines the 2005 classic with modern gameplay, stunning visuals, and the same intense survival horror action that defined a generation.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06t8OGxFZ9luSBgq1BtGY0sJGF-5xdmORhA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4BZYwu3veHjPNfIrEY9nGa9v4EcuUWL_pA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5nIRFdD5T0NyNQEgC_mXZx3JVnePLiEUlw&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-7500", ram: "16 GB", gpu: "NVIDIA GTX 1050 Ti", storage: "60 GB" },
    link: "https://utweb.rainberrytv.com/gui/index.html?v=1.6.0.6414&localauth=localapi5d4dce622e5781cb:#/dashboard",
    featured: false, trending: true, popular: true
  },
  {
    id: 16, title: "Apex Legends", category: "Shooter", genre: "Battle Royale",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGASsz9ucNS1EXKe4dNACKO02Q3pGWSyJQg&s",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/0bd74245b869287a2dc7f682e6013f7ed08d98e3/header.jpg?t=1778502442",
    rating: 4.4, year: 2019, developer: "Respawn Entertainment", publisher: "EA",
    description: "Apex Legends is a free-to-play battle royale game where legendary characters battle for glory, fame, and fortune on the fringes of the Frontier.",
    screenshots: [
      "https://sherpasboosting.com/app/uploads/2022/03/apexcharac-e1699633580341.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX90_7KjvPbl6t0dJ8FqqCYAJnK9snFoabzg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZvWT8nsmMsR3G9-5Uih7cCcSt5jlbj3lWw&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i3-6300", ram: "8 GB", gpu: "NVIDIA GeForce GT 640", storage: "40 GB" },
    link: "https://www.ea.com/games/apex-legends",
    featured: false, trending: true, popular: true
  },
  {
    id: 17, title: "Assassin's Creed Mirage", category: "Action", genre: "Stealth Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCfRf-danlJToMBPMqfSiqehVhMTDlgSkig&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8zg76WkjvTjdwFW28XikaLur12-9CEJ67A&s",
    rating: 4.3, year: 2023, developer: "Ubisoft Bordeaux", publisher: "Ubisoft",
    description: "Assassin's Creed Mirage returns to the roots of the series with a focus on stealth, parkour, and assassinations in ninth-century Baghdad.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8ec-z82PRC9HtrSJOy7TTECoSj7DQO-7GA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUnDh8_nQsq_H-IZU6a78EBWo4dZEFpG5Eg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrJ7jJJv8iTepghhRxr7U2UXpVMhnjIowTg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i7-4790K", ram: "8 GB", gpu: "NVIDIA GTX 1060", storage: "40 GB" },
    link: "#",
    featured: false, trending: false, popular: true
  },
  {
    id: 18, title: "Counter-Strike 2", category: "Shooter", genre: "Tactical FPS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWb368l0Lwb7xnwfewzRjz6rZbFGCioqeXjw&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcXT8ddSbjjLw9IakVCfgNy5T1TuMKTizZw&s",
    rating: 4.6, year: 2023, developer: "Valve", publisher: "Valve",
    description: "Counter-Strike 2 is the largest technical leap in Counter-Strike history, featuring dynamic smoke grenades, responsive servers, and stunning visual effects.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUosb3DwzJmWVfJ1O6qfwhcnWw3BTNxpK6g&s",
      "https://i.ytimg.com/vi/iNhfarRv_f4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB54ZHuONFZrBbvp5E7wd29ZCQ3mQ",
      "https://i.ytimg.com/vi/wrcs5KeOx0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5qbx3U07QrwbdKZpgJs0xxeb6Pg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5 750", ram: "8 GB", gpu: "AMD Radeon HD 6850", storage: "40 GB" },
    link: "https://www.counter-strike.net",
    featured: false, trending: true, popular: true
  },
  {
    id: 19, title: "Diablo II", category: "RPG", genre: "Action RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmDvzIfLa_hzEl15p6-8jroaNvVJUAA1hQw&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrvgaaMFbCP2-igR45v6L5FolxqqeuHH57g&s",
    rating: 4.2, year: 2023, developer: "Blizzard Entertainment", publisher: "Blizzard",
    description: "Diablo IV is the next-gen action RPG where you battle through the dark world of Sanctuary against the legions of Hell in an epic, interconnected open world.",
    screenshots: [
      "https://static.actugaming.net/media/2021/02/diablo-2-resurrected-screenshot-20-02-2021-5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5bLVR-tbkBB6sCGc6zjKMceozS1KChnfZA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgvNJjGmldMl63q9uaw0d-01vLwqto6GHgQ&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660", storage: "45 GB" },
    link: "#",
    featured: false, trending: false, popular: true
  },
  {
    id: 20, title: "Need For Speed Most Wanted 2012", category: "Racing", genre: "Open-World Racing, Arcade Racing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYcEOOWDfzKWH6SXjkxOPigafipbNNZOvtlpGjfmuIfBRuVjY-T4YSL7o&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aataDfbtA-DCBviOZnw9uGkxD31dQ75PDrfzNT6Rkw&s",
    rating: 4, year: 2012, developer: "Criterion Games", publisher: "Electronic Arts (EA)",
    description: "Need for Speed: Most Wanted (2012) is an open-world racing game set in the fictional city of Fairhaven. Players compete in street races, evade the police, and challenge the city's top racers to become the most wanted driver.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96WHGP9PYi5WuPNwB9ZOta3yuECmFEefPv8Fde2dUnw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnC0TBpU8yK9XAzHxE2DfE7b1EPYtt4JORKAEWsFkRQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMMnttSpJPYmuTgAS4rGMHH_arW2qGfAxwmcpTqgBXg&s=10"
    ],
    requirements: { os: "Windows 11 / 10 / 8 / 7 64-bit", cpu: "Intel Core 2 Duo 2.4 GHz", ram: "4 GB", gpu: "NVIDIA GeForce GTX 560", storage: "20 GB" },
    link: "#",
    featured: false, trending: false, popular: true
  },
  {
    id: 21, title: "Lethal Company", category: "Horror", genre: "Co-op Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfMmRoo4AqJ5M7KRsIoGeVtI44NLl01x9dQ&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgYW2O5sZej1ueh2WNTk2IZXqVNLy3RWlyw&s",
    rating: 4.5, year: 2023, developer: "Zeekerss", publisher: "Zeekerss",
    description: "Lethal Company is a co-op horror game about scavenging abandoned moons for scrap to meet a company quota, while avoiding terrifying monsters and environmental hazards.",
    screenshots: [
      "https://pyxis.nymag.com/v1/imgs/e70/772/d6b5b7d4708ba7f12480ddd41a071793c6-lethal-company-lede.rhorizontal.w700.jpg",
      "https://articles-img.sftcdn.net/t_article_cover_xl/auto-mapping-folder/sites/9/2025/03/R.E.P.O-terror.jpg",
      "https://chargeronline.nacs.k12.in.us/wp-content/uploads/2024/01/lethal-company-cover.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-7400", ram: "8 GB", gpu: "NVIDIA GTX 1050", storage: "1 GB" },
    link: "#",
    featured: false, trending: true, popular: false
  },
  {
    id: 22, title: "far cry 3", category: "Action-Adventure", genre: "First-Person Shooter (FPS), Open World",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LP_qm4eaogtaSO0VpRki8Gq_3y4eiB-8IshNADLHuA&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6USqImEBCZp8iYG7y5Z9dvg92sNbc63GDWaf6l8UeMCv1rU8XICnFQU&s=10",
    rating: 4.2, year: 2012, developer: "Ubisoft Montreal (with support from other Ubisoft studios)", publisher: "Ubisoft",
    description: "Jason Brody and his friends are captured by pirates on a tropical island. After escaping, Jason fights to rescue his friends and defeat the pirate leader, Vaas Montenegro. During his journey, he becomes a powerful warrior and later takes down the criminal mastermind Hoyt Volker. In the end, Jason must choose between returning home with his friends or staying on the island and embracing his new life. 🎮.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG6GCIGpEEEbOtU2VdTHRPN7uBBTHMWSyBf0xR2dC9Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnF5I59MUyYm8EhjpXAoqQptLxcCXrekSH5R__KPOuw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpW9LEbeQErHTUV0UKdVe0qVkCsnKMj9z8Yvd2kYfNrA&s"
    ],
    requirements: { os: "Windows 7 / Windows 8", cpu: "Intel Core i3-530 2.93 GHz or AMD Phenom II X2 565", ram: "4 GB", gpu: "NVIDIA GeForce GTX 480 or AMD Radeon HD 5770", storage: "15 GB" },
    link: "https://www.pocketpair.jp/palworld",
    featured: false, trending: true, popular: false
  },
  {
    id: 23, title: "NBA 2K17", category: "Sports", genre: "Basketball Simulation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInpiQQr3-Spc8Aq3c6EfSjxgMCpqRyxJdiA&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EXVj9j2OqtSWOiHY0wU0AbNP9CBOB42TMw&s",
    rating: 3.8, year: 2023, developer: "Visual Concepts", publisher: "2K Sports",
    description: "NBA 2K24 immerses you in authentic basketball with realistic gameplay, the return of the MAMBA MOMENTS mode featuring Kobe Bryant, and a deep MyCAREER experience.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUySzz9K1C9n1n9vSQ7j4_Dv34B60xJd4Ug&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOPFbJwxzxI-FRCKS3zdnD0T9wZVtU9uP7w&s",
      "https://cdn.nba.com/teams/legacy/www.nba.com/suns/sites/suns/files/nba2k090616_777.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4430", ram: "8 GB", gpu: "NVIDIA GTX 960 2GB", storage: "110 GB" },
    link: "https://nba.2k.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 24, title: "The Legend of Zelda:  breath of the wild", category: "Action", genre: "Open World Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBOBnrJYIlivaB6MmQOqTewnFiVn5mURn5g&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_dfJi6tZuRYzQS_GfI3fR1BIrgNLXxsUHg&s",
    rating: 4.9, year: 2023, developer: "Nintendo EPD", publisher: "Nintendo",
    description: "The Legend of Zelda: Tears of the Kingdom continues Link's adventure with new abilities, sky islands to explore, and a vast underground world beneath Hyrule.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOo67LWTACwsXNepFEzb4gumoELAzNMlL8Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBkT5b7p3fikev05ARQau3DkdADQA-apbcg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNpGpFgUaUOlnXSdaHbpyDEPSN7kb6Q_Hmw&s"
    ],
    requirements: { os: "Nintendo Switch", cpu: "Nintendo Switch", ram: "Nintendo Switch", gpu: "Nintendo Switch", storage: "16 GB" },
    link: "#",
    featured: true, trending: false, popular: true
  },
  {
    id: 25, title: "The Last of Us Part I", category: "Action-Adventure", genre: "Action, Adventure, Survival Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1ribDbvhamSFybyYaTHxfGqPPjs-y5ZqhBNSZwU4DA&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoCubZrZlXV7uhdxGySOaoz6q7hBKGyfTnvBzgBgWIA&s=10",
    rating: 4.6, year: 2022, developer: "Naughty Dog", publisher: "Sony Interactive Entertainment",
    description: "In a world destroyed by a deadly fungal infection, Joel is hired to escort a teenage girl named Ellie across the United States. Ellie is immune to the infection, making her humanity's best hope for a cure. As they travel through dangerous cities and face infected creatures and hostile survivors, Joel and Ellie develop a deep father-daughter bond. Their journey ends with Joel making a controversial decision that changes both their lives forever.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKI9gZKUq47uOUVea8IONaJ8_ebsrfxYFO-GxlRrHnZtHrcpxeOXThx4&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcAN4TwEd2rpDDBGHpcNR2obcNRExstif_UBD_cow2A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fUD5WOKpSpjTf8JqHf8VElE7sHI5jItdqzF1y9UGbg&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i7-8700", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2070 Super", storage: "100 GB SSD" },
    link: "https://www.streetfighter.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 26, title: "Sons of the Forest", category: "Horror", genre: "Survival Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14CigA0qUTkEknN11uBGUBWIRA_ZvCXdhqg&s",
    banner: "https://i.ytimg.com/vi/IwvhH3islZw/maxresdefault.jpg",
    rating: 4.4, year: 2024, developer: "Endnight Games", publisher: "Newnight",
    description: "Sons of the Forest is a survival horror simulation where you are stranded on a remote island while searching for a missing billionaire, facing cannibalistic mutants.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAWjKbl2kPu9DVvJj_P3nyCk1cU88KdrWWg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeT-Etu1P3rqWr9bv9y8CdV2Fqfm_QKwLLLQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1Jjy4o6QPJmp2ZIbLFdyubeyTUEGM0uxZg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-8400", ram: "12 GB", gpu: "NVIDIA GeForce GTX 1060", storage: "40 GB" },
    link: "#",
    featured: false, trending: true, popular: false
  },
  {
    id: 27, title: "Cities: Skylines II", category: "Simulation", genre: "City Builder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4qJD2Bg73AlGHL9kff_t24OEzkgBL2nplQ&s",
    banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/949230/331a5bcc257a69132f6502ad146984142e0d4aeb/capsule_616x353.jpg?t=1779837128",
    rating: 3.9, year: 2023, developer: "Colossal Order", publisher: "Paradox Interactive",
    description: "Cities: Skylines II challenges you to build a thriving metropolis from the ground up with deeper simulation, dynamic economy, and more complex city management.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5lf23EkEqIKjd-FwBS0i5QDrAmEDm4pE0g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRni21MFdFRZopv7gH20EgKQK45A5XtZZ651A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuccCe5-cFoeWrGN3n50HbQlUChoUDHU-1CA&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i7-6700K", ram: "16 GB", gpu: "NVIDIA GeForce GTX 970", storage: "60 GB" },
    link: "#",
    featured: false, trending: false, popular: false
  },
  {
    id: 28, title: "Alan Wake 2", category: "Horror", genre: "Survival Horror",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Alan_Wake_2_box_art.jpg/250px-Alan_Wake_2_box_art.jpg",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4YYXnX2qBIDlxBdeJP5SZwz7zz14r_27xg&s",
    rating: 4.8, year: 2023, developer: "Remedy Entertainment", publisher: "Epic Games",
    description: "Alan Wake 2 is a mind-bending survival horror where FBI agent Saga Anderson investigates ritualistic murders in Bright Falls, while trapped writer Alan Wake tries to escape the Dark Place.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RceJabh1a6Mxv0wORpsLNYNXeFS3SLQtiw&s",
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Alan_Wake_2_screenshot.jpg/250px-Alan_Wake_2_screenshot.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCIZOhkKCwArX8-afcwkJLdniJEbWGGCRpQ&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-7600K", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060", storage: "50 GB" },
    link: "#",
    featured: true, trending: false, popular: false
  },
  {
    id: 29, title: "Overwatch 2", category: "Shooter", genre: "Hero Shooter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1WWwCcrLWvB8iTTLsHWncrxOCQSbu1dGFJhGWFQCKw&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHmO0V9DbUhxgqgsOkONryqj-L9nxDnKEk_mdXwChbA&s=10",
    rating: 3.9, year: 2022, developer: "Blizzard Entertainment", publisher: "Blizzard",
    description: "Overwatch 2 is a free-to-play team-based action game set in an optimistic future where diverse heroes battle in 5v5 PvP matches across iconic maps worldwide.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVfu3-pT7bNmElQH6ECNiKbt1aPbyFPLwe2GfxkO7Wg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDE8VshztDivrGCxvacEOpDzJYNELHiXIDof0mbGZ7YA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CoXZ6ZrrOGRz3oR3HaZc9FwKC5fZI9JWmk42C_16Kw&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i3", ram: "8 GB", gpu: "NVIDIA GeForce GTX 600 series", storage: "50 GB" },
    link: "https://overwatch.blizzard.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 30, title: "Call of Duty: Ghosts", category: "Action", genre: "First-Person Shooter (FPS), Military Shooter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuy2OXwZlSqpAsYuznj9K9DU5yB3TKK6FKT6MdzC7Jg&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T7SkXAvwx6O2ki5CKaR-fy9KHZSpv9EJgNsfKVB-Ow&s=10",
    rating: 4.7, year: 2016, developer: "Infinity Ward", publisher: "Activision",
    description: "Call of Duty: Ghosts is a military FPS set in a near-future world where the United States has been weakened after a devastating attack. You play as a member of the Ghosts, an elite special operations unit fighting to protect the country from a powerful enemy alliance.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP9Ae3Ku483U9EzjcZELHgaFnAwy8IfUCh9LjYEc0Qg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeuHWd0NGqanjWxZUDcTQuJ-7kGV-VT5OZeVMkTJysQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfH06H-1ocPMvTlylLfAm28br3bEZJ_OyknnjnXQ17A&s=10"
    ],
    requirements: { os: "Windows 11 / 10 / 8 / 7 64-bit", cpu: "Intel Core i5", ram: "8 GB", gpu: "NVIDIA GeForce GTX 760", storage: "40 GB" },
    link: "https://www.ea.com/games/dead-space",
    featured: false, trending: false, popular: true
  },
  {
    id: 31, title: "Horizon Zero Dawn Repack", category: "Action RPG", genre: "Open World, Action, Adventure, RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJlaZ3kQnO1a7DTE2S5GxwMDGXZC6p7WQlzvaLNok7A&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfH9b2jUltnh4VMNC_j88DT54MT9ShGUDpkFlmrNXzIw&s=10",
    rating: 4.6, year: 20, developer: "Guerrilla Games", publisher: "Sony Interactive Entertainment",
    description: "Horizon Zero Dawn is an open-world action RPG set in a distant future where robotic creatures roam the Earth and human civilization has returned to tribal societies.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHGURb8DZt6Mzr2Bwk7QI7BshuD8BWJcnOhhiPaxX7w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iwjVBn9MuVDxutwl2isAMSsxY__V20e5qY-aTW9c0A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1Li59Tw_MpjZilYjFYVKCt2OgMYU2E6c2-Pjz-n3Jw&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "ntel Core i7-4770K", ram: "16 GB", gpu: "NVIDIA GTX 1060 (6 GB)", storage: "100 GB ssd" },
    link: "#",
    featured: false, trending: true, popular: false
  },
  {
    id: 32, title: "eFootball PES 2021", category: "Sports", genre: "Football Simulation, Sports",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AFfBH8-m5e03G92YLSKEzoADoxbhnntia1cblWfvtw&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5V7z_vBngfyTYHiBHOPowLl9wntKp5oPVj7QDdUlcQ&s=10",
    rating: 3.5, year: 2020, developer: "Konami Digital Entertainment", publisher: "Konami",
    description: "eFootball PES 2021 Season Update is a football simulation game that builds on PES 2020, featuring updated player rosters, club squads, kits, and transfers for the 2020–21 season.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEXuRnvz4IsmsY5vBaCN5b-mD-f3MS-d-qWhAPITWSg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFkUId5rT51rR1j9LjIElogDxcJV6x7p74g_o0DRTCQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VxI5DShJDjyGDpIOZo2IrH3_ZxHJAitpbmO4FUKxeQ&s=10"
    ],
    requirements: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-4790", ram: "8 GB", gpu: "NVIDIA GTX 760", storage: "40 GB" },
    link: "#",
    featured: false, trending: false, popular: false
  },
  {
    id: 33, title: "Mortal Kombat X", category: "Fighting", genre: "Fighting, Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxusF7IHaH2WzcEGe3y6FciWOMOqt5iskC19w85-xjw&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuVuE41qH5b5jnRZybkt-hqrf1eH4FJx0FWDJbjjGug&s=10",
    rating: 4.4, year: 2015, developer: "NetherRealm Studios", publisher: "Warner Bros. Games",
    description: "Mortal Kombat X is a fast-paced fighting game featuring brutal combat, cinematic storytelling, and the series' famous Fatality finishers",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxF4_JSMFTOUlc7hXbdFqq8Ubo2ceo445BWflwEa7Fm3EqvxKKJS-X4Y&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-wNlgyu-x2fLGGVoixtlbfYN3X_Qh00QvtHyKO5kKQ&s=10",
      "https://www.gematsu.com/wp-content/uploads/2014/06/MKX-Gameplay-PS-Blog-Stream.jpg"
    ],
    requirements: { os: "Windows 11 / 10 / 8 / 7 64-bit", cpu: "Intel Core i5-750", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460", storage: "40 GB" },
    link: "#",
    featured: false, trending: true, popular: false
  },
  {
    id: 34, title: "Like a Dragon: Infinite Wealth", category: "RPG", genre: "JRPG",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&q=80",
    banner: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1200&q=80",
    rating: 4.8, year: 2024, developer: "Ryu Ga Gotoku Studio", publisher: "Sega",
    price: "$69.99", salePrice: "",
    description: "Like a Dragon: Infinite Wealth is a massive RPG adventure spanning Japan and Hawaii, blending turn-based combat with emotional storytelling and endless mini-games.",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b2d1f?w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-3470", ram: "8 GB", gpu: "NVIDIA GeForce GTX 960", storage: "60 GB" },
    link: "https://infinitewealth.sega.com",
    featured: false, trending: true, popular: false
  },
  {
    id: 35, title: "Tekken 8", category: "Fighting", genre: "3D Fighting",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tekken_8_cover_art.jpg/250px-Tekken_8_cover_art.jpg",
    banner: "https://i.ytimg.com/vi/PSbCMA9Nevk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6QeFP6BEd_o-pEWpSd49DokUkqw",
    rating: 4.7, year: 2024, developer: "Bandai Namco", publisher: "Bandai Namco",
    description: "Tekken 8 brings the legendary fighting franchise to the next generation with aggressive new mechanics, stunning visuals on UE5, and the epic conclusion of the Mishima saga.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtPcTfvhZVkGTapHdgfZqVbQjhl7b5G_nGs_zBiuOho1NSqEZAhLgQkoO&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYBG-kwdapji3oStG-XFCSyFUJTEWEwNcllS74Ff85Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFN6dwkgVlNFECcwajNfEijm0kJHYqoIQLaGM2U5Rvw&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060", storage: "80 GB" },
    link: "https://tekken.com",
    featured: false, trending: true, popular: false
  },
  {
    id: 36, title: "Prince of Persia: The Lost Crown", category: "Action", genre: "Metroidvania",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
    rating: 4.5, year: 2024, developer: "Ubisoft Montpellier", publisher: "Ubisoft",
    price: "$49.99", salePrice: "",
    description: "Prince of Persia: The Lost Crown is a side-scrolling action-adventure where you master acrobatic combat and time-based powers to rescue the Prince from a cursed citadel.",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b2d1f?w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4460", ram: "8 GB", gpu: "NVIDIA GeForce GTX 950", storage: "30 GB" },
    link: "https://www.ubisoft.com/en-us/game/prince-of-persia/the-lost-crown",
    featured: false, trending: false, popular: false
  },
  {
    id: 37, title: "Valorant", category: "Shooter", genre: "Tactical FPS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRU_a2okroMTulfZZkwEn7f6iav3BCU4DtNXRcc6F9YQ&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTn-gVfKW65GM6h0gk1XuiJApGHF3KFnKo61Y8MrMGw&s=10",
    rating: 4.3, year: 2020, developer: "Riot Games", publisher: "Riot Games",
    description: "Valorant is a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities in high-stakes matches across a global stage.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QtbNlq85fmu3uQOXtnjBH5jrOZ24AVRuUUnWIM2deQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7wShqVb2SHAp3or2voHED_kkbVvqTAtzrecowXKMDQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlonAeV5LG5iUOtU-SVD-Hd_gmTU5pZNnbVhDX89yZaA&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core 2 Duo E8400", ram: "4 GB", gpu: "Intel HD 4000", storage: "30 GB" },
    link: "https://playvalorant.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 38, title: "Forza Horizon 5", category: "Racing", genre: "Open World Racing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbwnfxp87l8cBxWTpC29C7sBW8svmSYtsX93MP7no9w&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQ08mj26NSh9ypY8xZP3hOnf9VyI93VcVD0-ANe0dkQ&s=10",
    rating: 4.8, year: 2021, developer: "Playground Games", publisher: "Xbox Game Studios",
    description: "Forza Horizon 5 is an open-world racing game set in Mexico. Players explore a huge map featuring deserts, jungles, cities, beaches, and volcanoes while driving hundreds of licensed cars. The game offers races, challenges, stunts, customization, and online multiplayer.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEcNHyPuIibj2CYDr8wzo6PhncGqTyBE2XgzflYYecWqIaLY6pzP_0N4&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz0rxAKTqiBqyey68pbGJVTzE_rC-IjZiQXZh7-BBww&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS55zPJ3J9rfysWaO_rdBp2z1iDLsHGmqxDo9dzy5jHw&s=10"
    ],
    requirements: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-8600", ram: "16 GB", gpu: "NVIDIA GTX 970", storage: "110 GB" },
    link: "#",
    featured: true, trending: false, popular: true
  },
  {
    id: 39, title: "Call Of Duty Black Ops", category: "Action", genre: "irst-Person Shooter (FPS), Military Shooter",
    image: "https://store-images.s-microsoft.com/image/apps.9168.71037132718083264.9e558f9c-31e4-4757-b43c-05a53e0c4977.2cabd63d-49ce-4a77-af56-0a1d6a33f61b?q=90&w=480&h=270",
    banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/42700/capsule_616x353.jpg?t=1780962720",
    rating: 4.8, year: 2010, developer: "Treyarch", publisher: "Activision",
    description: "Call of Duty: Black Ops is a Cold War-era FPS where you play as Alex Mason, a CIA operative. The game follows secret military operations across locations such as Cuba, Vietnam, and the Soviet Union as Mason tries to uncover the meaning behind mysterious numbers broadcasts and stop a dangerous Soviet plot.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5geQscaiZy5AfG6SEJO_gtXeZ0EjJD5K-fpcO_BLEVMKm5Hq8ylAybiT&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg402j4Hgd6t57xsfmWsWo_T9XjT8D4NMwzbHEEGBdU2_lVm4qgh6qsGa&s=10",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/42700/ss_02f61572344252870b28b6ca0fd990c80a82dd0b.1920x1080.jpg?t=1780962720"
    ],
    requirements: { os: "Windows XP / Vista / 7 / 10 64-bit", cpu: "ntel Core 2 Duo E6600", ram: "4 GB", gpu: "NVIDIA GeForce 8600 GT", storage: "12 GB" },
    link: "#",
    featured: true, trending: true, popular: false
  },
  {
    id: 40, title: "Sniper Elite 4 Deluxe Edition", category: "Action / Tactical Shooter", genre: "Third-Person Shooter, Stealth, Tactical, World War II",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFBv8pNn-jP00czFeTCQdgnY7meqmz9sTxSxyqz8E6-Z5aV3-6US5ti0&s=10",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312660/header.jpg?t=1681207252",
    rating: 4.1, year: 2017, developer: "Rebellion", publisher: "Rebellion",
    description: "Sniper Elite 4 Deluxe Edition is a World War II tactical stealth shooter where you play as Karl Fairburne, an elite Allied sniper fighting Nazi forces in Italy. The game focuses on long-range sniping, stealth, sabotage, and completing missions in large open maps. The Deluxe Edition includes the base game plus extra missions, weapons, and DLC content. It is especially known for its realistic sniping mechanics and the famous X-Ray Kill Camera. 🎯🎮",
    screenshots: [
      "https://images.g2a.com/470x276/1x1x0/sniper-elite-4-deluxe-edition-pc-steam-key-global-i10000033709006/5912ae5dae653a480a44adfd",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O8D-m3O7R8Ny5SisSKESFEj9AwtJZ68swcOO2OYXoq0T_wq96tj1LAQl&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2AdHjHndNv-uu3alIHGowrTbzcwWTH78y3Sw2J5rOIOb08ee0abJWFg&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "ntel Core i3-2100 or AMD equivalent", ram: "6 GB", gpu: "NVIDIA GTX 970 (4 GB) or", storage: "40 GB" },
    link: "https://homeworlduniverse.com",
    featured: false, trending: false, popular: false
  },
  {
    id: 1e3, title: "Doom Eternal", category: "Shooter", genre: "First-Person Shooter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPYBnvesP9QnjR9jreyXNUlX-2lIVVSCsgIIEkd9NmQ&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2u4jOAfP5JalXhRWb0Zl9bqP5VH6_YHobl-ihEGvIg&s=10",
    rating: 4.7, year: 2020, developer: "id Software", publisher: "Bethesda",
    description: "Doom Eternal pushes the boundaries of FPS with faster combat, acrobatic movement, and razor-sharp gameplay as you fight demon hordes across dimensions.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk1GMkt13bDcgeJO05t1ZkhCm7dXaJi9pkIw3J2t87Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ5AygcKpNTDWN8hjrapAXQhKry4_L-2AuswFcJNfBg&s",
      "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/19811900/doom_eternal_5.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GTX 1060", storage: "45 GB" },
    link: "https://bethesda.net/en/game/doom-eternal",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 1, title: "Stardew Valley", category: "Simulation", genre: "Farming Sim",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyFv0IS_UuoZsveO3vcIweBkAsOseimuTB_H6SPHEfA&s=10",
    rating: 4.8, year: 2016, developer: "ConcernedApe", publisher: "ConcernedApe",
    description: "Stardew Valley is a beloved farming simulation RPG where you inherit an old farm and build your new life in Pelican Town with farming, mining, fishing, and relationships.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVhT7rMGvds4hci-hxoxTyweJrciiIz7aSSgk6f3TcEkrkOJN9X8v9vI&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjJsr4ZmL3Pr2yZeLdvnsJL5hYMyDlbasbjFg6suM0g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSC0SB5-AXpg1pFWWnbmx_2NDSTtd2csnZ4RDtih4vUg&s"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core 2 Duo", ram: "4 GB", gpu: "Intel HD 3000", storage: "1 GB" },
    link: "https://www.stardewvalley.net",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 2, title: "Sekiro: Shadows Die Twice", category: "Action", genre: "Action Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6HkD8YuM6QXoPzbwzuaqRMkEqvSuaY8qHSnHO4H-hTN4EqAwdvYV15M&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoub0DoBJqn6UMUnKsS8Io6MrX3ZuT-CNH1mmUH4dh-aisC8vLgSeC2_s&s=10",
    rating: 4.8, year: 2019, developer: "FromSoftware", publisher: "Activision",
    description: "Sekiro: Shadows Die Twice is an intense action-adventure set in feudal Japan where you take on the role of a disgraced warrior on a mission to rescue his master.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4ee08j_LLHyeDkJ-efSrmQhdnIrb8sJVePUV7-g2qg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB26xfTSEqdqoOo1MWfWXdqFn5Dv73i2V54vB_Avzij81-Tzjuf8m2bt0o&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqYxNem0oUyF6zR86AOP90L7cOaCKdF69sGja6z_kXA&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "NVIDIA GTX 970", storage: "25 GB" },
    link: "https://www.sekiro.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 3, title: "Ghost of Tsushima", category: "Action", genre: "Open World Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqbrVuBzTzuHngvc_W9MxVQn_9VOjI2RTFQ--jNZg3A&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6pA3QboOc_CJBb8D_y1TMfLV-UbipaxX0EwOZQOrAA&s=10",
    rating: 4.8, year: 2020, developer: "Sucker Punch", publisher: "Sony Interactive",
    description: "Ghost of Tsushima is an open-world action-adventure set in feudal Japan, following samurai Jin Sakai's journey to protect Tsushima island from the Mongol invasion.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjvaAc72O3miMVu9Sk4AMWs7eKX6eE7NIu7V5KPbugQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwp76u_nci5Ut0z5hLZbHrQO_u2J7Ky9VqXYxUoxeiRw&s=10",
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Ghost_of_Tsushima_art_direction.jpg/330px-Ghost_of_Tsushima_art_direction.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4670K", ram: "8 GB", gpu: "NVIDIA GTX 1060", storage: "70 GB" },
    link: "https://www.playstation.com/games/ghost-of-tsushima",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 4, title: "Control", category: "Action", genre: "Supernatural Action",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/2111/kZuu7RcHultdoVUuGsReuGcq.png",
    banner: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Control_game_cover_art.jpg/250px-Control_game_cover_art.jpg",
    rating: 4.5, year: 2019, developer: "Remedy Entertainment", publisher: "505 Games",
    description: "Control is a supernatural third-person action-adventure where the Federal Bureau of Control is invaded by a paranormal threat, and you wield powerful abilities to stop it.",
    screenshots: [
      "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2019/08/092_combat_2-1300x731.jpg?ssl=1",
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Control_gameplay_screenshot.jpg/250px-Control_gameplay_screenshot.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB0zcBp_aRLtzqaUmhnZWMWXIc7XCS9v4ZW_PWLvPdBHa4jltMJeuvL8&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4690", ram: "8 GB", gpu: "NVIDIA GeForce GTX 780", storage: "40 GB" },
    link: "https://www.controlgame.com",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 5, title: "Fall Guys", category: "Casual", genre: "Party Royale",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_V7SuQVq6TKV6GpDdIDy1BWKotSKAYLmqBo_PUQX--g&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S97WAf7IDwnl7QTn116LI2YeOgOb2rYqvOmT9NSJlQ&s",
    rating: 4.1, year: 2020, developer: "Mediatonic", publisher: "Epic Games",
    description: "Fall Guys is a free-to-play massively multiplayer party royale game where colorful contestants compete through rounds of chaotic obstacle courses and games.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OohUgtz2efh2OJ6OHoadDMu9EZ2oexEdA7p5EWxBLQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlYo8XXYJSKEsFcJJV8Sqt-dfv5O3Dblk9ti-vYQxiw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFZ_PVck5AunpCALMtOd685mTF5h6UsUjtXk8AaQ3FQ&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2400", ram: "8 GB", gpu: "NVIDIA GTX 660", storage: "8 GB" },
    link: "https://www.fallguys.com",
    featured: false, trending: false, popular: false
  },
  {
    id: 1e3 + 6, title: "Age of Empires IV", category: "Strategy", genre: "RTS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsK35Gyo_kQfE4S1vlrin6X8QpUafRmxD13hUBh_msZQ&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmECh6-pngXuYRghe8QxsAont8k0GdU09bkE9cTP91w&s",
    rating: 4.3, year: 2021, developer: "Relic Entertainment", publisher: "Xbox Game Studios",
    description: "Age of Empires IV brings the beloved RTS franchise to a new generation with epic historical campaigns, deep strategy, and stunning graphics across multiple eras.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoP0sf2kE6rRVbdyQfkkfoaWeROG1lxpOjIfMOvJjGvyQnUiIzy46nX6e&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj0pXRYPFzGRQKYu1n-cHUqpGTcCclyPoVcMcOwCWpg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki6s5IPs_Ar4MYTdH-EWfn_u2zkTjpTzkYmW3XLKwYA&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6300U", ram: "8 GB", gpu: "Intel HD 520", storage: "50 GB" },
    link: "https://www.ageofempires.com/games/age-of-empires-iv",
    featured: false, trending: false, popular: true
  },
  {
    id: 1e3 + 7, title: "Death Stranding", category: "Action", genre: "Strand Game",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpHbgVNqNVK2ORsgcOinCH4IrLetRuYM1OpuAhVDvig&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UcFG3MQN378yzr5Ain-D2hursmUuI8OxZcY-Qh8NbQ&s=10",
    rating: 4.4, year: 2019, developer: "Kojima Productions", publisher: "Sony Interactive",
    description: "Death Stranding is an enigmatic action game where you deliver cargo across a desolate America, connecting isolated cities and uncovering the mystery of Death Stranding.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2RnCJpwdHXb-zFoQuS_UoRLDoAPGgA8fit-XtAuV6w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjezV4WXFl9Kd_Mf2fgUIPxu5Eo9fv_DNth36CQGTZg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTng0ixXd4bA3lqAQs-sjUwqsdCdw83EcUXrNT3IzSlEmbQdGASemnV4&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-3470", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050", storage: "80 GB" },
    link: "https://www.kojimaproductions.jp/en/death-stranding",
    featured: false, trending: false, popular: false
  }
];

const categories = [
  { name: "Action", icon: "fa-bolt" },
  { name: "RPG", icon: "fa-hat-wizard" },
  { name: "Shooter", icon: "fa-crosshairs" },
  { name: "Horror", icon: "fa-skull" },
  { name: "Sports", icon: "fa-futbol" },
  { name: "Racing", icon: "fa-car" },
  { name: "Strategy", icon: "fa-chess" },
  { name: "Fighting", icon: "fa-fist-raised" },
  { name: "Simulation", icon: "fa-city" },
  { name: "Sandbox", icon: "fa-cubes" },
  { name: "Casual", icon: "fa-gamepad" }
];

const featuredGames = gamesDB.filter(g => g.featured);
const trendingGames = gamesDB.filter(g => g.trending);
const popularGames = gamesDB.filter(g => g.popular);
