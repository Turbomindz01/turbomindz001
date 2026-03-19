'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: Breadcrumb[];
}

const defaultBreadcrumbs: Record<string, Breadcrumb[]> = {
  '/gallery': [{ label: 'Gallery', href: '/gallery' }],
  '/story': [{ label: 'Story', href: '/story' }],
  '/about': [{ label: 'About', href: '/about' }],
  '/marketplace': [{ label: 'Marketplace', href: '/marketplace' }],
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbs = items || defaultBreadcrumbs[pathname] || [];

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="text-xs sm:text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-warm-white/60">
        {/* Home link */}
        <li>
          <Link href="/" className="hover:text-gold transition-colors duration-200">
            Home
          </Link>
        </li>

        {/* Breadcrumb items */}
        {breadcrumbs.map((breadcrumb, idx) => (
          <li key={breadcrumb.label} className="flex items-center gap-2">
            <span className="text-warm-white/30">/</span>
            {breadcrumb.href && idx < breadcrumbs.length - 1 ? (
              <Link href={breadcrumb.href} className="hover:text-gold transition-colors duration-200">
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="text-gold font-semibold">{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
