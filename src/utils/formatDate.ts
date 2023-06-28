import { default as dayjs } from 'dayjs';

const formatDate = (time?: string | number | Date) => {
  if (!time) {
    return '';
  }

  const formattedDate = dayjs(time).format('MM/DD/YYYY, h:mm A');
  return formattedDate;
};

export default formatDate;