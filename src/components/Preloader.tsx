import { useState, useEffect } from "react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 second preloader

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="flex flex-col items-center">
        <div className="preloader-logo"></div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gradient mb-2">Ryan Waweru</h2>
          <p className="text-muted-foreground">Loading amazing content...</p>
        </div>
      </div>
    </div>
  )
}