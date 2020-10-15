function toArray(date: string): number[] {
  const ymd: number[] = date.split('-').map( n => +n );
  if (ymd.length !== 3) throw new Error(`Date format YYYY-MM-DD (${date})`);
  ymd[1]--;
  return ymd;
}

export function isUpcoming(date: string) {
  // @ts-ignore
  return ( new Date( ...toArray(date) ) ) > ( new Date() );
}

export function timeLeft(delta = 0) {
  let seconds = Math.round(delta / 1000);

  const MIN = 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;

  const days = Math.floor (seconds / DAY);
  seconds -= days * DAY;

  const hours = Math.floor (seconds / HOUR) % 24;
  seconds -= hours * HOUR;

  const minutes = Math.floor (seconds / MIN) % 60;
  seconds -= minutes * MIN;

  return { days, hours, minutes, seconds };
}

export function nextDow(day: number = 0) {
  const time = new Date();
  const offset = (day - time.getDay()) * 86400000;
  return new Date( time.getTime() + offset );
}

export function toDate (date: string, time = '00:00:00') {
  const hms: number[] = time.split(':').map( n => +n );
  if (hms.length !== 3) throw new Error(`Time format HH:MM:SS (${time})`);

  // @ts-ignore
  return new Date( ...toArray(date), ...hms );
}

export function toYMD (date = new Date()) {
  return date.getFullYear() + '-' +
     (date.getMonth() + 1).toString().padStart(2, '0') + '-' +
     date.getDate();
}

export function toPrettyDate(ymd: string, hms = '00:00:00') {
  return toDate(ymd, hms).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    hour12: true
  });
}
