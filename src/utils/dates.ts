import dayjs from 'dayjs';

export function formateDate(date: string) {
  return dayjs(date).format('MM/DD/YYYY HH:mm');
}
