export function formatDate(date: Date, locale: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: locale === 'en',
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
}

export function formatTime(date: Date, locale: string): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: locale === 'en',
  };

  let formattedTime = new Intl.DateTimeFormat(locale, options).format(date);

  if (options.hour12) {
    formattedTime = formattedTime.replace(/^(\d):/, '0$1:');
  }

  return formattedTime;
}

export function formatDateTime(date: Date, locale: string): string {
  var dateFormated = formatDate(date, locale);
  var timeFormated = formatTime(date, locale);
  return `${dateFormated} ${timeFormated}`;
}
