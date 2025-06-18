import moment from 'moment';

export const DATE_FORMAT_VIEW = 'DD/MM/YYYY';
export const DATE_FORMAT_DATA = 'YYYY-MM-DD';

export const FormatShowDate = (date?: string, format?: string) => {
  if (!date) {
    return '';
  }
  try {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format(
      format ?? 'DD/MM/YYYY HH:mm:ss',
    );
  } catch (error) {
    return date;
  }
};

export const FormatSumitDate = (date: string, format?: string) => {
  if (!date) {
    return '';
  }
  try {
    return moment(date, 'DD/MM/YYYY HH:mm:ss').format(
      format ?? 'YYYY-MM-DD HH:mm:ss',
    );
  } catch (error) {
    return date;
  }
};
