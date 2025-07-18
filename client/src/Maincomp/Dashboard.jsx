import React from 'react'
import Sidebar from '../SideBars/Sidebar'

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Main dashboard content goes here */}
      </main>
    </div>
  )
}

export default Dashboard
