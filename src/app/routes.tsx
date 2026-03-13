import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RouterErrorFallback } from "./components/RouterErrorFallback";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RouterErrorFallback />,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: ProjectDetailPage },
      { path: "services", Component: ServicesPage },
      { path: "experience", Component: ExperiencePage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
