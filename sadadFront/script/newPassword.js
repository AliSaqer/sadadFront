var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
// console.log(getUrlParameter('confirmation'));

//the confirmation code http client 
 var payLoad = {code : getUrlParameter('confirmation')}
 console.log(JSON.stringify(payLoad));
$.ajax({
type: "POST",
url: "https://localhost:44375/Custmer/ConfiremPassword",
data: JSON.stringify(payLoad),
contentType: "application/json; charset=utf-8",
dataType: "json",
success: function(response) {
    console.log(response); 
    localStorage.setItem("Email", response.email);
     
},
error : function (error){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'code not working'
        })
}
})

 let Email=localStorage.getItem("Email");



// the http client for reasign new password


let btn = document.getElementById('btn');
btn.addEventListener('click' , event=>{
    let newPassword = {
        email:Email,
        newPassword: $('#NewPassword').val(),
        confirmPassword: $('#ConfirmPassword').val()
    }
    console.log(JSON.stringify(newPassword));
    
    let req = new XMLHttpRequest()
        
        req.open('post' , 'https://localhost:44375/Custmer/ResetPassword');
        
        req.setRequestHeader('content-type' , 'application/JSON');
        
        req.addEventListener('load' , function(){
            if($('#NewPassword').val()==$('#ConfirmPassword').val()){
            if(req.status == 200){
                console.log(req.status);
                Swal.fire({
                    icon: 'success',
                    title: 'Yaaay',
                    text: 'your Password have been updated'
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'oops',
                    text: 'some thing went wrong'
                    }) 
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'oops',
                text: 'password and confirmation dosent match'
                }) 
        }
           
        })
    
        req.send(JSON.stringify(newPassword));
    
})