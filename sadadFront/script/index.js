fetch("https://localhost:44375/Custmer/GetAllTranstations")
.then((data)=>{
    // console.log(data); //json format

    return data.json(); //convert it to opject
})
.then((opjectData)=>{
    console.log(opjectData.$values);
    let array =opjectData.$values;
    let tabelData="";
    array.map((values)=>{
        tabelData += `<tr>
        <td>${values.custmerName}</td>
        <td>${values.total}</td>
        <td>${values.createDate}</td>
        </tr>`;
    })
    
  
    
    document.getElementById("transactionData").innerHTML=tabelData;
    

})
