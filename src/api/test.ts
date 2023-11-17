const mockCardsData = [
  {
    _id: "6206468758ec74b289e4c9c3",
    index: 0,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-1.jpg",
    age: 38,
    name: "Gilmore Webster",
    email: "gilmorewebster@sarasonic.com",
    phone: "+1 (916) 534-2873",
    about:
      "Duis do deserunt qui qui pariatur cupidatat voluptate. Consectetur dolore Lorem culpa exercitation fugiat irure cupidatat voluptate tempor proident ad aliquip. Quis nisi officia tempor amet eiusmod laborum non nostrud esse culpa dolore culpa reprehenderit. Ullamco magna reprehenderit veniam enim nostrud et velit nulla labore officia velit cillum. Et qui ullamco minim officia cillum culpa in voluptate.\r\n",
  },
  {
    _id: "62064687bd0cc0e8227053b7",
    index: 1,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-2.jpg",
    age: 27,
    name: "Powers Herrera",
    email: "powersherrera@sarasonic.com",
    phone: "+1 (901) 511-3646",
    about:
      "Eu amet culpa Lorem et eiusmod exercitation elit adipisicing qui fugiat anim minim ex nulla. Incididunt laboris eu ipsum labore et irure et laborum Lorem occaecat. Consequat ipsum nisi amet enim mollit nulla esse consequat. Do velit aliquip culpa sit ut velit non velit nostrud eiusmod duis nostrud voluptate.\r\n",
  },
  {
    _id: "620646879547d1290ad0e6d0",
    index: 2,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-3.jpg",
    age: 34,
    name: "Flowers Valenzuela",
    email: "flowersvalenzuela@sarasonic.com",
    phone: "+1 (935) 592-3500",
    about:
      "Ad ea excepteur exercitation pariatur cillum occaecat amet tempor eu ad qui. Non adipisicing quis irure veniam sint est enim sit deserunt non id. Ex adipisicing laborum dolore velit elit incididunt cillum consequat non. Veniam do minim deserunt nisi irure veniam ipsum minim sit magna ullamco incididunt. Non nostrud amet ullamco Lorem minim irure quis anim ad proident. Nulla elit nisi cupidatat magna et cillum proident Lorem sint sunt. Aute eu cillum consequat do magna do nulla culpa est ad.\r\n",
  },
  {
    _id: "620646873db146d923d23c33",
    index: 3,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-4.jpg",
    age: 27,
    name: "Roth Slater",
    email: "rothslater@sarasonic.com",
    phone: "+1 (972) 508-2418",
    about:
      "Sunt nulla aliquip reprehenderit eiusmod dolore magna elit sit magna adipisicing. Nisi reprehenderit esse fugiat ipsum laborum ad anim qui aliquip adipisicing irure deserunt eiusmod pariatur. Minim nisi culpa ad aute nisi ad incididunt nostrud.\r\n",
  },
  {
    _id: "62064687c2a0777f6d0265f3",
    index: 4,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-5.jpg",
    age: 26,
    name: "Dolores Sweeney",
    email: "doloressweeney@sarasonic.com",
    phone: "+1 (953) 424-2977",
    about:
      "Ea aliquip nisi adipisicing tempor sit magna exercitation veniam aliqua quis enim labore pariatur. Ex tempor esse do ullamco elit. Nisi laborum excepteur exercitation pariatur. Anim amet sunt consectetur anim sunt. Enim ut cillum enim eu laboris anim magna amet pariatur cupidatat non cillum. Proident duis proident esse excepteur esse veniam pariatur officia aute nisi.\r\n",
  },
  {
    _id: "62064687c2a0777f6d1264f3",
    index: 5,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-6.jpg",
    age: 25,
    name: "William William",
    email: "williamwilliam@sarasonic.com",
    phone: "+1 (953) 424-0000",
    about:
      "Est. Lorem in cras amet augue sed et nec mattis luctus sed libero, et mauris et. Imperdiet justo sit ultricies. Nulla nec vitae faucibus. Sed interdum et ex. Lacinia nunc molestie ornare eget tempus ipsum nulla in eget vel dapibus in molestie vel sapien sodales sit non dictum cursus et ornare integer vestibulum et. Ut. Vitae cursus ornare mattis hac nisi nisi dapibus ornare faucibus. Nulla ex. Consectetur quis, integer amet velit et dictum. In arcu non luctus in adipiscing sed mattis dictum lacinia non leo, est. Ipsum tortor, consectetur eleifend ultricies..\r\n",
  },
  {
    _id: "12064087c2a0666f6d1264f3",
    index: 6,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-7.jpg",
    age: 20,
    name: "Charley Charley",
    email: "charleycharley@sarasonic.com",
    phone: "+1 (938) 378-2238",
    about:
      "Cursus nisi integer et dictumst. Platea nunc molestie quis, dictum. Non et et luctus amet hac sit non dictum. Mattis morbi cursus et.\r\n",
  },
  {
    _id: "63064687c2a000f6d1d24f3",
    index: 7,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-8.jpg",
    age: 23,
    name: "George George",
    email: "georgegeorge@sarasonic.com",
    phone: "+1 (955) 555-5555",
    about:
      "Dui mollis non sed urna in venenatis velit dictum morbi dictumst. Cursus aenean ut. Lacinia arcu lacinia arcu non et morbi orci, vestibulum platea arcu mauris dolor urna amet, dapibus cras venenatis nisi mattis velit et. Lacinia ultricies. Nec dictum.\r\n",
  },
  {
    _id: "6316468712a000d6d1d33f2",
    index: 8,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-9.jpg",
    age: 25,
    name: "Noah Noah",
    email: "noahnoah@sarasonic.com",
    phone: "+1 (902) 322-2122",
    about:
      "Hac amet, ut. Lacinia ornare lectus molestie amet, tortor, cursus dolor sit libero, vulputate amet mauris accumsan sed mattis non in non vel nunc imperdiet cras et non mattis ex. Amet, augue cras integer non amet odio. Vel efficitur nulla pellentesque orci, mauris vulputate lorem imperdiet est. Luctus aenean nunc elit. Justo vulputate sapien ut.\r\n",
  },
  {
    _id: "1316468712a123a6d1d31x2",
    index: 9,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-10.jpg",
    age: 28,
    name: "Jacob Jacob",
    email: "jacobjacob@sarasonic.com",
    phone: "+1 (937) 937-0000",
    about:
      "Aenean risus ex. Sed ornare libero, pellentesque platea cursus nisi dictum platea lacinia dapibus ex. Ultricies. Dictum. Sed non tortor, sit non cras ut. Mattis elit. \r\n",
  },
  {
    _id: "1316468712a123a6d1d31x2",
    index: 10,
    picture: "https://layout.solvintech.ru/nuxt/api/images/original-11.jpg",
    age: 25,
    name: "Daniel Daniel",
    email: "danieldaniel@sarasonic.com",
    phone: "+1 (940) 000-0000",
    about:
      "Augue leo, amet, eget sit nulla morbi id risus non elit. Amet, ut. Eleifend amet, dictumst. Tortor, hac justo imperdiet dapibus odio. Ex. Habitasse ipsum non nulla vitae augue elit. Augue mattis ex. Dapibus elit. Faucibus. Risus vitae libero, accumsan nunc dictum leo, consectetur in arcu eget odio. \r\n",
  },
];

export default mockCardsData;
