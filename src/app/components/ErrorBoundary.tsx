import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
          <div className="text-center max-w-md">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-destructive" size={28} />
            </div>
            <h1
              style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}
              className="text-foreground mb-3"
            >
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-8" style={{ fontSize: 15, lineHeight: 1.7 }}>
              An unexpected error occurred. Please try again or return to the home page.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <RefreshCw size={16} />
                Reload
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl font-semibold hover:bg-muted transition-colors text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
