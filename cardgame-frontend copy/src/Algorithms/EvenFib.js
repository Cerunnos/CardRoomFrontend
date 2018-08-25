evenFib=()=>{
  let fib0=0
  let fib1=1
  let fib=1
  let sum=fib0
  while (fib<=4000000){
    if (fib%2===0){
      sum +=fib1
    }
    fib=fib0+fib1
    fib1+=fib0
    fib0=fib1-fib0
  }
  console.log(sum)
}
