interface FooterLinkPartial {
  label: string;
  href: string;
  internal?: boolean;
  icon?: boolean;
}

interface FooterLink {
  label: string;
  links: FooterLinkPartial[];
}

export const footerData: FooterLink[] = [
  {
    label: "Länkar",
    links: [
      {
        label: "Träna",
        href: "/trana",
        internal: true,
      },
      {
        label: "Prislista",
        href: "/prislista",
        internal: true,
      },
      {
        label: "Vårt gym",
        href: "/vart-gym",
        internal: true,
      },
      {
        label: "100% Ren Hårdträning",
        href: "/renhardtraning",
        internal: true,
      },
    ],
  },
  {
    label: "Här finns vi",
    links: [
      {
        label: "Vindelgatan 25B, 504 65 Borås",
        href: "https://www.google.com/maps/place/Vindelgatan+25B,+504+65+Bor%C3%A5s/@57.7223841,12.9084363,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa75ae2fdef99:0xf54bf212959eeab1!8m2!3d57.7223813!4d12.9110112!16s%2Fg%2F11c5l34jbs?entry=ttu",
        internal: false,
        icon: true,
      },
      {
        label: "070-940 56 41",
        href: "tel:+46709405641",
      },
      {
        label: "info@karlalfredgym.se",
        href: "mailto:info@karlalfredgym.se",
      },
    ],
  },
];
