const form = document.getElementById("registration_form");
//
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form['regbtn'].value ="Loading...";
    //
    const name = form['name'].value;
    const email = form['email'].value;
    const uname = form['username'].value;
    const phone = form['phone'].value;
    const password = form['password'].value;
    const repassword = form['re-password'].value;
    const refid = form['rid'].value;
    //
    if(password != repassword){
        form['regbtn'].value ="Register Now";
        //
       return Swal.fire({
            icon: 'error',
            text: 'Mismatched Password!'
          })
    }else if(password.length < 4){
        form['regbtn'].value ="Register Now";
        //
        return Swal.fire({
            icon: 'error',
            text: 'Password should be unique and more than 4 characters!'
          })
    }else if(checkValidNumber(phone) === false){
        form['regbtn'].value ="Register Now";
        //
        return Swal.fire({
            icon: 'error',
            text: 'Invalid mobile number'
          })
    }

    //
    const dataToSend = {
        name, email, uname, phone, password, repassword, refid
    }
    //
    $.ajax({
        type: "POST",
        url: "/create_account",
        dataType: "JSON",
        data: dataToSend,
        success: function(resp){
            //
            form['regbtn'].value ="Register Now";
            if(resp.success == true){
                document.getElementById("msgsus").style.display ="block";
                $("#msgsus").html(`We have sent you an email confirmation. 
                Click on "verify account" on the email to verify your email and set up your secrete code`);
                form.reset();
                //
                return Swal.fire(
                    'Good job!',
                    'We have sent you an email confirmation. Click on it to verify your email and set up your secrete code!',
                    'success'
                  )
            }
            else
            {
                console.log(resp);
            }
            
        },
        error: function(err){
            form['regbtn'].value ="Register Now";
            //
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

function checkValidNumber(inputtxt)
{
  if(inputtxt.startsWith("+"))
    {
      return true;
    }
      else
    {
        return false;
    }
}