import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      <Helmet>
        <title>Page not found | AJS Tech Studio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center max-w-md">
        <p className="text-primary mb-2" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Error 404
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.2, letterSpacing: "-0.02em" }} className="text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8" style={{ fontSize: 16, lineHeight: 1.7 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          style={{ fontSize: 15 }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
