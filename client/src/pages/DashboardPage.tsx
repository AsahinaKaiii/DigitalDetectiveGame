import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Detective Dashboard
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">
          Case 001: The Data Breach
        </h2>

        <p className="text-slate-300 mb-6">
          Investigate a confidential company data leak and identify the culprit.
        </p>

        <Link
          to="/case/1"
          className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Open Case
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;