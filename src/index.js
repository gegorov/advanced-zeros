module.exports = function getZerosCount(number, base) {
  // your implementation
  const NUMBER = number;
  const isPrime = num => !(Array(num + 1).join(1).match(/^1?$|^(11+?)\1+$/));

  const basePrimeFactorSearch = num => [...Array((num + 1))]
    .map((_, i) => i)
    .filter(i => isPrime(i) && num % i === 0);

  // const basePrimeFactorSearch = (num) => {
  //   const myArr = [];
  //   for (let i = 0; i <= num; i += 1) {
  //     if (isPrime(i) && num % i === 0) {
  //       myArr.push(i);
  //     }
  //   }
  //   console.log(myArr);
  //   return myArr;
  // };

  const limitPrimeExpSearch = (prime) => {
    const startfactor = 1;
    const startNum = 0;
    const sumOfSeries = 0;
    const iter = (factor, total) => {
      const newNum = prime ** factor;
      if (newNum > NUMBER) {
        return total;
      }
      const newTotal = total + Math.floor(NUMBER / newNum);
      return iter(factor + 1, newTotal);
    };
    return iter(startfactor, startNum, sumOfSeries);
  };

  const reducer = (acc, el) => {
    let power = 0;
    let tmp = base;
    while (tmp % el === 0) {
      tmp /= el;
      power += 1;
    }
    acc[el] = power;
    return acc;
  };

  const basePrimeFactors = basePrimeFactorSearch(base);
//  console.log(`basePrimeFactors: ${basePrimeFactors}`);
  
  const baseFactorPowers = basePrimeFactorSearch(base).reduce(reducer, {});
//  console.log(`baseFactorPowers:`);
//  console.log(baseFactorPowers);
  const result = basePrimeFactors.map((prime) => {
    const limit = limitPrimeExpSearch(prime);
    const power = baseFactorPowers[prime];
//    console.log(`prime: ${prime}, limit: ${limit}, power: ${power}`);
    return Math.floor(limit / power);
  });

//  console.log(Math.min(...result));


  return Math.min(...result);
};

//getZerosCount(70497638, 2)
