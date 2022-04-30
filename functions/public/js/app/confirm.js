const getForm = document.getElementById("confirmForm");
//
getForm.addEventListener("submit", (e) => {
    e.preventDefault();

    $("#submitbtn").val("Creating...");

    const code = getForm['password'].value;

    if(code.length < 4 || code.length > 6){

        $("#submitbtn").val("Verify Account");
        return Swal.fire({
            icon: 'error',
            text: "*Your account pin should be 4 or 6 in digit!"
          })
    }else if(!parseInt(code)){

        $("#submitbtn").val("Verify Account");
        return Swal.fire({
            icon: 'error',
            text: "Account pin should contain only digits!"
          })
    }

    const sendData = {
        pin: code,
        uid: getForm['uid'].value
    }

    $.ajax({
        type: "POST",
        url: "/verification",
        dataType: "JSON",
        data: sendData,
        success: function (resp){
            //
            $("#submitbtn").val("Verify Account");
            if(resp.success == true){
                Swal.fire({
                    icon: 'success',
                    text: "Your account confirmation is successful. Please proceed to login"
                  })
                  setTimeout(() => {
                    return location.reload();
                  }, 4000);
            }
            else
            {
                console.log(resp);
            }
        },
        error: function (err){
            //
            $("#submitbtn").val("Verify Account");
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