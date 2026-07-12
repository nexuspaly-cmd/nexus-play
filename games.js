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
    link: "https://www.dropbox.com/scl/fi/lykop8ba87i6yjnjjevre/watch-dogs-2.torrent?rlkey=u2a92u4nrmg87868jbt597qlf&st=my9pbrxy&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/08n4rwlapzlct1zubdzrc/Grand-Theft-Auto-V.torrent?rlkey=xbq25ey6yj14txjv6adfax24w&st=je2ip2w2&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/unh2vxiq4twr7wpdogjdq/Elden-Ring.torrent?rlkey=ghdorupckwzfexzefslc8uja3&st=9qfwgwra&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/ityi9blktwy10g7vzkgxr/Red-Dead-Redemption-2.torrent?rlkey=nskqhnhyaws0sg1kv5o4bcl2g&st=6dthqncs&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/962nxnrc6toxxqt2ezo9r/The-Witcher-3-Wild-Hunt.torrent?rlkey=qr59n03izmvkv0836wqj28oaj&st=wwzjf25s&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/is0iz3utrpdtkqeioxpzp/God-of-War-Ragnarok.torrent?rlkey=wplccp69z97cls8pw5toso8o5&st=ry7qw9aj&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/hben3qp7r2fybs9vs0d83/Minecraft.torrent?rlkey=18rxzd2bqexos9rw25inkk5hq&st=apda1hdz&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/me4rosxvb4gelomvnq3nw/Spider-Man-2.torrent?rlkey=50wg8xrdfpbyqqrsmmrehsmzq&st=1v6ci17q&dl=1",
    featured: true, trending: false, popular: true
  },
  {
    id: 12, title: "FIFA 23", category: "Sports", genre: "Sports Simulation",
    image: "https://images.g2a.com/323x433/1x1x1/fifa-23-p10000336532/1e40646e865b43679642c6a0",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdN13rt666xYJrHOym1G25HQhSpsQNo1feqWefadngPBJoUu7U-gbGRQC&s=10",
    rating: 4.0, year: 2021, developer: "EA Vancouver", publisher: "EA Sports",
    description: "EA Sports FC 21 offers the most authentic football experience with HyperMotionV technology, Opta data, and thousands of real players, teams, and leagues.",
    screenshots: [
      "https://i.ytimg.com/vi/uaXNIwR1FBs/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S6bljuAjavVObT2SRfrVM_gkXH_0BPTO6Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMhOXlo-yNhWScPS9WHJzS1xeGx4kVCW4VdTRP1f36eKF_CCWiKzRnKw&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GTX 1050 Ti", storage: "56 GB" },
    link: "https://www.dropbox.com/scl/fi/luee34430qeake9blp15b/FIFA-23.torrent?rlkey=n5d6fp5og2t23sjms25t866t8&st=yj8ig9rn&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/iw460b28iax76r2oach4d/Hogwarts-Legacy.torrent?rlkey=1wtv9ksbod8zjs0k1lmts5wfz&st=8jst6aq3&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/woyyzlxssr1wk9bw2mzdl/Starfield.torrent?rlkey=86p93dixxx81z622nhtkg37yz&st=uwvkggls&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/lvffuv1g02xjmzu3zpzju/Resident-Evil-4-Remake.torrent?rlkey=ibpk77bine30divg5nb3koba7&st=ulmvj3m3&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/pkqf847aqhfvbz9xse043/Assassin-s-Creed-Mirage.torrent?rlkey=2imka7d2rw4jp4uzw8nf4sptm&st=dhn6lfgq&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/4p04z75e247sdftqimqqt/Diablo-II.torrent?rlkey=tsn56qpx9yex9ilzbab0fsmjs&st=39kjo3og&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/ufk9fomgn3a7c2jrkv3j3/Need-For-Speed-Most-Wanted-2012.torrent?rlkey=mv0pv9466egfbetnhalpl5qyg&st=3blly3gt&dl=0",
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
    link: "https://www.dropbox.com/scl/fi/nvse5pktk6hmn3xrgroc8/FAR-CRY-3-2.torrent?rlkey=4o2z5f5toy3motaxcc7qzud5y&st=j97ko48l&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/0ltlau7wztaz1p6gwr8at/NBA-2K17.torrent?rlkey=gi38z51k9ot8mhrfdp0wfv3dj&st=e155c9lr&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/nyvposfvnkbs2by7swcg1/The-Legend-of-Zelda-breath-of-the-wild.torrent?rlkey=gco05sxuhib9zgxpkdz9yf4f3&st=16x5lhy2&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/9lkafebdvpa9ixekk1lo0/The-Last-of-Us-Part-1.torrent?rlkey=19s4ukx3nrhgyo6z204zuxtrm&st=zi0zn0e6&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/pdfidie9d7j2hvuwvyea6/Sons-of-the-Forest.torrent?rlkey=vjxoyeip31x68edfbq741ko95&st=3y49dnu2&dl=0",
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
    link: "https://www.dropbox.com/scl/fi/y4oqvld6ld9rhu2wqg3e9/Cities-Skylines-II.torrent?rlkey=vu9e15xxfnupeg2oi2qpynngn&st=hgfofr5o&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/nl3vih0zd5quvmkt2vfcx/Alan-Wake-2.torrent?rlkey=fxcjz3gw65h4v8yn7a31s75zj&st=4vrh7cd0&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/hyed7ycj8wgnmgzmkq4p2/Call-of-Duty-Ghosts.torrent?rlkey=92li327iym6j6r6ujnyckdq17&st=teuwdgpr&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/zawqz6u7duehusk8dclag/Horizon-Zero-Dawn-Repack.torrent?rlkey=e48nlger7rc1j0e9ckerj7wnl&st=zad2ad04&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/j7yitr1ufsjo60266sfdb/eFootball-PES-2021.torrent?rlkey=wa1a4fx4cg2fzieydb8mpty9u&st=nht2t7w8&dl=1",
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
      "https://i.ytimg.com/vi/IvGmcijy2eE/sddefault.jpg"
    ],
    requirements: { os: "Windows 11 / 10 / 8 / 7 64-bit", cpu: "Intel Core i5-750", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460", storage: "40 GB" },
    link: "https://www.dropbox.com/scl/fi/qnk23y7tysdeiiawedacs/Mortal-Kombat-X.torrent?rlkey=dyk13jhf8g67di5xwvpus039q&st=a3kbtz84&dl=1",
    featured: false, trending: true, popular: false
  },
  {
    id: 34, title: "2077 Cyberpunk", category: "RPG", genre: "Open World, RPG, Sci-Fi, First-Person",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oY0ogjcW5A33qlBAK7iI_2_gF3AKiUI72FpZ4S_2ZQ&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-PuvDIEvcLDMC5lrE3D8cJa4H0IIC8wwzMSO15J1Hw&s=10",
    rating: 4.8, year: 2020, developer: "CD PROJEKT RED", publisher: "CD PROJEKT",
    description: "Cyberpunk 2077 is an open-world sci-fi RPG set in the futuristic metropolis of Night City, a city obsessed with technology, power, and cybernetic enhancements.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTHpjiNKGcWgqm2Xw_CTA1DUZPwpH-GrxVeyEaq2vEhvymQV_KI0E0lI&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevQiS9cL-4xECNXWOAR0_iDflzdBVPSVuIIpx8lAy6w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtCGhvLapxlQvY_Yf3ul74mv6pfp2-mcgnp3oLNO6qQ&s=10"
    ],
    requirements: { os: "Windows 11 / 10 64-bit", cpu: "Intel Core i7-12700", ram: "16 GB", gpu: "NVIDIA RTX 2060 Super", storage: "70 GB SSD" },
    link: "https://www.dropbox.com/scl/fi/9x5ikdvg7uit0usgr4fhx/2077-Cyberpunk.torrent?rlkey=u17dgk9r7yhuo31poz44a8em0&st=lwd4wzgv&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/zrldjrv8k57mn55qivt6i/Tekken-8.torrent?rlkey=3hi76yww0n5x1w09cm5o7fvk7&st=ca9yllyf&dl=1",
    featured: false, trending: true, popular: false
  },
  {
    id: 36, title: " GTA Vice City-Definitive Edition", category: "Action-Adventure", genre: "Open World, Action, Crime",
    image: "https://cdn.mobygames.com/5f803a28-a22b-11ee-951e-02420a000136.webp",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAERDtpLB2zYqIe1quSsq5hbSSH_0yIfitQOMjNL7zHiEh9AQjut1-Qin9&s=10",
    rating: 4, year: 2041, developer: "Grove Street Games", publisher: "Rockstar Games",
    description: "Grand Theft Auto: Vice City – The Definitive Edition is a remastered version of the 2002 classic, rebuilt with improved graphics",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAnkr8QXioKKHssxOZQ8-nOyefN8nZxOpZZpyRcvcnw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJq4r_Q823OhMWzIgj3P8HVXGlYLUB7ZggQZbW-21IRw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIJrDR0_QpHdemK17NdRCTkRNFlWiJvs8GMaF_BAaOw&s"
    ],
    requirements: { os: "Windows 11 7 10 64-bit", cpu: "Intel Core i5-6600K", ram: "16 GB", gpu: "NVIDIA GTX 760 2GB", storage: "45 GB SSD" },
    link: "https://www.dropbox.com/scl/fi/enhdagf873jqz4kmqect2/GTA-Vice-City-Definitive-Edition.torrent?rlkey=yrvnhot56cutnz7uvravk3mdm&st=fdo7nx51&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/nvtef6yi5ox582gke3k7t/Forza-Horizon-5.torrent?rlkey=zgb4ml3j04hjz055ciw3a1wgg&st=nsydj7qh&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/l5pryk2kpca72zbsfvdyo/CALL-OF-DUTY-OPS-1.torrent?rlkey=43thl2puuu3xg7ce0t96zttoq&st=7732uteh&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/p7prujcthln0i5zmpajg1/Sniper-Elite-4-Deluxe-Edition.torrent?rlkey=wwnko2w2yl2zfbi8kmldwzran&st=dhzzd8yr&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/5axczloob9r0mxkgyedil/Doom-Eternal.torrent?rlkey=dsqnm3bteetpj39dxc2ld4u19&st=0gjg2cxs&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/pp2d8r31ruco5bsvgzawx/Stardew-Valley.torrent?rlkey=y5jv39ajm485xw5ibc97tjbzk&st=eg1lh365&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/uef4w9aq8jr0j6e2iijb2/Sekiro-Shadows-Die-Twice.torrent?rlkey=ery0w3hbtk8b2ckio9tl8zu8d&st=h8bpdz33&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/bsu1gbjm1fqztkp22m4me/Ghost-of-Tsushima.torrent?rlkey=69z0as4nufr6a9c4rac6xtvdw&st=8jygumyt&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/b33p3axebx3jaql7zt75p/Control.torrent?rlkey=ng1cqqmd5e22ksf5oxjibcf02&st=sa0mm6ez&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/z88nkwniesq4a2h53q5y5/Age-of-Empires-IV.torrent?rlkey=4cy80g9oxl01gb92d96704lvu&st=4b9gy8dm&dl=1",
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
    link: "https://www.dropbox.com/scl/fi/6f1is5xg8daml6uyca5qn/Death-Stranding.torrent?rlkey=gnan4tl55edysexecplpci69b&st=b5t3juim&dl=1",
    featured: false, trending: false, popular: false
  },
    {
    id: 1e4 + 8, title: "Call of Duty: Advanced Warfare", category: "Action", genre: "irst-Person Shooter (FPS), Military Shooter",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Advanced_Warfare.jpg",
    banner: "https://cdn.europosters.eu/image/750/22748.jpg",
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
    id: 1e4 + 9, title: "Assassin's Creed Chronicles: China", category: "Action", genre: "Stealth Platformer",
    image: "https://static.wikia.nocookie.net/assassinscreed/images/5/54/Assassin%27s_Creed_Chronicles_-_China.jpg/revision/latest?cb=20140922183751",
    banner: "https://upload.wikimedia.org/wikipedia/en/8/8d/Assassin%27s_Creed_Chronicles_cover_art.jpg",
    rating: 4.2, year: 2015, developer: "Climax Studios", publisher: "Ubisoft",
    description: "Assassin's Creed Chronicles: China follows Shao Jun on a stealth-driven adventure through 16th-century China, combining parkour, silent assassinations, and beautiful 2.5D visuals.",
    screenshots: [
      "https://media.wired.com/photos/5909630fd8c8646f38eefa05/master/w_1600%2Cc_limit/ACC_CHINA_Kill.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lqqhbaNGLZGSjW2oJJM_979gV4GdJemGOpVLvWXzKlbQEGTs2I1dnqFn&s=10",
      "https://i.ytimg.com/vi/4qxEq2-qnB0/maxresdefault.jpg"
    ],
    requirements: { os: "Windows 7 SP1 64-bit", cpu: "Intel Core 2 Duo E8200", ram: "2 GB", gpu: "NVIDIA GeForce GTS 450", storage: "4 GB" },
    link: "#",
    featured: true, trending: true, popular: false
},

