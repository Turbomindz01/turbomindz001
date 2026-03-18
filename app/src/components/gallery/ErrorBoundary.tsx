'use client';

import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen pt-24 section-padding">
            <div className="container-narrow text-center py-12">
              <h2 className="text-3xl font-heading font-bold text-warm-white mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-warm-white/60 mb-6">
                We encountered an error loading this page. Please try refreshing or contact support.
              </p>
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="px-6 py-3 rounded-lg bg-gold text-rich-black font-semibold hover:bg-gold/80 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
