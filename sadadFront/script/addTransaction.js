

let btn = document.getElementById('btn');
btn.addEventListener('click', event=>{
    let NewTransaction = {
        firstName:$('#FirstName').val(),
        lastName:$('#LastName').val(),
        product:$('#Product_name').val(),
        quantity:$('#Quantity').val()
    }

    let req = new XMLHttpRequest()
    
    req.open('post' , 'https://localhost:44375/Custmer/RegisterDept');
    
    req.setRequestHeader('content-type' , 'application/JSON');
    
    req.addEventListener('load' , function(){
        if(req.status == 200 || Request.status==202 ){
            
            Swal.fire({
                icon: 'success',
                title: 'Yaaay',
                text: 'transaction has been added'
                })
            
        }else{
            console.log('bad requist');
            console.log(req.status);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'check your inputs !!'
                })
        }
    })

    req.send(JSON.stringify(NewTransaction));

})