{
    id: 1e4 + 10, title: "Need for Speed: Most Wanted (2005)", category: "Racing", genre: "Open World Racing",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg/250px-Need_for_Speed_Most_Wanted_Box_Art.jpg",
    banner: "https://i.ytimg.com/vi/DRR464LoKhI/sddefault.jpg",
    rating: 4.9, year: 2005, developer: "EA Black Box", publisher: "Electronic Arts",
    description: "Need for Speed: Most Wanted lets players race through Rockport City, outrun the police, customize cars, and climb the infamous Blacklist in one of the series' most iconic entries.",
    screenshots: [
      "https://m.media-amazon.com/images/M/MV5BMWI3YmY1OGEtYmEzMC00MDI0LWI3ZjYtZDQyZTA4ZTVhNGViXkEyXkFqcGc@._V1_.jpg",
      "https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1653541825175-65G81BWZRUSWNK2BP76T/nfsps-56a9c3973df78cf772aa56d5+%281%29.jpg?format=2500w",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCC5Yjvsi7IopPvo_rsdV6fuj0ciu0vJBhuV7fwqSqBjPnM-SW0nNgTzc&s=10"
    ],
    requirements: { os: "Windows XP", cpu: "Intel Pentium 4 1.4 GHz", ram: "256 MB", gpu: "GeForce3 64 MB", storage: "3 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},

{
    id: 1e4 + 11, title: "Need for Speed: Shift", category: "Racing", genre: "Simulation Racing",
    image: "https://upload.wikimedia.org/wikipedia/en/0/00/Need_for_Speed_Shift.jpg",
    banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/24870/header.jpg?t=1759355309",
    rating: 4.4, year: 2009, developer: "Slightly Mad Studios", publisher: "Electronic Arts",
    description: "Need for Speed: Shift delivers a realistic racing experience with authentic cars, detailed tracks, cockpit view, and immersive motorsport gameplay.",
    screenshots: [
      "https://i.ytimg.com/vi/2Lc9WRgXumA/sddefault.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Nfs-shift-promo.jpg/250px-Nfs-shift-promo.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauecBRkd_Xq3GGPPFBIhZCGr-uPaXK2BQL1eNW6fX37TqsFiikz_5toI&s=10"
    ],
    requirements: { os: "Windows XP/Vista", cpu: "Intel Core 2 Duo 1.6 GHz", ram: "1.5 GB", gpu: "GeForce 7800 GT", storage: "6 GB" },
    link: "#",
    featured: true, trending: true, popular: false
},

{
    id: 1e4 + 12, title: "PAYDAY 2", category: "Action", genre: "Co-op FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Payday2cover.jpg",
    banner: "https://gaming-cdn.com/images/products/223/orig/payday-2-pc-game-steam-cover.jpg?v=1720684121",
    rating: 4.8, year: 2013, developer: "Overkill Software", publisher: "505 Games",
    description: "PAYDAY 2 is a cooperative first-person shooter where players complete high-risk heists, earn cash, unlock skills, and customize weapons with friends.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnMnu9ywch4MLdrc95jDc_x3G9vcXUJ-OFTO_eHH9eQ5ecQ7sv-dRHK0&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjM6qTobek6cfZBiyLgRLWdWtO15PPw6QkREkNOvmFZSdAj9mHhj5hF7M&s=10",
      "https://cdn.mos.cms.futurecdn.net/7f444cdad8b1efb920f35045ec0d9ca9-1200-80.jpg"
    ],
    requirements: { os: "Windows 7", cpu: "Intel Core 2 Duo 2.4 GHz", ram: "4 GB", gpu: "NVIDIA GeForce 8800 GT", storage: "83 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},

{
    id: 1e4 + 13, title: "Sniper Elite 3", category: "Shooter", genre: "Tactical Shooter",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sniper_Elite_III_cover_art.jpg",
    banner: "https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2014/6/27/1403879050771/Sniper-Elite-III-games-009.jpg?width=465&dpr=1&s=none&crop=none",
    rating: 4.5, year: 2014, developer: "Rebellion Developments", publisher: "505 Games",
    description: "Sniper Elite 3 takes players to North Africa during World War II, featuring tactical sniping, stealth gameplay, and the famous X-Ray Kill Cam.",
    screenshots: [
      "https://cdn.mos.cms.futurecdn.net/2wAeRbbRJZVEi6qEMQrk3E.jpg",
      "https://acdn-us.mitiendanube.com/stores/004/056/791/products/sniperelite3_1205164b-581de6009da8ab61ff17102561353235-1024-1024.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBPWOGXqwnoAKvPgkaEFmwj_UL3dn0aOBHb7x8gkf6jB4TKkHBDBVETo&s=10"
    ],
    requirements: { os: "Windows Vista SP2", cpu: "Intel Core i3-2100", ram: "2 GB", gpu: "NVIDIA GeForce GTX 460", storage: "18 GB" },
    link: "#",
    featured: true, trending: true, popular: false
},

{
    id: 1e4 + 14, title: "Far Cry 4", category: "Action", genre: "Open World FPS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cay2j9PT8VlXccYvUNI6NufLtPpCJEu9qYLx497XfXvIlNiUfeVYIUc&s=10",
    banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/298110/capsule_616x353.jpg?t=1778697412",
    rating: 4.8, year: 2014, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Far Cry 4 is an open-world first-person shooter set in Kyrat, where players battle a ruthless dictator while exploring mountains, forests, and villages.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNVSrfSRhP-4KXSZ6lnbcSuVRZgTgp6k_vFOhYPGnmg&s=10",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/324343/ss_0befabea5f5977a2086200ceede665210d6f566e.1920x1080.jpg?t=1455815600",
      "https://gaming-cdn.com/images/products/347/screenshot/far-cry-4-pc-game-ubisoft-connect-europe-wallpaper-1.jpg?v=1701183804"
    ],
    requirements: { os: "Windows 7 SP1 64-bit", cpu: "Intel Core i5-750", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460", storage: "30 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},

{
    id: 1e4 + 15, title: "Assassin's Creed III", category: "Action", genre: "Open World Adventure",
    image: "https://upload.wikimedia.org/wikipedia/en/2/29/Assassin%27s_Creed_III_Game_Cover.jpg",
    banner: "https://cdn.mos.cms.futurecdn.net/MSLeb8Qkwnb4XHwF4WNgME.jpg",
    rating: 4.6, year: 2012, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Assassin's Creed III follows Connor during the American Revolution, combining stealth, parkour, naval combat, and an expansive open world.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxLNmhwK1kbbZlQGz_Ckaa-MIdcm71G_CTmljrbaBeBu35dv6afzc9XgL&s=10",
      "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2012/10/31/1351681450340/Assassins-Creed-3-009.jpg?width=465&dpr=1&s=none&crop=none",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/Assassins-Creed-3-Details1.jpg"
    ],
    requirements: { os: "Windows Vista SP2 64-bit", cpu: "Intel Core 2 Duo E8200", ram: "2 GB", gpu: "NVIDIA GeForce 8800 GT", storage: "17 GB" },
    link: "#",
    featured: true, trending: true, popular: false
},

{
    id: 1e4 + 16, title: "Injustice: Gods Among Us Ultimate Edition", category: "Fighting", genre: "Action Fighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy_p-cBYHvZkrGpYR9IgHcc2VXMeRmOzTt8ff8Zs1aXGALhXQJgOQppc&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWc96Dwm4nInOaYYbuT_wf9-LS_W3tChiWiDdtG4muAkON8HqggV2H0BT&s=10",
    rating: 4.7, year: 2013, developer: "NetherRealm Studios", publisher: "Warner Bros. Interactive Entertainment",
    description: "Injustice: Gods Among Us Ultimate Edition brings DC superheroes and villains together in cinematic one-on-one battles with unique powers and interactive arenas.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe0jDf06YYjmzr4aAzfLAAJN7T-jl16atxwD6wzMI4w&s",
      "https://i.ytimg.com/vi/tBwMzQVXgCE/maxresdefault.jpg",
      "https://i.ytimg.com/vi/8aiIrJqnJ7Q/maxresdefault.jpg"
    ],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core 2 Duo 2.4 GHz", ram: "2 GB", gpu: "NVIDIA GeForce 8800 GTS", storage: "21 GB" },
    link: "#",
    featured: true, trending: true, popular: false
},

{
    id: 1e4 + 17, title: "Battlefield 4", category: "Shooter", genre: "First-Person Shooter",
    image: "https://m.media-amazon.com/images/M/MV5BYjVhMmRiODEtZDVjYy00NDhkLTlhZTMtMjQyMzFmYjhkNGNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ba-075NFudd50h91CPSMVHDCrLBQD2UQuek7Kzuc8S6SHNtRbw2OPzQ&s=10",
    rating: 4.8, year: 2013, developer: "EA DICE", publisher: "Electronic Arts",
    description: "Battlefield 4 delivers large-scale multiplayer warfare, destructive environments, modern weapons, and an action-packed military campaign.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum61D1KbsdnhTjd6pRqz7AkteaYq7GFtvcGAg_Wx9V6dcqP6jlf8V1qw6&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLsFAYhkqPrV0338yTEU4FIx7sM4bBCGorWHyj4mAioae3mzJl8QMtUI&s=10",
      "https://cdn.mos.cms.futurecdn.net/0e1513788dde3977e866c21723ada121.jpg"
    ],
    requirements: { os: "Windows 8 64-bit", cpu: "Intel Core i5-2300", ram: "4 GB", gpu: "NVIDIA GeForce GTX 660", storage: "30 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},

{
    id: 1e4 + 18, title: "Assassin's Creed Unity", category: "Action", genre: "Open World Adventure",
    image: "https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg",
    banner: "https://static.wikia.nocookie.net/assassinscreed/images/4/48/Unity_novel.jpg/revision/latest?cb=20141102142838",
    rating: 4.5, year: 2014, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Assassin's Creed Unity takes players to Paris during the French Revolution, featuring improved parkour, stealth, detailed crowds, and co-op missions.",
    screenshots: [
      "https://www.gamegrin.com/assets/Uploads/2023/07/12/_resampled/resizedimage640360-image-2023-07-12-141839557.png",
      "https://cdn.mos.cms.futurecdn.net/42ff7feb8d4df919a6bd3f85fe691afa.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_hpsbliZZE6o-S6WDw5SI--msAcMs5o4CKndsW3sX1G1r0ctKeVqWCw&s=10"
    ],
    requirements: { os: "Windows 7 SP1 64-bit", cpu: "Intel Core i5-2500K", ram: "6 GB", gpu: "NVIDIA GeForce GTX 680", storage: "50 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 19, title: "GTA San Andreas Definitive Edition", category: "Action", genre: "Open World Adventure",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1547000/capsule_616x353.jpg?t=1781138712",
    banner: "https://images.steamusercontent.com/ugc/1877451942116082670/0D84609DC8CBEA421CD495C5F8C6F5EC54293983/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    rating: 4.4, year: 2021, developer: "Grove Street Games", publisher: "Rockstar Games",
    description: "Grand Theft Auto San Andreas Definitive Edition brings the legendary open-world adventure back with enhanced graphics, improved controls, upgraded lighting, and modern gameplay features while preserving the original story of CJ and Grove Street.",
    screenshots: [
      "https://cdn2.unrealengine.com/egs-grandtheftautosanandreasthedefinitiveedition-rockstargames-g1a-00-1920x1080-db31e491c234.jpg",
      "https://images.ctfassets.net/h1rqp7q66d54/2sxGKqg3LmJz6i34xZrNU7/a92498acfa4e6fb381e1b3c88fe008a2/GTASA_PC_Retail-3.jpg",
      "https://thesportsrush.com/wp-content/uploads/2022/10/ee8667c5-gtasa_ps4_retail-2.jpg"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 760", storage: "19 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 20, title: "Grand Theft Auto IV The Complete Edition", category: "Action", genre: "Open World Adventure",
    image: "https://images.ctfassets.net/h1rqp7q66d54/573sV0kiTALMbBfR1vDfTm/6ff8b77beb90703d00b7b46241fd464c/GTAIV_Hero_Character_1920x1080.jpg?w=&h=630&fm=&q=",
    banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/60778110-f81f-4e33-bc08-be3749b36dd8/dk741yd-1dab32ae-8c75-4334-a960-4392672fc35b.png",
    rating: 4.7, year: 2010, developer: "Rockstar North", publisher: "Rockstar Games",
    description: "Grand Theft Auto IV The Complete Edition includes the original GTA IV along with The Lost and Damned and The Ballad of Gay Tony, delivering an immersive open-world experience in Liberty City with an engaging story and enhanced gameplay.",
    screenshots: [
      "https://cdn.loaded.com/media/catalog/product/g/r/grand-theft-auto-iv-the-complete-edition-wallpaper-4-min.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/0000006360.1920x1080.jpg?t=1721061564",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGEpzwHZtDzJN7YWcA9waSypm8C7K0kzx9iNyH97QFWu5ynGeGZDVEMKE&s=10"
    ],
    requirements: { os: "Windows 7 SP1 / Windows 10", cpu: "Intel Core 2 Quad Q6600", ram: "4 GB", gpu: "NVIDIA GeForce 9800 GT 1 GB", storage: "22 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  
  {
    id: 1e4 + 21, title: "GTA III Definitive Edition", category: "Action", genre: "Open World Adventure",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1546970/capsule_616x353.jpg?t=1781138540",
    banner: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Grand_Theft_Auto_III_-_The_Definitive_Edition_logo.svg/3840px-Grand_Theft_Auto_III_-_The_Definitive_Edition_logo.svg.png",
    rating: 4.3, year: 2021, developer: "Grove Street Games", publisher: "Rockstar Games",
    description: "Grand Theft Auto III Definitive Edition modernizes the classic open-world adventure with enhanced visuals, improved controls, updated lighting, and refined gameplay while preserving the original story set in Liberty City.",
    screenshots: [
      "https://play-lh.googleusercontent.com/tTJOdk3LU61oAiTzZHjqePbFwknKhtH_hJE-sV2ZeGEMkad7PfycVsonD-LeHyAiMVjgVF5WwjfR3aP0_VYY5R0=w526-h296-rw",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__AJnTdeLHwq4PEpxQdNJg9EtWtCkNKDRX0XBR2GY74srNve8kFsBs_EQ&s=10",
      "https://play-lh.googleusercontent.com/YYEv3yADh5eD_HbyCErvJ05qCuEvrCgOGaQ3RMMOUc7GWYu--6knxiE7pN0WAm9G7K3LU2wUJXTSAJRqgKQO=w526-h296-rw"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 760", storage: "5 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 22, title: "Call of Duty: World at War", category: "Action", genre: "First-Person Shooter",
    image: "https://m.media-amazon.com/images/M/MV5BNjk3Mjg5MTUtNTBkMi00ZDFmLWJhMGYtZTIxZjRlMTFlYWMxXkEyXkFqcGc@._V1_.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg",
    rating: 4.6, year: 2008, developer: "Treyarch", publisher: "Activision",
    description: "Call of Duty: World at War takes players to the Pacific and Eastern Fronts of World War II, featuring an intense campaign, cooperative gameplay, and the iconic Zombies mode for the first time in the series.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpPC0Ie-5Mi5X2tSunn4qQP7NaDzXoIbiSyM6Qyv4SDogBIsJkK0x3X40&s=10",
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-world-at-war/6/66/Codwaw_w011.jpg",
      "https://i.ytimg.com/vi/3-TcN5xewOw/maxresdefault.jpg"
    ],
    requirements: { os: "Windows XP / Vista / 7", cpu: "Intel Pentium 4 3.0 GHz", ram: "1 GB", gpu: "NVIDIA GeForce 6600 GT", storage: "8 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 23, title: "Need for Speed Underground 2", category: "Racing", genre: "Street Racing",
    image: "https://m.media-amazon.com/images/M/MV5BNDM2NDAwMGEtZTI4NS00OGE3LWI2MjUtOTQzM2Q5ZGIwZjMyXkEyXkFqcGc@._V1_.jpg",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841167fbf53621973e62e5e490",
    rating: 4.8, year: 2004, developer: "EA Black Box", publisher: "Electronic Arts",
    description: "Need for Speed Underground 2 is a legendary street racing game featuring an open-world city, extensive car customization, thrilling races, and a wide selection of licensed vehicles.",
    screenshots: [
      "https://cdn-fastly.autoguide.com/media/2026/03/13/14217/video-game-throwback-need-for-speed-underground-2.jpg?size=720x845&nocrop=1",
      "https://cdn-fastly.autoguide.com/media/2026/03/13/14212/video-game-throwback-need-for-speed-underground-2.jpg",
      "https://staticdelivery.nexusmods.com/mods/3609/images/headers/99_1780843559.jpg"
    ],
    requirements: { os: "Windows 98 / ME / 2000 / XP", cpu: "Intel Pentium III 933 MHz", ram: "256 MB", gpu: "NVIDIA GeForce2 MX / ATI Radeon 7500", storage: "2 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 24, title: "Need for Speed: The Run", category: "Racing", genre: "Street Racing",
    image: "https://m.media-amazon.com/images/M/MV5BNjJhNTIyMjgtY2U1Yy00YjRjLWJmMzQtNTNmODZkMGNjZjZmXkEyXkFqcGc@._V1_.jpg",
    banner: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_NeedForSpeedTheRun_image1600w.jpg",
    rating: 4.4, year: 2011, developer: "EA Black Box", publisher: "Electronic Arts",
    description: "Need for Speed: The Run is an action-packed racing game where players compete in a high-stakes cross-country race from San Francisco to New York, featuring cinematic gameplay, intense police chases, and a wide variety of high-performance cars.",
    screenshots: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Need_for_speed_the_run_screenshot.jpg/250px-Need_for_speed_the_run_screenshot.jpg",
      "https://www.gamereactor.eu/media/31/needspeed_263168b.jpg",
      "https://i.ytimg.com/vi/vEwUtcDkOgs/maxresdefault.jpg"
    ],
    requirements: { os: "Windows Vista SP2 / 7", cpu: "Intel Core 2 Duo 2.4 GHz", ram: "3 GB", gpu: "NVIDIA GeForce 9800 GT", storage: "18 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 25, title: "Battlefield 1", category: "Action", genre: "First-Person Shooter",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Battlefield_1_cover_art.jpg/250px-Battlefield_1_cover_art.jpg",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-kay5vr6bpeynEodc26MFw6zlnG6MPw4cIQxkwZ-PoDzcZBrqEKA52A&s=10",
    rating: 4.7, year: 2016, developer: "EA DICE", publisher: "Electronic Arts",
    description: "Battlefield 1 delivers an epic World War I experience with large-scale multiplayer battles, immersive single-player War Stories, dynamic environments, and authentic weapons and vehicles from the Great War.",
    screenshots: [
      "https://image.api.playstation.com/cdn/EP0006/CUSA02387_00/FREE_CONTENTI22tCjMo7J7rH8GqouTB/6.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRm62owzMr07o7mrH1gahafoWd6hQqfPUhFqi8Tj2xnh0dL7gLL_uQWvr&s=10",
      "https://media.newgamenetwork.com/uploads/2025/10/Battlefield1PC_11_3.jpg"
    ],
    requirements: { os: "Windows 7 / 8.1 / 10 64-bit", cpu: "Intel Core i5-6600K", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 2 GB", storage: "50 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 26, title: "Battlefield 3", category: "Action", genre: "First-Person Shooter",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238820/capsule_616x353.jpg?t=1777326004",
    banner: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Battlefield_3_Game_Cover.jpg/250px-Battlefield_3_Game_Cover.jpg",
    rating: 4.7, year: 2011, developer: "EA DICE", publisher: "Electronic Arts",
    description: "Battlefield 3 offers an intense modern military shooter experience with a cinematic campaign, massive multiplayer battles, realistic destruction, and advanced Frostbite 2 graphics.",
    screenshots: [
      "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2011/11/4/1320409970932/Battlefield-3-007.jpg?width=465&dpr=1&s=none&crop=none",
      "https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/58c31f11479a4559008b57b8.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7GakRZmNrlX6wbsStvZArgLIpjWoimGPa0ol5PeZsy-ojOv-grqOOw&s=10"
    ],
    requirements: { os: "Windows Vista SP2 / 7", cpu: "Intel Core 2 Duo 2.4 GHz", ram: "2 GB", gpu: "NVIDIA GeForce GTX 560", storage: "20 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 28, title: "Assassin's Creed IV Black Flag", category: "Action", genre: "Open World Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YGJj_9I2SbT61oLUKPumqxz5kb5iuSqXX5J7fNDCXJmtgjWokmT5sEl7&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR115Zq63eWyRt5joYHPwjGoR5nieG4OrDzTc-Lz7qcDtG7ty_svDK-ghs&s=10",
    rating: 4.8, year: 2013, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Assassin's Creed IV Black Flag follows pirate Edward Kenway across the Caribbean, combining naval combat, stealth, exploration, and open-world gameplay during the Golden Age of Piracy.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAbtbHIxfExZIp4_YtxvjFzZzpSTJ6qeckjDnswHYTseUsjRTdRi9cSg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7SH_qOCEvi_A5Umc0F7EqVQ09-LXsV1dPDFNiWwW19rJ45pYrL2xhTpq&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uTmYC6Ea7EXCUVP1eYmpwoJGz9KkpkOyXQYpJOZMYBcgdLIW0rJ1WMYO&s=10"
    ],
    requirements: { os: "Windows Vista SP2 / 7 / 8", cpu: "Intel Core i5-2400S", ram: "4 GB", gpu: "NVIDIA GeForce GTX 260", storage: "30 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 29, title: "Mafia III", category: "Action", genre: "Open World Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiS_CbKblugRiSKM3SL0GDV3mXbZ5AXqg3f81zEKJLzh2cEEeHH_KalnYu&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIURxdaqblxoIzXV5_8w6Nhdu2CMmS4V4XyrZ32KBrdqk6Ays8bpRCFCc&s=10",
    rating: 4.4, year: 2016, developer: "Hangar 13", publisher: "2K Games",
    description: "Mafia III follows Vietnam veteran Lincoln Clay as he seeks revenge against the Italian Mafia in the city of New Bordeaux, featuring an open world, intense gunfights, stealth, and a gripping crime story.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WDu_KDtfxrVLiOy8jaXlhUsexRocPuNPsIUfVZH2K65qkJiN8SCnFZ0&s=10",
      "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1461071464874-EV6I0KLJIJ1FAXSLP2E7/image-asset.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgqdE9Vo1LiHBnyHoRAIrJQoKmRhBQcjY26HflICyH_HiIbaCRYErvms&s=10"
    ],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5-2500K", ram: "6 GB", gpu: "NVIDIA GeForce GTX 660", storage: "50 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 30, title: "Assassin's Creed II", category: "Action", genre: "Open World Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtsLlyxCWjFl9rNH1V2aYN8uzjPMW_0_uOMLeQNGFBQ&s=10",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/50130/header.jpg?t=1746717708",
    rating: 4.9, year: 2009, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Assassin's Creed II follows Ezio Auditore on a journey of revenge through Renaissance Italy, featuring parkour, stealth, thrilling combat, and a rich open-world experience.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZa0sSD74urAovvx2FZMPOvljO094JXn2Dr1TyzZs5EtYpuk8gwWoLNc&s=10",
      "https://cdn.cultura.com/cdn-cgi/image/width=450/media/pim/mafia-ii-5026555247641_9.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvXR7C-yxp1ya9DwKp6JJZCR5g_x-0HiqoxFHo_9z6RtC9TJTkrWY_lM&s=10"
    ],
    requirements: { os: "Windows XP / Vista / 7", cpu: "Intel Core 2 Duo 1.8 GHz", ram: "2 GB", gpu: "NVIDIA GeForce 7900 GS", storage: "8 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 31, title: "Far Cry Primal", category: "Action", genre: "Open World Adventure",
    image: "https://images.squarespace-cdn.com/content/v1/58bedb0ab3db2bd0463e552b/1488928090199-81WOQR4N03UFM3MBW3OQ/BLOG_FARCRY_1280X788_001A.jpg?format=1500w",
    banner: "https://upload.wikimedia.org/wikipedia/fr/0/0f/Far_Cry_Primal_Logo.jpg",
    rating: 4.5, year: 2016, developer: "Ubisoft Montreal", publisher: "Ubisoft",
    description: "Far Cry Primal takes players to the Stone Age, where they must survive against wild beasts and hostile tribes using primitive weapons, crafting, and animal companions in a vast open world.",
    screenshots: [
      "https://prod-images.blacknut.net/66d58be8c782bd41aabf2b13_hd.jpg",
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1rV5vJkKjrwtE9sq3Eazgx/43ef6480eeeca101d2b2bd9f97caa702/overview1__1_.jpg",
      "https://prod-images.blacknut.net/66d58be866965ee3c721d88c_hd.jpg"
    ],
    requirements: { os: "Windows 7 / 8.1 / 10 64-bit", cpu: "Intel Core i3-550", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460", storage: "20 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 32, title: "Little Nightmares", category: "Adventure", genre: "Puzzle Platform Horror",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Little_Nightmares_Box_Art.png",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vtuqzb4H_P7VccW4yOwKbSsf9EP9UMJeW0LuU2rMceM_GeWlR_9C6Cw&s=10",
    rating: 4.7, year: 2017, developer: "Tarsier Studios", publisher: "Bandai Namco Entertainment",
    description: "Little Nightmares is a dark puzzle-platform horror adventure where players guide Six through the mysterious Maw, solving puzzles, avoiding terrifying creatures, and uncovering disturbing secrets.",
    screenshots: [
      "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2017/04/littlenightmares.jpg",
      "https://www.pluggedin.com/wp-content/uploads/2020/01/Little_Nightmares__Large.jpg-1024x587.jpeg",
      "https://storage.ghost.io/c/50/c6/50c61f91-0165-4605-93bc-f8598149e466/content/images/2025/02/little-nightmares-2-school-e1612999445189-1.jpg"
    ],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i3", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460", storage: "10 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 33, title: "Drive Beyond Horizons", category: "Racing", genre: "Open World Driving",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFVhluclKfnc3zdO3lGMnoe87C0N2ypPnS9Yi1dRWPH_qFBcgdp_24OK_&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZRIgoZCWMZJpmdlK7fKjAKSd2LPDC8TPe1UP2baf0bzAucE4Beq4G91z&s=10",
    rating: 4.6, year: 2025, developer: "Tacty Studio", publisher: "Santor Games",
    description: "Drive Beyond Horizons is an open-world driving adventure featuring procedurally generated landscapes, realistic vehicle physics, dynamic weather, car customization, and exploration across diverse environments.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qNsHCdBNc40r6MEqHE6oju6hRuwOV1oe11kzuOK011IaascZvPJ3oarB&s=10",
      "https://i.ytimg.com/vi/59-owljXa4U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBoe84J8AP215als9TEJcOXoWNWhg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbVpAAynHJ0UQ-YzBMwXCFsF_vYbhOKudR6afVLpZRMmTNiPrWqnplGYf&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 6 GB", storage: "15 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 34, title: "The Last of Us Part II Remastered", category: "Action", genre: "Action Adventure",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/94b5d8b3165a6fe592e406054b08a2dd24e2f848/capsule_616x353.jpg?t=1750959180",
    banner: "https://i.ytimg.com/vi/JKHQzeHmsms/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaTyURlseRl-Ewke31LJVwi3FHag",
    rating: 4.9, year: 2025, developer: "Naughty Dog LLC", publisher: "PlayStation Publishing LLC",
    description: "The Last of Us Part II Remastered delivers Ellie and Abby's emotional journey with enhanced graphics, improved performance, new gameplay modes including No Return, and expanded features for the definitive PC experience.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWu8b3V7sYlykBjNrnBYNDw2Ym7XTDqjxFzJw8QUDVpYN848J4JGGIJVk&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9-BEHK-bB-zHhv9PoTwIHW3M0io_mFG5F5bCepCddg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3N4ehPn94SeMLhdh_lLHsiDMgx9ZdhH92vdNWAhDBvUwv83lueutfcoiD&s=10"
    ],
    requirements: { os: "Windows 10/11 64-bit", cpu: "Intel Core i3-8100", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1650", storage: "150 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 35, title: "Farming Simulator 25", category: "Simulation", genre: "Farming Simulation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRJFezKsNo3umeAqexpe6AR7I1MUjBSoqHXhlJtRx1A&s",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShHDF6OuldVKnoj1XPN7BFJSASGFnqPuFHWTTNtLuIg&s=10",
    rating: 4.7, year: 2024, developer: "GIANTS Software", publisher: "GIANTS Software",
    description: "Farming Simulator 25 lets players build and manage their own farm with over 400 authentic machines, new crops, animals, dynamic weather, and cooperative multiplayer across beautiful open environments.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUIBUTArU_hdX-jeJJYHYtX1sNLJOpwX2sOCUGTS8uGwSSEljBaFaYiEy&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBe8V_KqUyiTEbX8Irx2vpSe5o6Mtssgl7431ETvLZH7C7Qt-MTK09H8h&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQqOQpNNeHiDQR4rcGI9z4ypSbWogIBd2xPTDi1_k7P595le749c8Iqo&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6400", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 Ti", storage: "45 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 36, title: "ARK: Survival Evolved - Ultimate Survivor Edition", category: "Action", genre: "Open World Survival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpySexuvUpPyAmXW6h8KgX7RCPP2OZQaL1IT0DNHxOmXVzpcTvrgHV84&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS329uWf4qXFUT5CP9DnrWkptUq8wXeFsERbJFHuMmKtgJZDANcXIFalZQr&s=10",
    rating: 4.7, year: 2021, developer: "Studio Wildcard", publisher: "Studio Wildcard",
    description: "ARK: Survival Evolved - Ultimate Survivor Edition includes the base game and all major expansion packs, challenging players to survive among dinosaurs, tame creatures, craft equipment, build massive bases, and explore vast open worlds.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AiBiMadEqNw7CrSqV3FDZ3Amtks2sft5Vd7gsqDoXCeK3vKTupe3Thg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1FRSVp4Yh1wkdRvF5kQrW7TwKJStU_f5VrKUO-HHBBP7ymBQduZkf1le&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU14El1zKZjh_LIbR9eUfPj4CIs66A6PsLlnW2vSaY_wkyfD-E_ROXa-g&s=10"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-2400", ram: "8 GB", gpu: "NVIDIA GeForce GTX 670 2 GB", storage: "120 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},
  {
    id: 1e4 + 37, title: "Red Dead Redemption", category: "Action", genre: "Open World Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj63urrR8y4-bZhw_QaB-LjVLsYVn81f6TS8zQP5ZqL2l0KxsIneUnsc&s=10",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsk5uEzJNC-cW2zPi3Fz03qMMvdtGwwru2GvqvQpDG6Q&s",
    rating: 4.9, year: 2024, developer: "Rockstar Games", publisher: "Rockstar Games",
    description: "Red Dead Redemption follows former outlaw John Marston on a journey across the American frontier as he hunts down members of his old gang in a story-driven open-world western adventure.",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNw7SEvBJ1T7tIVzcLgWTrvTEtOf1BfuuK1IpldQVkQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0WpadBwqyrNDElYwBC2RVg_oe5xxATKLEMkPAOOXWbwQNl_CAah_i9A&s=10",
      "https://images.g2a.com/uiadminimages/770x433/1x1x1/813224e2a2ec/e945a08bb9bf4d33874f608e"
    ],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4670", ram: "8 GB", gpu: "NVIDIA GeForce GTX 960", storage: "12 GB" },
    link: "#",
    featured: true, trending: true, popular: true
},

  
  
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
