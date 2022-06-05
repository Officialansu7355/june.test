let n=parseInt(prompt("enter the number"));

function prime(n) {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true;
}
let count=0,i=1;
while(count<n){
    i=i+1
    flag=prime(i)
if (flag === true) {
    count++
}

}
console.log(i);