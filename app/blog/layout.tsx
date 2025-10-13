import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MedTech Engineering Blog | Technical Insights & Case Studies",
  description:
    "Technical articles on medical device development, V&V methodologies, regulatory compliance (ISO 13485, ISO 14971), and systems engineering best practices.",
  keywords: [
    "medical device engineering",
    "V&V",
    "ISO 13485",
    "ISO 14971",
    "test automation",
    "systems engineering",
    "BLE",
    "Python automation",
    "regulatory compliance",
  ].join(", "),
  openGraph: {
    title: "MedTech Engineering Blog",
    description:
      "Technical insights on medical device development, V&V, and regulatory compliance",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
