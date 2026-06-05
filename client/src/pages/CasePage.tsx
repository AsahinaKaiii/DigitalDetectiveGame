function CasePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">
        Case 001: The Data Breach
      </h1>

      <p className="text-slate-300 mb-8">
        A confidential customer database has been leaked.
        Your task is to identify the responsible employee.
      </p>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-2">
          Investigation Status
        </h2>

        <p>Evidence Collected: 0/5</p>
        <p>Suspects Identified: 0/3</p>
      </div>
    </div>
  );
}

export default CasePage;