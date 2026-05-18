      //////121. Best Time to Buy and Sell Stock

      let prices = [7, 1, 5, 3, 6, 4];
      // prices = [7,6,4,3,1]
      // prices = [2, 4, 1]
      var maxProfit = function (prices) {
          let minPrice = Infinity;
          let maxProfit = 0;

          for (let price of prices) {
              if (price < minPrice) {
                  minPrice = price
              } else if (price - minPrice > maxProfit) {

                  maxProfit = price - minPrice;
              }

          }
          return maxProfit;
      };
      // console.log(maxProfit(prices));

      ////////12. Integer to Roman 
      let num = 3749
      // num = 3500;
      // num=58
      num = 1
      var intToRoman = function (num) {
          let result = '';

          if (num >= 1000) {
              let add = Math.floor(num / 1000);
              num = num - add * 1000;
              for (let i = 1; i <= add; i++) result += 'M';


          }
          if (num >= 900) { num = num - 900; result += 'CM' }

          if (num >= 500) {
              num = num - 500;
              result += 'D';

          }
          if (num >= 400) { num = num - 400; result += 'CD' }
          if (num >= 100) {
              let add = Math.floor(num / 100);
              num = num - add * 100;
              for (let i = 1; i <= add; i++) result += 'C';
          }

          if (num >= 90) { num = num - 90; result += 'XC' }
          if (num >= 50) { num = num - 50; result += 'L' }
          if (num >= 40) { num = num - 40; result += 'XL' }
          if (num >= 10) {
              let add = Math.floor(num / 10);
              num = num - add * 10;
              for (let i = 1; i <= add; i++) result += 'X';
          }
          if (num == 9) { num = num - 9; result += 'IX' }
          if (num >= 5) { num = num - 5; result += 'V' }
          if (num == 4) { num = num - 4; result += 'IV' }
          if (num <= 3) {
              let add = Math.floor(num / 1);
              num = num - add * 1;
              for (let i = 1; i <= add; i++) result += 'I';
          }


          return result;
      };
      // console.log(intToRoman(num));

      //////29. Divide Two Integers

      let dividend = 7, divisor = -3;
      // dividend = 7, divisor = -3
      // dividend =-2147483648,divisor=-1
      var divide = function (dividend, divisor) {
             
          if (dividend == 0) return 0;
          if(dividend==-2147483648&& divisor==-1) return 2147483647
          let i = 0;
          if (dividend < 0 && divisor < 0) {
              dividend = -1 * dividend;
              divisor = -1 * divisor
              while (true) {

                  dividend = dividend - divisor;
                  i++;
                  if (divisor > dividend) return i;
              }
          }
          else if (dividend < 0) {
              dividend = -1 * dividend;
              while (true) {
                  dividend = dividend - divisor;
                  i++;
                  if (divisor > dividend) return -i;
              }
          } else if (divisor < 0) {
              divisor = -1 * divisor;
              while (true) {
                  dividend = dividend - divisor;
                  i++;
                  if (divisor > dividend) return -i;
              }
          }
          else {
              while (true) {
                  dividend = dividend - divisor;
                  i++;
                  if (divisor > dividend) return i;
              }
          }
      };
      console.log(divide(dividend, divisor));