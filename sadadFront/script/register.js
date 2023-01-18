let btn = document.getElementById('btn');

btn.addEventListener('click' , event=>{
    var newUser = {
        firstName : $('#FirstName').val(),
        lastName : $('#LastName').val(),
        email : $('#E_Mail').val()
        }
    
    let req = new XMLHttpRequest()
    
    req.open('post' , 'https://localhost:44375/Custmer/Register');
    
    req.setRequestHeader('content-type' , 'application/JSON');
    
    req.addEventListener('load' , function(){
        if(req.status === 202 || req.status === 200){
            var xhr = JSON.parse(req.responseText); 
            console.log(xhr); 

            Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'A Customer has been Added succesfuly'
                });

        }else{
            console.log('bad requist');
            console.log(req.status);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
                })
        }
    })

    req.send(JSON.stringify(newUser));

})




// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };
// console.log(getUrlParameter('resetkey'));

