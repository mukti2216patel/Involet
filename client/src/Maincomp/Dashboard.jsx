import React from 'react'
import Sidebar from '../SideBars/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>   
    </div>
  )
}

export default Dashboard
