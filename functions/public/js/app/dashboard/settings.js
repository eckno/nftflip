const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.some_key; // "some_value"

const setform = document.getElementById("profileForm");
const setformBtn = document.getElementById("profileFormBtn");

setform.addEventListener("submit", e => {
    e.preventDefault();
    setformBtn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;

    const uname = setform['username'].value;
    const address = setform['address'].value;
    const city = setform['city'].value;
    const pcode = setform['postal'].value;
    const country = setform['country'].value;
    //
    const send_data = {
        username: uname,
        address,
        city,
        postal: pcode,
        country
    }

    $.ajax({
        type: "POST",
        url: `/settings?token=${params.token}`,
        data: send_data,
        dataType: "JSON",
        success: function (resp){
            setformBtn.innerHTML ="Save";
            if(resp.success == true){
                //
                let timerInterval
                Swal.fire({
                  title: 'Success!',
                  html: 'Profile updated successfuly!',
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
            setformBtn.innerHTML ="Save";
            console.log(err);
        }
    })
})
