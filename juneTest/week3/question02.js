let friends = [ {fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 }, {fname: 'Ross',lname:"Geller" , id: 2, marks :
        23 }, {fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 }, {fname: 'Joey',lname:" Tribbiani" , id: 4, marks :
        46 }, {fname: 'Chandler ',lname:"Bing" , id: 5, marks : 78 }, {fname: 'Phoebe',lname:"Buffay" , id: 6, marks :
        45 } ];
 
for(let i=0; i<=friends.length; i++) {
   


    tbodyref.innerHTML+=`<tr>
    <td>${friends[i].fname}</td>
    <td>${friends[i].lname}</td>
    </tr>`
    }; 

         