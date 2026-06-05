import { useState } from "react";

function CasePage() {
  const [collectedClues, setCollectedClues] = useState<string[]>([]);
  const [selectedSuspect, setSelectedSuspect] = useState("");
  const [caseSolved, setCaseSolved] = useState(false);
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
    } else {
      setGameResult(
        `Incorrect! ${selectedSuspect} is not responsible for the breach.`
      );
    }
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

          {selectedSuspect === "Sarah Johnson" && (
            <div>
              <h3 className="text-xl font-bold mb-2">
                Sarah Johnson
              </h3>

              <p>Role: Database Administrator</p>
              <p>
                Alibi: Claims she was performing overnight database maintenance.
              </p>
              <p>Access Level: Full database access.</p>
            </div>
          )}

          {selectedSuspect === "Michael Smith" && (
            <div>
              <h3 className="text-xl font-bold mb-2">
                Michael Smith
              </h3>

              <p>Role: IT Technician</p>
              <p>
                Alibi: Says he was repairing network equipment.
              </p>
              <p>Access Level: Server room access.</p>
            </div>
          )}

          {selectedSuspect === "Emily Davis" && (
            <div>
              <h3 className="text-xl font-bold mb-2">
                Emily Davis
              </h3>

              <p>Role: Security Analyst</p>
              <p>
                Alibi: Reviewing security logs during the incident.
              </p>
              <p>Access Level: Security monitoring systems.</p>
            </div>
          )}

          <button
            onClick={accuseSuspect}
            className="mt-4 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-500"
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
    </div>
  );
}

export default CasePage;