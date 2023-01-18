
$(document).ready(function() {

        $("#btn").click(function() {
            var payLoad = {email : $('#e_mail').val()}
            $.ajax({
            type: "POST",
            url: "https://localhost:44375/Custmer/ForgetPassword",
            data: JSON.stringify(payLoad),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                console.log(response);
                // window.location.replace('http://127.0.0.1:5500/confirm.html');
                Swal.fire({
                    icon: 'success',
                    title: 'yaaay..',
                    text: 'check your Email'
                    })
            },
            error : function (error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email not Found'
                    })
            }
        })
        });
    });



        



