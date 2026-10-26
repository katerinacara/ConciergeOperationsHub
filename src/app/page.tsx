export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header>
        <p className="text-sm font-medium text-teal-700">ΞΕΝΟΔΟΧΕΙΑΚΕΣ ΛΕΙΤΟΥΡΓΙΕΣ</p>
        <h1 className="mt-2 text-3xl font-semibold">Επισκόπηση</h1>
        <p className="mt-2 text-slate-600">
          Δες τι χρειάζεται προσοχή στην ομάδα σου.
        </p>
      </header>

      <section
        aria-label="Σύνοψη αιτημάτων"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {["Ανοιχτά αιτήματα", "Καθυστερημένα", "Σε αναμονή"].map((title) => (
          <article
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="font-medium text-slate-700">{title}</h2>
            <p className="mt-4 text-3xl font-semibold text-slate-400">—</p>
            <p className="mt-2 text-sm text-slate-500">
              Θα εμφανιστούν όταν συνδέσουμε τη βάση δεδομένων.
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Πρόσφατα αιτήματα</h2>
        <p className="mt-3 text-slate-600">
          Δεν υπάρχουν ακόμη συνδεδεμένα δεδομένα αιτημάτων.
        </p>
      </section>
    </div>
  );
}