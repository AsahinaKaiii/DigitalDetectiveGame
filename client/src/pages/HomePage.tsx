import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        Digital Detective Game
      </h1>

      <p className="text-xl text-slate-300">
        Case 001: The Data Breach
      </p>

      <Link
        to="/dashboard"
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Start Investigation
      </Link>
    </div>
  );
}

export default HomePage;