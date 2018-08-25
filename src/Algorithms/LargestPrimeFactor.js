math=(n)=>{
  // let num=600851475143
  var i=2;
  while (i<=n){
    if (n%i == 0){
        n/=i;
    }else{
        i++;
    }
  }
console.log(i);
}
