import Link from "next/link";
export default function TicketsPage() {
    return (
      <div className="mx-auto max-w-5xl space-y-8">
        <header>
          <p className="text-sm font-medium text-teal-700">
            ΟΡΓΑΝΩΣΗ ΕΡΓΑΣΙΑΣ
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Αιτήματα</h1>
          <p className="mt-2 text-slate-600">
            Παρακολούθησε τα αιτήματα και τις εργασίες της ομάδας.
          </p>
        </header>
  
        <section className="rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Όλα τα αιτήματα</h2>
              <p className="mt-1 text-sm text-slate-600">
                Εδώ θα εμφανίζεται η λίστα των αιτημάτων.
              </p>
            </div>
  
            <Link
                href="/tickets/new"
                className="inline-block rounded-lg bg-teal-800 px-4 py-2 text-sm font-medium text-white hover:bg-teal-900"
            >
                Νέο αίτημα
            </Link>
          </div>
  
          <div className="px-6 py-12 text-center">
            <h3 className="font-medium">Δεν υπάρχουν ακόμη αιτήματα</h3>
            <p className="mt-2 text-sm text-slate-600">
              Η λίστα θα εμφανίσει πραγματικά αιτήματα όταν συνδέσουμε τη βάση
              δεδομένων.
            </p>
          </div>
        </section>
      </div>
    );
  }
