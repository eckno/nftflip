const confirmWithdrawal = (btn) => {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

    btn.innerHTML =`<div class="spinner spinner-border-sm spinner-border"></div>`;

    $.ajax({
        type: "POST",
        url: `/withdraw?token=${params.token}`,
        data: {greetings: "hi"},
        dataType: "JSON",
        success: function(resp){
            if(resp.success == true){
                location.href = `/withdraw?token=${params.token}`;
            }
            btn.innerHTML = "Request Withdrawal";
        },
        error: function(err){
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
            btn.innerHTML = "Request Withdrawal";
        }
    })
}