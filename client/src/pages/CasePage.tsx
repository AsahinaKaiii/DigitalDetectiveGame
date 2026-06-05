import { useState } from "react";

function CasePage() {
  const [evidenceCount, setEvidenceCount] = useState(0);

  const collectEvidence = () => {
    setEvidenceCount(evidenceCount + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">
        Case 001: The Data Breach
      </h1>

      <p className="text-slate-300 mb-8">
        A confidential customer database has been leaked.
        Your task is to identify the responsible employee.
      </p>

      <div className="bg-slate-800 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Investigation Status
        </h2>

        <p>Evidence Collected: {evidenceCount}/5</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Evidence Board
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <button
            onClick={collectEvidence}
            className="bg-slate-700 p-4 rounded-lg text-left hover:bg-slate-600"
          >
            <h3 className="font-bold">Clue #1</h3>
            <p>Suspicious login detected at 02:13 AM.</p>
          </button>

          <button
            onClick={collectEvidence}
            className="bg-slate-700 p-4 rounded-lg text-left hover:bg-slate-600"
          >
            <h3 className="font-bold">Clue #2</h3>
            <p>USB device connected to secure server.</p>
          </button>

        </div>
      </div>
    </div>
  );
}

export default CasePage;