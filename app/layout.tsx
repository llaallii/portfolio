import type { Metadata } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medical Systems Engineer | Innovation in Healthcare Technology",
  description: "Systems engineer specializing in medical product development, compliance, and innovation. Expertise in ISO 13485, risk management, and AI integration.",
  keywords: ["medical device engineer", "systems engineering", "ISO 13485", "medical technology", "healthcare innovation"],
  authors: [{ name: "Medical Systems Engineer" }],
  openGraph: {
    title: "Medical Systems Engineer Portfolio",
    description: "Engineering the Future of Medical Technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
