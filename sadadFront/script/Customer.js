// myHeaders = new Headers({
//     'Authorization': 'Token ' + localStorage.getItem('token'),
//     'Content-Type': 'application/x-www-form-urlencoded'
//   });

fetch("https://localhost:44375/Custmer/GetAllCustmers")
.then((data)=>{
    // console.log(data); //json format

    return data.json(); //convert it to opject`
})
.then((opjectData)=>{
    console.log(opjectData.$values);
    let array =opjectData.$values;
    let tabelData="";
    array.map((values)=>{
        tabelData += `<tr>
        <td  onclick = "get_data_custmer(${values.id})">${values.fullName}</td>
        <td class="w-50">${values.totalDept}</td>
        </tr>`;
    })
    

    
    document.getElementById("table-data").innerHTML=tabelData;
    

})

function get_data_custmer(id) {
    console.log(id);
    fetch("https://localhost:44375/Custmer/GetCustmerDetilesByID?Id="+id)
    .then((data)=>{
        return data.json();
    }).then((opjectData)=>{
        console.log(opjectData);
        let array =opjectData.$values;
        let tabelData="";

    array.map((values)=>{
        tabelData += `<tr>
        <th scope="row">${values.productName}</th>
        <td>${values.productPrice}</td>
        <td>${values.createdDate}</td>
    </tr> `;
    })
    

    document.getElementById("detailed_data").innerHTML="";
    document.getElementById("detailed_data").innerHTML=tabelData;
    })
}
