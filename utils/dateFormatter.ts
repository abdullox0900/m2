/**
 * Format date string to Russian format: "01 марта 2025 г."
 * @param dateString - ISO date string or null
 * @returns Formatted date string or empty string if dateString is null
 */
export function formatDate(dateString: string | null): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year} г.`
}

