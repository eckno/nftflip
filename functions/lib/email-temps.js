class emailTemplates
{
    constructor(){
        //
    }

    //
    static welcome_mail(senderName, token)
    {
        const getPage = `<!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
              box-sizing: border-box;
            }
        
            body {
              margin: 0;
              padding: 0;
            }
        
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
        
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
        
            p {
              line-height: inherit
            }
        
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
        
            @media (max-width:620px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
        
              .icons-inner {
                text-align: center;
              }
        
              .icons-inner td {
                margin: 0 auto;
              }
        
              .row-content {
                width: 100% !important;
              }
        
              .column .border,
              .mobile_hide {
                display: none;
              }
        
              table {
                table-layout: fixed !important;
              }
        
              .stack .column {
                width: 100%;
                display: block;
              }
        
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
        
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; background-color: #091548; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; background-image: url('https://nftflip.trade/images/background_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:8px;">
        <div align="center" style="line-height:10px"><img alt="Main Image" src="https://nftflip.trade/images/header3.png" style="display: block; height: auto; border: 0; width: 232px; max-width: 100%;" title="Main Image" width="232"/></div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
        <p style="margin: 0; font-size: 13px; text-align: center;"><span style="font-size:20px;">
          Welcome ${senderName} ,
        </span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="5" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
        <p style="margin: 0; font-size: 12px; text-align: center;">You are one step away from getting your all access pass</p>
        <p style="margin: 0; font-size: 12px; text-align: center;">to the latest NFT'S Investment opportunity that</p>
        <p style="margin: 0; font-size: 12px; text-align: center;">will change your life amazingly. </p><br>
        <p style="margin: 0; font-size: 12px; text-align: center;">Kindly verify your account to complete registration.</p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;text-align:center;">
        <div align="center">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:42px;width:197px;v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#091548; font-family:sans-serif; font-size:15px"><![endif]-->
          <a href="https://nftflip.trade/verification?token=${token}" style="text-decoration:none;display:inline-block;color:#091548;background-color:#ffffff;border-radius:24px;width:auto;border-top:1px solid #ffffff;font-weight:undefined;border-right:1px solid #ffffff;border-bottom:1px solid #ffffff;border-left:1px solid #ffffff;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 15px; line-height: 30px;" style="font-size: 15px; line-height: 30px;"><strong>VERIFY ACCOUNT</strong></span></span></span></a>
        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
        <div align="center">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
        <tr>
        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:40px;padding-left:25px;padding-right:25px;padding-top:10px;">
        
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td>
        <div align="center" style="line-height:10px"><img alt="Your Logo" src="https://nftflip.trade/images/logo-light.png" style="display: block; height: auto; border: 0; width: 145px; max-width: 100%;" title="Your Logo" width="145"/></div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
        <div align="center">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
        <tr>
        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="social_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="156px">
        <tr>
        <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nftflip.trade/images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
        <td style="padding:0 10px 0 10px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nftflip.trade/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
        <td style="padding:0 10px 0 10px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nftflip.trade/images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="15" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4a60bb; line-height: 1.2;">
        <p style="margin: 0; font-size: 12px; text-align: center;"><span style="">Copyright © 2021 nft official, All rights reserved.<br/><br/>Enquiries: support@nftflip.trade</span></p>
        <p style="margin: 0; font-size: 12px; text-align: center;"><span style=""><br/>Changed your mind? You can <a href="#" rel="noopener" style="text-decoration: underline; color: #7f96ef;" target="_blank" title="unsubscribe">unsubscribe</a> at any time.</span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; word-wrap: break-word;" width="100%">
        <tr>
        <td>
        <div align="center" style="font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;"><div style="height-top: 20px;"> </div></div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="vertical-align: middle; text-align: center;">
        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
        <!--[if !vml]><!-->
        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
        <!--<![endif]-->
        
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        </body>
        </html>`;
        
        //
        return getPage;
    }

    static deposit_email(fname, date, cto, amount, tax, wallet){
      
        const mail_html =`<!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
              box-sizing: border-box;
            }
        
            body {
              margin: 0;
              padding: 0;
            }
        
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
        
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
        
            p {
              line-height: inherit
            }
        
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
        
            @media (max-width:620px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
        
              .icons-inner {
                text-align: center;
              }
        
              .icons-inner td {
                margin: 0 auto;
              }
        
              .row-content {
                width: 100% !important;
              }
        
              .column .border,
              .mobile_hide {
                display: none;
              }
        
              table {
                table-layout: fixed !important;
              }
        
              .stack .column {
                width: 100%;
                display: block;
              }
        
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
        
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; background-color: #091548; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; background-image: url('https://nftflip.trade/images/background_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:8px;">
        <div align="center" style="line-height:10px"><img alt="Main Image" src="https://nftflip.trade/images/header3.png" style="display: block; height: auto; border: 0; width: 232px; max-width: 100%;" title="Main Image" width="232"/></div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
        <p style="margin: 0; font-size: 13px; text-align: center;"><span style="font-size:20px;">
          Dear ${fname} ,
        </span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="5" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
        <p style="margin: 0; font-size: 12px; text-align: center;">You have initiated a new deposit to your account</p>
        <p style="margin: 0; font-size: 12px; text-align: center;">Date: ${date} <br> Transaction ID: ${cto}</p>
        <p style="margin: 0; font-size: 12px; text-align: center;">Deposit Amount: ${amount} </p>
        <p style="margin: 0; font-size: 12px; text-align: center;">Tax: ${tax}</p>
        <p style="margin: 0; font-size: 12px; text-align: center;">Eth Wallet Address: ${wallet}</p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;text-align:center;">
        <div align="center">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:42px;width:197px;v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#091548; font-family:sans-serif; font-size:15px"><![endif]-->
          <a href="mailto:support@nftflip.trade" style="text-decoration:none;display:inline-block;color:#091548;background-color:#ffffff;border-radius:24px;width:auto;border-top:1px solid #ffffff;font-weight:undefined;border-right:1px solid #ffffff;border-bottom:1px solid #ffffff;border-left:1px solid #ffffff;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 15px; line-height: 30px;" style="font-size: 15px; line-height: 30px;"><strong>NOT YOUR ACTION ? REPORT</strong></span></span></span></a>
        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
        <div align="center">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
        <tr>
        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:40px;padding-left:25px;padding-right:25px;padding-top:10px;">
        
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td>
        <div align="center" style="line-height:10px"><img alt="Your Logo" src="https://nftflip.trade/images/logo-light.png" style="display: block; height: auto; border: 0; width: 145px; max-width: 100%;" title="Your Logo" width="145"/></div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
        <div align="center">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
        <tr>
        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="social_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="156px">
        <tr>
        <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nftflip.trade/images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
        <td style="padding:0 10px 0 10px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nftflip.trade/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
        <td style="padding:0 10px 0 10px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nftflip.trade/images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="15" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4a60bb; line-height: 1.2;">
        <p style="margin: 0; font-size: 12px; text-align: center;"><span style="">Copyright © 2021 nft official, All rights reserved.<br/><br/>Enquiries: support@nftflip.trade</span></p>
        <p style="margin: 0; font-size: 12px; text-align: center;"><span style=""><br/>Changed your mind? You can <a href="#" rel="noopener" style="text-decoration: underline; color: #7f96ef;" target="_blank" title="unsubscribe">unsubscribe</a> at any time.</span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; word-wrap: break-word;" width="100%">
        <tr>
        <td>
        <div align="center" style="font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;"><div style="height-top: 20px;"> </div></div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="vertical-align: middle; text-align: center;">
        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
        <!--[if !vml]><!-->
        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
        <!--<![endif]-->
        
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        </body>
        </html>`;

        return mail_html;
    }

    static withdrawal_email(fname, date, id, amount, tax, wallet)
    {
      const mail_html = `<!DOCTYPE html>

      <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          @media (max-width:620px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .row-content {
              width: 100% !important;
            }
      
            .column .border,
            .mobile_hide {
              display: none;
            }
      
            table {
              table-layout: fixed !important;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; background-color: #091548; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; background-image: url('https://nftflip.trade/images/background_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:8px;">
      <div align="center" style="line-height:10px"><img alt="Main Image" src="https://nftflip.trade/images/header3.png" style="display: block; height: auto; border: 0; width: 232px; max-width: 100%;" title="Main Image" width="232"/></div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-top:10px;">
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 13px; text-align: center;"><span style="font-size:20px;">
        Dear ${fname} ,
      </span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="5" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td>
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 12px; text-align: center;">You have initiated a new withdrawal request with following details</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Date: ${date} <br> Transaction ID: ${id}</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Amount: ${amount}ETH</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Tax: ${tax}ETH</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Paid to Address: ${wallet}</p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;text-align:center;">
      <div align="center">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:42px;width:197px;v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#091548; font-family:sans-serif; font-size:15px"><![endif]-->
        <a href="mailto:support@nftflip.trade" style="text-decoration:none;display:inline-block;color:#091548;background-color:#ffffff;border-radius:24px;width:auto;border-top:1px solid #ffffff;font-weight:undefined;border-right:1px solid #ffffff;border-bottom:1px solid #ffffff;border-left:1px solid #ffffff;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 15px; line-height: 30px;" style="font-size: 15px; line-height: 30px;"><strong>NOT YOUR ACTION ? REPORT</strong></span></span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
      <div align="center">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
      <tr>
      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
      </tr>
      </table>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:40px;padding-left:25px;padding-right:25px;padding-top:10px;">
      
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td>
      <div align="center" style="line-height:10px"><img alt="Your Logo" src="https://nftflip.trade/images/logo-light.png" style="display: block; height: auto; border: 0; width: 145px; max-width: 100%;" title="Your Logo" width="145"/></div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
      <div align="center">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
      <tr>
      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
      </tr>
      </table>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="10" cellspacing="0" class="social_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="156px">
      <tr>
      <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nftflip.trade/images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
      <td style="padding:0 10px 0 10px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nftflip.trade/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
      <td style="padding:0 10px 0 10px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nftflip.trade/images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="15" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td>
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4a60bb; line-height: 1.2;">
      <p style="margin: 0; font-size: 12px; text-align: center;"><span style="">Copyright © 2021 nft official, All rights reserved.<br/><br/>Enquiries: support@nftflip.trade</span></p>
      <p style="margin: 0; font-size: 12px; text-align: center;"><span style=""><br/>Changed your mind? You can <a href="#" rel="noopener" style="text-decoration: underline; color: #7f96ef;" target="_blank" title="unsubscribe">unsubscribe</a> at any time.</span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; word-wrap: break-word;" width="100%">
      <tr>
      <td>
      <div align="center" style="font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;"><div style="height-top: 20px;"> </div></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
      <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="vertical-align: middle; text-align: center;">
      <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
      <!--[if !vml]><!-->
      <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
      <!--<![endif]-->
      
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table><!-- End -->
      </body>
      </html>`;

      return mail_html;
    }

    static bid_email(nftname, oprice, bid, roi, status)
    {
      const mail_html =`<!DOCTYPE html>

      <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          @media (max-width:620px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .row-content {
              width: 100% !important;
            }
      
            .column .border,
            .mobile_hide {
              display: none;
            }
      
            table {
              table-layout: fixed !important;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; background-color: #091548; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; background-image: url('https://nftflip.trade/images/background_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:8px;">
      <div align="center" style="line-height:10px"><img alt="Main Image" src="https://nftflip.trade/images/header3.png" style="display: block; height: auto; border: 0; width: 232px; max-width: 100%;" title="Main Image" width="232"/></div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-top:10px;">
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 13px; text-align: center;"><span style="font-size:20px;">
        Congratulations,
      </span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="5" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td>
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 12px; text-align: center;">You have successfully placed a bid on ${nftname}</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Date: ${date} <br> Open Price: ${oprice}ETH</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Your Bid: ${bid}ETH</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Expected ROI: ${roi}ETH</p>
      <p style="margin: 0; font-size: 12px; text-align: center;">Status: ${status}</p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;text-align:center;">
      <div align="center">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:42px;width:197px;v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#091548; font-family:sans-serif; font-size:15px"><![endif]-->
        <a href="mailto:support@nftflip.trade" style="text-decoration:none;display:inline-block;color:#091548;background-color:#ffffff;border-radius:24px;width:auto;border-top:1px solid #ffffff;font-weight:undefined;border-right:1px solid #ffffff;border-bottom:1px solid #ffffff;border-left:1px solid #ffffff;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 15px; line-height: 30px;" style="font-size: 15px; line-height: 30px;"><strong>NOT YOUR ACTION ? REPORT</strong></span></span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
      <div align="center">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
      <tr>
      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
      </tr>
      </table>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td style="padding-bottom:40px;padding-left:25px;padding-right:25px;padding-top:10px;">
      
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td>
      <div align="center" style="line-height:10px"><img alt="Your Logo" src="https://nftflip.trade/images/logo-light.png" style="display: block; height: auto; border: 0; width: 145px; max-width: 100%;" title="Your Logo" width="145"/></div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
      <div align="center">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
      <tr>
      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;"><span> </span></td>
      </tr>
      </table>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="10" cellspacing="0" class="social_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="156px">
      <tr>
      <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nftflip.trade/images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
      <td style="padding:0 10px 0 10px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nftflip.trade/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
      <td style="padding:0 10px 0 10px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nftflip.trade/images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="15" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td>
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4a60bb; line-height: 1.2;">
      <p style="margin: 0; font-size: 12px; text-align: center;"><span style="">Copyright © 2021 nft official, All rights reserved.<br/><br/>Enquiries: support@nftflip.trade</span></p>
      <p style="margin: 0; font-size: 12px; text-align: center;"><span style=""><br/>Changed your mind? You can <a href="#" rel="noopener" style="text-decoration: underline; color: #7f96ef;" target="_blank" title="unsubscribe">unsubscribe</a> at any time.</span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; word-wrap: break-word;" width="100%">
      <tr>
      <td>
      <div align="center" style="font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;"><div style="height-top: 20px;"> </div></div>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
      <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td style="vertical-align: middle; text-align: center;">
      <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
      <!--[if !vml]><!-->
      <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
      <!--<![endif]-->
      
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table><!-- End -->
      </body>
      </html>`;

      return mail_html;
    }
    
}

module.exports = emailTemplates;