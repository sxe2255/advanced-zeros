module.exports = function getZerosCount(number, base) {
    let num = base;
    result = number;
    for (let i = 2; i <= base; i++) {
      if (num % i === 0) {
        let factorization = 0;
        while (num % i === 0) {
           num = num / i;     
           factorization++;
          }
        let c = 0;
        let z = Math.floor(number / i);
        while (z > 0) {
          c += z;
          z = Math.floor(z / i);
        }
        result = Math.min(result, Math.floor(c / factorization))
      }
    }
    return result;
  }