export const getToday = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

export const getTodayDelayed = () => {
    // will delay 12 days for mars NASA DB response to return data
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 13)
    const year = yesterday.getFullYear()
    const month = String(yesterday.getMonth() + 1).padStart(2, "0")
    const day = String(yesterday.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
}