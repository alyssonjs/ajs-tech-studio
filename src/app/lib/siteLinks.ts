const env = import.meta.env;

export const siteLinks = {
  github: (env.VITE_GITHUB_URL as string) || "https://github.com",
  linkedin: (env.VITE_LINKEDIN_URL as string) || "https://linkedin.com",
  cv: (env.VITE_CV_URL as string) || "#",
  email: "contato@ajstechstudio.com",
  siteUrl: (env.VITE_SITE_URL as string) || "https://ajstechstudio.com",
} as const;

export const formspreeFormId = (env.VITE_FORMSPREE_FORM_ID as string) || "";
