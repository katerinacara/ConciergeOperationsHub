import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concierge Operations Hub",
  description: "Οργάνωση αιτημάτων και εργασιών ξενοδοχείου",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="min-h-screen bg-slate-50 text-slate-950">
        <div className="min-h-screen md:flex">
          <aside className="border-b border-slate-200 bg-white px-5 py-6 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
            <Link href="/" className="text-lg font-bold text-teal-800">
              Concierge Hub
            </Link>
            <p className="mt-1 text-sm text-slate-500">
              Λειτουργίες ξενοδοχείου
            </p>

            <nav aria-label="Κύρια πλοήγηση" className="mt-8 space-y-2">
              <Link
                href="/"
                aria-current="page"
                className="block rounded-lg bg-teal-50 px-3 py-2 font-medium text-teal-900"
              >
                Επισκόπηση
              </Link>

              <Link
                href="/tickets"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                Αιτήματα
              </Link>

              <div className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-500">
                <span>Παράδοση βάρδιας</span>
                <span className="text-xs">Σύντομα</span>
              </div>

              <div className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-500">
                <span>Ομάδα</span>
                <span className="text-xs">Σύντομα</span>
              </div>
            </nav>
          </aside>

          <main className="min-w-0 flex-1 px-5 py-8 md:px-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}