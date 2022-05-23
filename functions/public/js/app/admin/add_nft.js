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

    const nfturl = setform['nfturl'].value;
    const nftname = setform['nftname'].value;
    const bidprice = setform['price'].value;
    const price = setform['profit'].value;
    const hascountdown = setform['hascountdown'].value;
    const duration = setform['duration'].value;
    const like = setform['like'].value;
    const desc = setform['desc'].value;
    const iscurrent = setform['iscurrent'].value;
    
    //
    const send_data = {
        nfturl,
        nftname,
        bidprice,
        price,
        hascountdown,
        duration,
        like,
        iscurrent,
        desc
    }

    $.ajax({
        type: "POST",
        url: `/add_nft?token=${params.token}`,
        data: send_data,
        dataType: "JSON",
        success: function (resp){
            setformBtn.innerHTML ="Add Nft";
            if(resp.success == true){
                //
                let timerInterval
                Swal.fire({
                  title: 'Success!',
                  html: 'NFT added successfuly!',
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

                setform.reset();
            }
            console.log(resp);
        },
        error: function (err){
            console.log(err);
            setformBtn.innerHTML ="Add Nft";
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
