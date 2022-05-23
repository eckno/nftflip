const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.some_key; // "some_value"

const setform = document.getElementById("form-create-item");
const setformBtn = document.getElementById("subBtn");

setform.addEventListener("submit", e => {
    e.preventDefault();
    setformBtn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;

    const wallet = setform['address'].value;

    //
    const send_data = {
        wallet
    }

    $.ajax({
        type: "POST",
        url: `/set_wallet?token=${params.token}`,
        data: send_data,
        dataType: "JSON",
        success: function (resp){
            setformBtn.innerHTML ="Update Wallet";
            if(resp.success == true){
                //
                let timerInterval
                Swal.fire({
                  title: 'Success!',
                  html: 'Ethereum wallet address updated successfuly!',
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                    timerInterval = setInterval(() => {
                      
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    //console.log('I was closed by the timer')
                  }
                })

            }
            console.log(resp);
        },
        error: function (err){
            setformBtn.innerHTML ="Update Wallet";
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
