/**
 * Parses a date string into a Date object.
 * Supports "DD/MM/YY" format and standard date strings.
 * @param dateString The date string to parse.
 * @returns A Date object representing the date.
 */
export const parseBlogDate = (dateString: string): Date => {
  if (dateString.includes('/')) {
    const [day, month, year] = dateString.split('/')
    if (day && month && year) {
      const yearInt = parseInt(year)
      const fullYear = yearInt < 70 ? 2000 + yearInt : 1900 + yearInt
      return new Date(fullYear, parseInt(month) - 1, parseInt(day))
    }
  }
  return new Date(dateString)
}

/**
 * Formats a date string into "DD/MM/YY" format.
 * @param dateString The date string to format.
 * @returns A formatted date string in "DD/MM/YY" format.
 */
export const formatBlogDate = (dateString: string): string => {
  if (!dateString) return ''
  
  // If it's already in DD/MM/YY format, just ensure it's padded.
  if (dateString.includes('/')) {
    const [day, month, year] = dateString.split('/')
    if (day && month && year) {
      return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year.slice(-2)}`
    }
  }
  
  // Otherwise, parse it and format it.
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  return `${day}/${month}/${year}`
}
