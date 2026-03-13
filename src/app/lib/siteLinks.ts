const env = import.meta.env;

export const siteLinks = {
  github: (env.VITE_GITHUB_URL as string) || "https://github.com/alyssonjs",
  linkedin: (env.VITE_LINKEDIN_URL as string) || "https://linkedin.com",
  cv: (env.VITE_CV_URL as string) || "#",
  email: (env.VITE_CONTACT_EMAIL as string) || "alysson.soares@hotmail.com.br",
  phone: (env.VITE_CONTACT_PHONE as string) || "+55 81 9 9835-3046",
  siteUrl: (env.VITE_SITE_URL as string) || "https://ajstechstudio.com",
} as const;

export const formspreeFormId = (env.VITE_FORMSPREE_FORM_ID as string) || "";
