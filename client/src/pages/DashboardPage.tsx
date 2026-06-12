import { Link } from "react-router-dom";
import { cases } from "../features/cases/caseData";
import { completedCases } from "../store/gameProgress";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Detective Dashboard
      </h1>

      <div className="grid gap-6">

        {cases.map((c) => {
          const progress = completedCases.find(
            (p) => p.id === c.id
          );

          return (
            <div
              key={c.id}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold">
                {c.title}
              </h2>

              <p className="text-slate-300 my-4">
                {c.description}
              </p>

              <p className="mb-4">
                {progress?.completed
                  ? "✅ Completed"
                  : "🔒 Locked"}
              </p>

              <Link
  to={`/case/${c.id}`}
  className="bg-blue-600 px-5 py-2 rounded-lg inline-block"
>
  Open Case
</Link>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default DashboardPage;