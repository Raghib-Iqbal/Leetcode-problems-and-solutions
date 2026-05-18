       ////////28. Find the Index of the First Occurrence in a String
       let haystack = "sadbutsad", needle = "sad"

       //    haystack = "leetcode", needle = "leeto"         
       haystack = "mississippi", needle = "sipp"
       function you() {

           for (let i = 0; i <= haystack.length - needle.length; i++) {

               if (haystack.slice(i, i + needle.length) === needle) return i
           }
           return -1

       }



       //  console.log(you())


       ///////////////27. Remove Element///         need to learn sort full senerio
       let nums = [3, 2, 2, 3], val = 3
       // nums = [0,1,2,2,3,0,4,2], val = 2

       let k = 0;

       for (let i = 0; i < nums.length; i++) {
           if (nums[i] !== val) {
               nums[k] = nums[i];
               k++;
           }
       }


       // console.log(k, nums)
       //  nums = [1,3,5,6], target = 5

       nums = [1, 3, 5, 6], target = 7
       nums = [1001], target = 5;
       nums = [1, 3, 5, 6], target = 0

       function check(nums, target) {
           let i = 0
           if (nums.includes(target)) return nums.indexOf(target);
           for (i = 0; i < nums.length; i++) {
               if (nums[i] > target) return i

           }

           if (i >= nums.length) return nums.length;
       }

       // console.log(check(nums, target))

       let s = "   Hello World   ";

       let digits = [1, 9, 9]
       //    digits = [9]

       //   output=''
       //   digits.forEach(ele=>{
       //       output+=ele;
       //     })
       //      output= Number(output)+1
       //     output=output.toString().split('').map(Numbe);r
       //       console.log(output)
       ///////////////pracitice plusTwo  66 plusOne
       function plusOne(digits) {

           for (let i = digits.length - 1; i >= 0; i--) {
               if (digits[i] < 9) {

                   digits[i] += 1;
                   return digits;
               }
               digits[i] = 0;
           }

           digits.unshift(1);

           return digits
       }
       plusOne(digits)



       //////////////////67 add Binary

       let a = "11", b = "1";
       a = "1010", b = "1011"
       function Binary(a, b) {
           a = a.split('').map(Number);
           b = b.split('').map(Number);
           let i = a.length - 1;
           let j = b.length - 1;
           let result = []
           let carry = 0;
           // console.log(a, b,i,j)
           while (i >= 0 || j >= 0 || carry) {

               let sum = carry;
               if (i >= 0) sum += a[i];
               if (j >= 0) sum += b[j];
               carry = Math.floor(sum / 2);

               sum = sum % 2;
               result.push(sum)
               i--;
               j--;
           }

           return result.reverse().join('');
       }

       console.log(Binary(a, b))





       let x = 1;
       var mySqrt = function (x) {
           if (x == 0) return 0
           if (x == 1) return 1
           if (x == 2) return 1

           for (let i = 0; i < x; i++) {
               if (i * i == x) return i;
               else if (i * i > x) return i - 1;
           }

       };
       console.log(mySqrt(x));

       // function binary(x) {
       //     let l = 0, r = x - 1;
       //     let res = 0;
       //     while (l >= r) {
       //         let m = (l + r) / 2;
       //         if (m ** 2 > x) r = m - 1;
       //         else if (m ** 2 <= x) {
       //             l = m + 1;
       //             res = m
       //         } else {
       //             return m
       //         }

       //     }
       //     return res
       // }

       // console.log(binary(x))



       var climbStairs = function (n) {
           if (n <= 2) return n;
           let a = 1, b = 2;

           for (let i = 3; i < n+1; i++) {
               b = a + b;
               a = b;

           }


               return b
       };


       console.log(climbStairs(3));






       var generate = function (numRows) {
           let result = [];
           for (let i = 0; i < numRows; i++) {
               let arr = [];
               for (j = 0; j <= i; j++) {
                   arr.push(1);

               }
               if (i > 1) {
                      for(let k=1;k<i;k++){
                             arr[k]= result[i-1][k-1]+result[i-1][k];

                      }
               }
               result.push(arr);
           }

           return result;
       };


       console.log(generate(5))
