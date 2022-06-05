let n=parseInt(prompt("enter the number"));

function cube(i){
    return (i**3);
}

for(let i=1; i<=n; i++){     
    let c=cube(i);    
    console.log(i+'^3 = '+i+'*'+i+'*'+i+' = '+c);  
}
 


     
