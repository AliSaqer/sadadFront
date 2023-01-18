let btn = document.getElementById('btn');
btn.addEventListener('click', event=>{
    let Pay = {
        firstName:$('#FirstName').val(),
        lastName:$('#LastName').val(),
        amount:$('#Pay').val(),
    }

    let req = new XMLHttpRequest()
    
    req.open('PUT' , 'https://localhost:44375/Custmer/EditCustmerDept');
    
    req.setRequestHeader('content-type' , 'application/JSON');
    
    req.addEventListener('load' , function(){
        if(req.status == 200 || Request.status==202 ){
            
            Swal.fire({
                icon: 'success',
                title: 'Yaaay',
                text: 'pay has been recorded'
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

    req.send(JSON.stringify(Pay));

})