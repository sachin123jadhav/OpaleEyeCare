const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",   
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "About Us",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/team", title: "Team" },
     
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Service",
    link: "/#service",
    active: "",   
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Gallery",
    link: "/gallery",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Career",
    link: "/career",
    active: "",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
