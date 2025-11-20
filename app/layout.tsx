import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IM-All Stars - JEE Mains 2026 Physics Flagship',
  description: '20 intense problem-solving sessions, mock tests, and ranker mentorship designed to push you towards 100/100 in JEE Mains Physics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}

