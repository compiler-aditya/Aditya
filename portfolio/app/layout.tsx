import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "Aditya Dev Singh | Full Stack Developer & AI/ML Enthusiast",
  description: "Personal portfolio of Aditya Dev Singh - Full Stack Developer specializing in web development, AI/ML, and geospatial technologies. Explore my projects, skills, and experience.",
  keywords: "Aditya Dev Singh, Full Stack Developer, AI, Machine Learning, Web Development, React, Next.js, Python, Portfolio",
  authors: [{ name: "Aditya Dev Singh" }],
  creator: "Aditya Dev Singh",
  publisher: "Aditya Dev Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/AbhiS6699",
    title: "Aditya Dev Singh | Full Stack Developer & AI/ML Enthusiast",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and AI/ML",
    siteName: "Aditya Dev Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Dev Singh | Full Stack Developer & AI/ML Enthusiast",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and AI/ML",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
