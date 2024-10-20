export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chacará Frazão",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Fotos",
      href: "/docs",
    },
    {
      label: "Preços",
      href: "/preço",
    },
    {
      label: "Dias Disponíveis",
      href: "/blog",
    },
    {
      label: "Sobre nos",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Perfil",
      href: "/profile",
    },
    {
      label: "Preços",
      href: "/dashboard",
    },
    {
      label: "Fotos",
      href: "/projects",
    },
    {
      label: "Calendario",
      href: "/calendar",
    },
    {
      label: "Configuração",
      href: "/settings",
    },
    {
      label: "Ajuda",
      href: "/help-feedback",
    },
    {
      label: "Registrar",
      href: "/logout",
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
