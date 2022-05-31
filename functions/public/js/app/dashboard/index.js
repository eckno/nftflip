const start_bid  = (btn, isid) => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

    btn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;
    //

    $.ajax({
        type: "POST",
        url: `/start_bid?token=${params.token}`,
        data: {checkBid: true},
        dataType: "JSON",
        success: function(resp){
            btn.innerHTML =`Place a Bid`;
            if(resp.success == true){
                location.href = `/start_bid?token=${params.token}&id=${isid}`;
            }
        },
        error: function(err){
            btn.innerHTML =`Place a Bid`;
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
}