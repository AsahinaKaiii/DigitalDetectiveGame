import { useState } from "react";
import { Link } from "react-router-dom";

function CasePage() {
  const [collectedClues, setCollectedClues] = useState<string[]>([]);
  const [selectedSuspect, setSelectedSuspect] = useState("");
 const [caseSolved, setCaseSolved] = useState(() => {
  return localStorage.getItem("caseSolved") === "true";
});
  const [gameResult, setGameResult] = useState("");

  const collectEvidence = (clueId: string) => {
    if (!collectedClues.includes(clueId)) {
      setCollectedClues([...collectedClues, clueId]);
    }
  };

  const accuseSuspect = () => {
    if (selectedSuspect === "Michael Smith") {
      setGameResult(
        "Correct! Michael Smith was responsible for the data breach."
      );
      setCaseSolved(true);
      localStorage.setItem("caseSolved", "true");
    } else {
      setGameResult(
        `Incorrect! ${selectedSuspect} is not responsible for the breach.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="mb-6">
        <Link
          to="/dashboard"
          className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-4">
        Case 001: The Data Breach
      </h1>

      <p className="text-slate-300 mb-8">
        A confidential customer database has been leaked.
        Your task is to identify the responsible employee.
      </p>

      {caseSolved && (
        <div className="bg-green-700 p-4 rounded-xl mb-6">
          <h2 className="text-2xl font-bold">
            🎉 Case Solved!
          </h2>

          <p>
            You successfully identified the culprit and closed the investigation.
          </p>
        </div>
      )}

      <div className="bg-slate-800 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Investigation Status
        </h2>

        <p>Evidence Collected: {collectedClues.length}/5</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Evidence Board
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <button
            onClick={() => collectEvidence("clue1")}
            className="bg-slate-700 p-4 rounded-lg text-left hover:bg-slate-600"
          >
            <h3 className="font-bold">
              Clue #1 {collectedClues.includes("clue1") && "✓"}
            </h3>
            <p>Suspicious login detected at 02:13 AM.</p>
          </button>

          <button
            onClick={() => collectEvidence("clue2")}
            className="bg-slate-700 p-4 rounded-lg text-left hover:bg-slate-600"
          >
            <h3 className="font-bold">
              Clue #2 {collectedClues.includes("clue2") && "✓"}
            </h3>
            <p>USB device connected to secure server.</p>
          </button>

        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Suspects
        </h2>

        {collectedClues.length >= 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div
              onClick={() => setSelectedSuspect("Sarah Johnson")}
              className="bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600"
            >
              <h3 className="font-bold text-lg">
                Sarah Johnson
              </h3>
              <p>Database Administrator</p>
            </div>

            <div
              onClick={() => setSelectedSuspect("Michael Smith")}
              className="bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600"
            >
              <h3 className="font-bold text-lg">
                Michael Smith
              </h3>
              <p>IT Technician</p>
            </div>

            <div
              onClick={() => setSelectedSuspect("Emily Davis")}
              className="bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600"
            >
              <h3 className="font-bold text-lg">
                Emily Davis
              </h3>
              <p>Security Analyst</p>
            </div>

          </div>
        ) : (
          <p className="text-slate-400">
            Collect more evidence to reveal suspects.
          </p>
        )}
      </div>

      {selectedSuspect && (
        <div className="bg-slate-800 p-6 rounded-xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Suspect Profile
          </h2>

          <p className="mb-4">
            Selected Suspect: {selectedSuspect}
          </p>

          <button
            onClick={accuseSuspect}
            className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-500"
          >
            Accuse Suspect
          </button>
        </div>
      )}

      {gameResult && (
        <div className="bg-slate-800 p-6 rounded-xl mt-6">
          <h2 className="text-2xl font-bold mb-2">
            Investigation Result
          </h2>

          <p>{gameResult}</p>
        </div>
      )}

      <div className="mt-8">
        <Link
          to="/dashboard"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          Return to Dashboard
        </Link>
      </div>

    </div>
  );
}

export default CasePage;