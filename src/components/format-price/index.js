function formatPrice(number){
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
   const formated = new Intl.NumberFormat('vi-VN', config).format(number);

   return formated;
 }

 export default formatPrice;