import facebook from "assets/images/icons/facebook.png";
import instagram from "assets/images/icons/instagram.png";
import github from "assets/images/icons/github.png";
import whatsapp from "assets/images/icons/whatsapp.png";

export const menuItems = [
  {
    id: 2,
    title: "Colaboradores",
    items: [
      {
        href: "https://www.storyset.com/",
        target: "_blank",
        label: "Imagenes",
      },
      {
        href: "https://www.freepik.es/",
        target: "_blank",
        label: "Recursos",
      },
      {
        href: "https://www.flaticon.com/",
        target: "_blank",
        label: "Iconos",
      },
    ],
  },
  {
    id: 3,
    title: "",
    items: [],
  },
  {
    id: 4,
    title: "Contáctanos",
    items: [
      {
        href: "https://api.whatsapp.com/send?phone=573113121361&text=",
        target: "_blank",
        icon: whatsapp,
        label: "(+57) 311 312 13 61",
      },
      {
        href: "https://api.whatsapp.com/send?phone=573113121361&text=",
        target: "_blank",
        label: "Solicito.software@gmail.com Medellín - Colombia",
      },
    ],
  },
  {
    id: 5,
    title: "Redes Sociales",
    items: [
      {
        path: "#!",
        icon: facebook,
        label: "Facebook",
      },
      {
        path: "#!",
        icon: instagram,
        label: "Instagram",
      },
      {
        path: "#!",
        icon: github,
        label: "Github",
      },
    ],
  },
];
