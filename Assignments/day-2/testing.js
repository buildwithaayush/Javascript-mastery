    let numbers =[6,4,3,2,6,1]
   let mode = (numbers) => {
        let freq = {}
        for(let num of numbers){
            freq[num] = (freq[num] || 0) +1
        }
        return freq;
   }

   let ans = mode(numbers)
   console.log(ans)