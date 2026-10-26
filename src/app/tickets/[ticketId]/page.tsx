import Link from "next/link";

export default function TicketDetailsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <Link href="/tickets" className="text-sm font-medium text-teal-800">
        ← Επιστροφή στα αιτήματα
      </Link>

      <header>
        <p className="text-sm font-medium text-teal-700">
          ΛΕΠΤΟΜΕΡΕΙΕΣ ΑΙΤΗΜΑΤΟΣ
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Αίτημα</h1>
      </header>

      <div className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        Αυτή είναι η διάταξη της σελίδας. Δεν έχει επιλεγεί αποθηκευμένο
        αίτημα και δεν εμφανίζονται πραγματικά δεδομένα.
      </div>

      <section
        aria-label="Στοιχεία αιτήματος"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {["Κατάσταση", "Προτεραιότητα", "Προθεσμία"].map((title) => (
          <article
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="font-medium text-slate-700">{title}</h2>
            <p className="mt-3 text-slate-400">—</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Εσωτερικές σημειώσεις</h2>
        <p className="mt-2 text-slate-600">
          Οι σημειώσεις της ομάδας θα εμφανίζονται εδώ.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Ιστορικό ενεργειών</h2>
        <p className="mt-2 text-slate-600">
          Οι αλλαγές κατάστασης και ανάθεσης θα εμφανίζονται εδώ.
        </p>
      </section>
    </div>
  );
}