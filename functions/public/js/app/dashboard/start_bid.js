const form = document.getElementById("bid_form");
const btn = document.getElementById("bid_btn");
//
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  //
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //
    btn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;
    //
    const amount = parseFloat(form['bamount'].value);
    if(/\d/.test(amount)){
        var number_pass = true;
        }else{
            var number_pass = false;
        }

    if(number_pass == false){
        btn.innerHTML =`Place Bid`;
        return Swal.fire({
            title: `<p style="color:red; font-size:14px;">Please enter a valid amount in Ethereum</p>`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if(amount < 0.5){
        btn.innerHTML =`Place Bid`;
        return Swal.fire({
            title: `<p style="color:red; font-size:14px;">Please enter a valid amount in Ethereum</p>`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    const bid = form['bid'].value;

    $.ajax({
        type: "POST",
        url: `/submit_bid?token=${params.token}`,
        data: {amount, bid},
        dataType: "JSON",
        success: function (resp){
            btn.innerHTML =`Place Bid`;
            if(resp.success == true){
                Swal.fire({
                    icon: 'success',
                    text: resp['data'].msg
                  })
                  setTimeout(() => {
                    return location.href = resp['data'].redirectURL;
                  }, 4000);
                //
            }
        },
        error: function (err){
            btn.innerHTML =`Place Bid`;
            console.log(err);
            if(err.responseJSON['success'] == false){
                Swal.fire({
                    title: `<p style="color:red; font-size:14px;">${err.responseJSON.errors.msg}</p>`,
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
        }
    })
})