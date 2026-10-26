import Link from "next/link";

const fieldClassName =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950";

export default function NewTicketPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header>
        <Link href="/tickets" className="text-sm font-medium text-teal-800">
          ← Επιστροφή στα αιτήματα
        </Link>
        <h1 className="mt-4 text-3xl font-semibold">Νέο αίτημα</h1>
        <p className="mt-2 text-slate-600">
          Κατέγραψε τι χρειάζεται να γίνει για τον επισκέπτη.
        </p>
      </header>

      <form className="space-y-5 rounded-xl border border-slate-200 bg-white p-6">
        <div>
          <label htmlFor="title" className="font-medium">
            Τίτλος αιτήματος
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            maxLength={200}
            placeholder="Για παράδειγμα: Επιπλέον πετσέτες στο δωμάτιο"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="description" className="font-medium">
            Περιγραφή
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            maxLength={10000}
            placeholder="Πρόσθεσε χρήσιμες λεπτομέρειες για την ομάδα."
            className={fieldClassName}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="priority" className="font-medium">
              Προτεραιότητα
            </label>
            <select
              id="priority"
              name="priority"
              defaultValue="NORMAL"
              className={fieldClassName}
            >
              <option value="LOW">Χαμηλή</option>
              <option value="NORMAL">Κανονική</option>
              <option value="HIGH">Υψηλή</option>
              <option value="URGENT">Επείγουσα</option>
            </select>
          </div>

          <div>
            <label htmlFor="dueAt" className="font-medium">
              Προθεσμία
            </label>
            <input
              id="dueAt"
              name="dueAt"
              type="datetime-local"
              className={fieldClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="source" className="font-medium">
            Πηγή αιτήματος
          </label>
          <select
            id="source"
            name="source"
            defaultValue="MANUAL"
            className={fieldClassName}
          >
            <option value="MANUAL">Προφορικά ή από εργαζόμενο</option>
            <option value="PHONE">Τηλέφωνο</option>
            <option value="EMAIL">Email</option>
            <option value="WHATSAPP">WhatsApp</option>
            <option value="OTHER">Άλλη πηγή</option>
          </select>
        </div>

        <div className="rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          Η φόρμα δεν αποθηκεύει ακόμη αιτήματα. Θα ενεργοποιηθεί όταν
          συνδέσουμε τη βάση δεδομένων.
        </div>

        <button
          type="button"
          disabled
          className="rounded-lg bg-teal-800 px-4 py-2 font-medium text-white opacity-50"
        >
          Αποθήκευση αιτήματος
        </button>
      </form>
    </div>
  );
}