const flipArt = (id, btn) => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    //
    btn.innerHTML = `<div class="spinner spinner-border-sm spinner-border"></div>`;
    
    $.ajax({
        type: "POST",
        url: `/bids?token=${params.token}`,
        data: {id},
        dataType: "JSON",
        success: function (resp){
            btn.innerHTML ="Flip Art";
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
        error: function(err){
            btn.innerHTML ="Flip Art";
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
}