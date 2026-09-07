import { useState } from 'react'

export default function DateRangePicker({ onDateChange }) {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() - 30)
    return date.toISOString().split('T')[0]
  })

  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
  const [showDropdown, setShowDropdown] = useState(false)

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
    onDateChange(e.target.value, endDate)
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
    onDateChange(startDate, e.target.value)
  }

  const handleQuickSelect = (days) => {
    const newEnd = new Date()
    const newStart = new Date()
    newStart.setDate(newStart.getDate() - days)

    const startStr = newStart.toISOString().split('T')[0]
    const endStr = newEnd.toISOString().split('T')[0]

    setStartDate(startStr)
    setEndDate(endStr)
    onDateChange(startStr, endStr)
    setShowDropdown(false)
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="compact-date-picker">
      <button
        className="date-picker-toggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        📅 {formatDate(startDate)} - {formatDate(endDate)}
      </button>

      {showDropdown && (
        <div className="date-picker-dropdown">
          <div className="quick-filters-compact">
            <button className="quick-btn-compact" onClick={() => handleQuickSelect(7)}>7D</button>
            <button className="quick-btn-compact" onClick={() => handleQuickSelect(14)}>14D</button>
            <button className="quick-btn-compact" onClick={() => handleQuickSelect(30)}>30D</button>
            <button className="quick-btn-compact" onClick={() => handleQuickSelect(90)}>90D</button>
          </div>

          <div className="date-inputs-compact">
            <div className="date-group-compact">
              <label>From</label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="date-input-compact"
              />
            </div>
            <div className="date-group-compact">
              <label>To</label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="date-input-compact"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
