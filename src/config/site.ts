export const siteConfig = {
  name: "Ratan Lal Bunkar",
  email: "ratanbunkar2@gmail.com",
  phone: "+886 0975010438",
  location: "Taoyuan City, Taiwan",
  description:
    "Full Stack Developer & ML Engineer specializing in web development and machine learning solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  links: {
    linkedin: "https://www.linkedin.com/in/ratanlalbunkar/",
    github: "https://github.com/ratanlalbunkar",
  },
  nav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Accomplishments",
      href: "/accomplishments",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
