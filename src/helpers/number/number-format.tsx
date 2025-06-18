export const StringNumberFormat = (value: string | number) => {
  try {
    if (!value) return '';

    const format = value
      .toString()
      .replace(/,/g, '.')
      .replace(/[^\d]/g, '')
    if (isNaN(Number(format))) return '0';

    return format;
  } catch (error) {
    return '';
  }
};

export const StringNumberFormatSpace = (value: string | number) => {
  try {
    if (!value) return '';

    const format = value
      .toString()
      .replace(/,/g, ' ')
      .replace(/[^\d]/g, '')
    if (isNaN(Number(format))) return '0';

    return format;
  } catch (error) {
    return '';
  }
}

export const StringNumberFloatFormatSpace = (value: string | number) => {
  try {
    if (!value) return '';
    let strInt = value.toString().split('.')[0]
    let strSurplus = value.toString().split('.')[1]
    const formatInt = strInt
      .toString()
      .replace(/,/g, ' ')
      .replace(/[^\d]/g, '')
    if(!strSurplus) 
      strSurplus = '00'
    const format = formatInt + `.${strSurplus}`
    if (isNaN(Number(format))) return '0';

    return format;
  } catch (error) {
    return '';
  }
}
