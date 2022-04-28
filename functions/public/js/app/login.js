const logForm = document.getElementById("loginForm");
//
logForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //
    $("#submitbtn").val("checking...");
    //
    const email = logForm['email'].value;
    const auth = logForm['password'].value;
    //
    if(email =="" || auth == ""){
        //
        $("#submitbtn").val("Login Account");
        return Swal.fire({
            icon: 'error',
            text: "*Kindly provide your email and password to login securely"
          })
    }
    //
    const logData = {
        email,
        password: auth
    }
    //
    $.ajax({
        type: "POST",
        url: "/login",
        dataType: "JSON",
        data: logData,
        success: function(resp){
            //
            console.log(resp);
            $("#submitbtn").val("Login Account");
            if(resp.success == true){
                location.href = resp['data'].redirectURL;
            }
            else
            {
                console.log(resp);
            }
        },
        error: function(err){
            //
            console.log(err);
            $("#submitbtn").val("Login Account");
            if(err.responseJSON.success == false){
                //
                return Swal.fire({
                    icon: 'error',
                    text: err.responseJSON.errors
                  })
            }else{
                //
                console.log(err);
            }
        }
    })
})