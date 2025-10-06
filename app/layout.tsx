import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Inventory Management System",
  description: "Next.js + Express + MySQL CRUD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-700 text-white p-4">
          <nav className="flex gap-6">
            <Link href="/inventory" className="hover:underline">Inventory</Link>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
