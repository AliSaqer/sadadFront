let btn = document.getElementById('btn');

btn.addEventListener('click' , event=>{
    var User = {
        email : $('#Email').val(),
        password : $('#PassWord').val()
        }
    
    let req = new XMLHttpRequest()
    
    req.open('post' , 'https://localhost:44375/Custmer/LoginInCustmer');
    
    req.setRequestHeader('content-type' , 'application/JSON');
    
    req.addEventListener('load' , function(){
        if(req.status == 200 ){
            let data = JSON.parse(req.responseText); 
            console.log(data);
            sessionStorage.setItem('token' , data.token);
            window.location.replace('http://127.0.0.1:5500/index.html');

            localStorage.setItem('token' , data.token);
            // localStorage.clear();
            // const html = `
            // <h1>${data.token}</h1>
            // `
            // $('#test').html(html);
        }else{
            console.log('bad requist');
            console.log(req.status);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or password is wrong !!'
                })
        }
    })

    req.send(JSON.stringify(User));

})