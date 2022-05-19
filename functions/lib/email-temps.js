class emailTemplates
{
    constructor(){
        //
    }

    //
    static welcome_mail(senderName, token)
    {
        const getPage = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <title>WELCOME</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
            <meta name="format-detection" content="telephone=no" />
            <!--[if !mso]><!-->
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            <!--<![endif]-->
            <style type="text/css">
              body {
              -webkit-text-size-adjust: 100% !important;
              -ms-text-size-adjust: 100% !important;
              -webkit-font-smoothing: antialiased !important;
              }
              img {
              border: 0 !important;
              outline: none !important;
              }
              p {
              Margin: 0px !important;
              Padding: 0px !important;
              }
              table {
              border-collapse: collapse;
              mso-table-lspace: 0px;
              mso-table-rspace: 0px;
              }
              td, a, span {
              border-collapse: collapse;
              mso-line-height-rule: exactly;
              }
              .ExternalClass * {
              line-height: 100%;
              }
              span.MsoHyperlink {
              mso-style-priority:99;
              color:inherit;}
              span.MsoHyperlinkFollowed {
              mso-style-priority:99;
              color:inherit;}
              </style>
              <style media="only screen and (min-width:481px) and (max-width:599px)" type="text/css">
              @media only screen and (min-width:481px) and (max-width:599px) {
              table[class=em_main_table] {
              width: 100% !important;
              }
              table[class=em_wrapper] {
              width: 100% !important;
              }
              td[class=em_hide], br[class=em_hide] {
              display: none !important;
              }
              img[class=em_full_img] {
              width: 100% !important;
              height: auto !important;
              }
              td[class=em_align_cent] {
              text-align: center !important;
              }
              td[class=em_aside]{
              padding-left:10px !important;
              padding-right:10px !important;
              }
              td[class=em_height]{
              height: 20px !important;
              }
              td[class=em_font]{
              font-size:14px !important;	
              }
              td[class=em_align_cent1] {
              text-align: center !important;
              padding-bottom: 10px !important;
              }
              }
              </style>
              <style media="only screen and (max-width:480px)" type="text/css">
              @media only screen and (max-width:480px) {
              table[class=em_main_table] {
              width: 100% !important;
              }
              table[class=em_wrapper] {
              width: 100% !important;
              }
              td[class=em_hide], br[class=em_hide], span[class=em_hide] {
              display: none !important;
              }
              img[class=em_full_img] {
              width: 100% !important;
              height: auto !important;
              }
              td[class=em_align_cent] {
              text-align: center !important;
              }
              td[class=em_align_cent1] {
              text-align: center !important;
              padding-bottom: 10px !important;
              }
              td[class=em_height]{
              height: 20px !important;
              }
              td[class=em_aside]{
              padding-left:10px !important;
              padding-right:10px !important;
              } 
              td[class=em_font]{
              font-size:14px !important;
              line-height:28px !important;
              }
              span[class=em_br]{
              display:block !important;
              }
              }
            </style>
          </head>
          <body style="margin:0px; padding:0px;" bgcolor="#ffffff">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
              <!-- === PRE HEADER SECTION=== -->  
           
              <!-- === //PRE HEADER SECTION=== -->  
              <!-- === BODY SECTION=== --> 
              <tr>
                <td align="center" valign="top"  bgcolor="#ffffff">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
                    <!-- === LOGO SECTION === -->
                    <tr>
                      <td height="10" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center"><a href="#" target="_blank" style="text-decoration:none;"><img src="images/logo-2.png" width="300" height="80" style="display:block;font-family: Arial, sans-serif; font-size:15px; line-height:18px; color:#30373b;  font-weight:bold;" border="0" alt="Logo" /></a></td>
                    </tr>
                    <tr>
                      <td height="15" class="em_height">&nbsp;</td>
                    </tr>
                    <!-- === //LOGO SECTION === -->
                    <!-- === NEVIGATION SECTION === -->
                    <tr>
                      <td height="1" bgcolor="#fed69c" style="font-size:0px; line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" style="display:block;" border="0" alt="" /></td>
                    </tr>
                 
                    <tr>
                      <td height="1" bgcolor="#fed69c" style="font-size:0px; line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" style="display:block;" border="0" alt="" /></td>
                    </tr>
                    <!-- === //NEVIGATION SECTION === -->
                    <!-- === IMG WITH TEXT AND COUPEN CODE SECTION === -->
                    <tr>
                      <td valign="top" class="em_aside">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="36" class="em_height">&nbsp;</td>
                          </tr>
                          <tr>
                            <td valign="middle" align="center"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/banner.jpg" width="333" height="303" alt="WELCOME TO NFTFLIP" style="display:block; font-family:Arial, sans-serif; font-size:25px; line-height:303px; color:#c27cbb;max-width:333px;" class="em_full_img" border="0" /></td>
                          </tr>
                          <tr>
                            <td height="41" class="em_height">&nbsp;</td>
                          </tr>
                          <tr>
                            <td height="1" bgcolor="#d8e4f0" style="font-size:0px;line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" alt="" style="display:block;" border="0" /></td>
                          </tr>
                          <tr>
                            <td height="35" class="em_height">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:20px; font-weight:bold; line-height:18px; color:#999999;text-transform: capitalize;">Welcome ${senderName} ,</td>
                          </tr>
                          <tr>
                            <td height="22" style="font-size:1px; line-height:1px;">&nbsp;</td>
                          </tr>
                          <tr>
                            <td height="22" style="font-size:1px; line-height:1px;">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; font-weight:bold; line-height:20px; color:#999999;">Woo-hoo! Thanks for signing up for NFTFLIP TRADE. <br />Before you can get your all access pass to the latest NFT Investment Opportunity that will change your life for better, <br> you need to confirm your email and setup your account pin.
        
                             </td>
                          </tr>
                          <tr>
                            <td height="20" style="font-size:1px; line-height:1px;">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; line-height:20px; color:#feae39;"> Please verify your Email to complete your registration.</td>
                          </tr>
                          <tr>
                            <td height="12" style="font-size:1px; line-height:1px;">&nbsp;</td>
                          </tr>
                          <tr>
                            <td valign="top" align="center">
                              <table width="210" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                  <td valign="middle" align="center" height="45" bgcolor="#feae39" ><a href="https://nftflip.trade/verification?token=${token}" style="font-family:'Open Sans', Arial, sans-serif; font-size:17px; font-weight:bold; color:#ffffff; text-transform:uppercase;text-decoration: none;">Verify Email</a></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td height="34" class="em_height">&nbsp;</td>
                          </tr>
                        
                        </table>
                      </td>
                    </tr>
                    <!-- === //IMG WITH TEXT AND COUPEN CODE SECTION === -->
                  </table>
                </td>
              </tr>
              <!-- === //BODY SECTION=== -->
              <!-- === FOOTER SECTION === -->
              <tr>
                <td align="center" valign="top"  bgcolor="#30373b" class="em_aside">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
              
                    <tr>
                      <td height="22" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; line-height:18px; color:#848789; text-transform:uppercase;">
                       <span style="text-decoration:underline;"><a href="#" target="_blank" style="text-decoration:underline; color:#848789;">PRIVACY STATEMENT</a></span> &nbsp;&nbsp;|&nbsp;&nbsp; <span style="text-decoration:underline;"><a href="#" target="_blank" style="text-decoration:underline; color:#848789;">TERMS OF SERVICE</a></span><span class="em_hide"> &nbsp;&nbsp;|&nbsp;&nbsp; </span><span class="em_br"></span><span style="text-decoration:underline;"><a href="#" target="_blank" style="text-decoration:underline; color:#848789;">RETURNS</a></span>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; line-height:18px; color:#848789;text-transform:uppercase;">
                        &copy;2&zwnj;022 NFTFLIP. All Rights Reserved.
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; line-height:18px; color:#848789;text-transform:uppercase;">
                        If you do not wish to receive any further emails from us, please  <span style="text-decoration:underline;"><a href="#" target="_blank" style="text-decoration:underline; color:#848789;">unsubscribe</a></span>
                      </td>
                    </tr>
                    <tr>
                      <td height="35" class="em_height">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- === //FOOTER SECTION === -->
            </table>
            <div style="display:none; white-space:nowrap; font:20px courier; color:#ffffff; background-color:#ffffff;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
          </body>
        </html>`;

        //
        return getPage;
    }
    
}

module.exports = emailTemplates;