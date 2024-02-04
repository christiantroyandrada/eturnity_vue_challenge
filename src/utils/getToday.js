const options = {
  // Will use US timezone because API returns error here in 
  // PH morning since there is still no data
  timeZone: 'America/Los_Angeles'
}

export const getToday = () => {
    const today = new Date()
    const todayWithTimeZone = today.toLocaleDateString('en-US', options)
    const [month, day, year] = todayWithTimeZone.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

export const getTodayDelayed = () => {
    // will delay 15 days for mars NASA DB response to return data
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 16)
    const year = yesterday.getFullYear()
    const month = String(yesterday.getMonth() + 1).padStart(2, "0")
    const day = String(yesterday.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

export const getTodayOpportunity = "2018-06-01"

export const getTodaySpirit = "2010-03-21"
