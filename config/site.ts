export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chacará Frazão",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Fotos",
      link: "/docs",
    },
    {
      label: "Preços",
      link: "/preço",
    },
    {
      label: "Dias Disponíveis",
      link: "/blog",
    },
    {
      label: "Sobre nos",
      link: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Perfil",
      link: "/profile",
    },
    {
      label: "Preços",
      link: "/dashboard",
    },
    {
      label: "Fotos",
      link: "/projects",
    },
    {
      label: "Calendario",
      link: "/calendar",
    },
    {
      label: "Configuração",
      link: "/settings",
    },
    {
      label: "Ajuda",
      link: "/help-feedback",
    },
    {
      label: "Registrar",
      link: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    instagram: "https://www.instagram.com/nextui_org/",
  },
};
