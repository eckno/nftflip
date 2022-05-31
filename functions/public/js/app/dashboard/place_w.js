const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

const setform = document.getElementById("profitForm");
const setformBtn = document.getElementById("profileFormBtn");

setform.addEventListener("submit", e => {
    e.preventDefault();
    setformBtn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;

    const amount = setform['amount'].value;
    const desc = setform['desc'].value;
    const wallet = setform['wallet'].value;
    
    //
    const send_data = {
        amount,
        desc,
        wallet
    }

    $.ajax({
        type: "POST",
        url: `/request_withdrawal?token=${params.token}`,
        data: send_data,
        dataType: "JSON",
        success: function (resp){
            setformBtn.innerHTML ="Withdraw";
            if(resp.success == true){
                //
                setTimeout(() => {
                  //
                  location.href = resp['data'].redirectURL;
                }, 4000);
                
            }
            console.log(resp);
        },
        error: function (err){
            setformBtn.innerHTML ="Withdraw";
            console.log(err);
            if(err.responseJSON.errors.success == false){
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
