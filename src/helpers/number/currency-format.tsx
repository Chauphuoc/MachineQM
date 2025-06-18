export const CurrencyFormat = (price?: number | string) => {
  if (price == null || price === undefined) return '';
  try {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  } catch (error) {
    return '';
  }
};

// hàm chuyển số => string với làm tròn số thập phân theo fixed: 123.23
export const CurrencyFormatFloat = (price?: number | string, fixed?: number) => {
  if (price == null || price === undefined) return '';
  let strNum = parseFloat(price.toString()).toFixed(fixed)
    let strInt = CurrencyFormat(strNum.split('.')[0])
    let strSurplus = strNum.split('.')[1]
  if(fixed != 0){
    if(!strSurplus)
      strSurplus = '00'
    return strInt + `.${strSurplus}`
  }
  return price ? strInt : '0'
}
