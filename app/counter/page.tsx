'use client'
import { useState } from 'react'
import { BarChart3, Users, Bot, Mail } from 'lucide-react'

const Counter = () => {
  const [botsCount, setBotsCount] = useState(0)
  const [visitorsCount, setVisitorsCount] = useState(0)
  const [emailsCount, setEmailsCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  //const apiUrl = 'https://hono-api.pictusweb.com/api/stats/michaldovala'
  const apiUrl = 'http://localhost:3013/api/stats/michaldovala'

  const getStats = async () => {
    try {
      setIsLoading(true)
      setError('')
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch statistics')
      }
      
      const data = await response.json()
      setBotsCount(data.bots)
      setVisitorsCount(data.visitors)
      setEmailsCount(data.emails)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-6 lg:p-10 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 rounded-xl">
      <div className="max-w-2xl mx-auto h-screen">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-blue-900 mb-6 text-center">
          Website Statistics
        </h2>

        {/* Display Stats Button */}
        <button
          onClick={getStats}
          disabled={isLoading}
          className={`w-full p-4 mb-8 flex items-center justify-center gap-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
            isLoading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Loading Statistics...</span>
            </>
          ) : (
            <>
              <BarChart3 className="w-5 h-5" />
              <span className="text-3xl">Click to Display Stats</span>
            </>
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-center transition-opacity duration-200">
            {error}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
          {/* Bots Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-200 transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-medium text-blue-900">Bots</h3>
            </div>
            <p className="text-3xl font-bold text-blue-700">{botsCount}</p>
          </div>

          {/* Visitors Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-slate-600" />
              <h3 className="text-2xl font-medium text-slate-900"> Total Visitors </h3>
            </div>
            <p className="text-3xl font-bold text-slate-700">{visitorsCount}</p>
          </div>

          {/* Emails Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-6 h-6 text-gray-600" />
              <h3 className="text-2xl font-medium text-gray-900">Emails sent</h3>
            </div>
            <p className="text-3xl font-bold text-gray-700">{emailsCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter