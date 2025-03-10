import { useState } from 'react'

function App() {
  const [selectedBikes, setSelectedBikes] = useState({
    bike1: null,
    bike2: null
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">MotoBenchmark</h1>
          <p className="mt-2 text-sm text-gray-700">Compare motorcycles side by side</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bike 1 Selection */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Select First Motorcycle</h2>
              <div className="space-y-4">
                {/* Bike selection dropdown will go here */}
                <p className="text-gray-500">Select a motorcycle to compare</p>
              </div>
            </div>

            {/* Bike 2 Selection */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Select Second Motorcycle</h2>
              <div className="space-y-4">
                {/* Bike selection dropdown will go here */}
                <p className="text-gray-500">Select a motorcycle to compare</p>
              </div>
            </div>
          </div>

          {/* Comparison Results */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Comparison Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Comparison metrics will go here */}
              <p className="text-gray-500">Select two motorcycles to see the comparison</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App 