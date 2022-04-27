const _ = require('lodash');
const {empty, isObject, isString} = require("../lib/utils/utils");
const nodemailer = require("nodemailer");
//
class BaseController {

    constructor(){
        this.mail_api ="";
    }

    /**
	 * standard fail response object
	 * @param res
	 * @param data
	 */
	static sendFailResponse(res, errors) {
		res.status(400).send({ success: false, errors });
	}

    	/**
	 * standard success response object
	 * @param res
	 * @param data
	 */
	static sendSuccessResponse(res, data) {
		res.status(201).send({ success: true, data });
	}

    static sanitizeRequestData(data) {
		if (!empty(data)) {
			_.forEach(data, (d, key) => {
				data[key] = this.recursivelySanitize(d);
			});
		}
		return data;
	}

    /**
	 *
	 * @param {*} data
	 * @returns
	 */
	static recursivelySanitize(data) {
		if (isObject(data)) {
			_.forEach(data, (d, key) => {
				if (_.isString(d) && _.includes(d, "%") !== false) {
					data[key] = decodeURI(d);
				}
				if (isObject(d)) {
					data[key] = this.recursivelySanitize(d);
				}
			});
		} else if (_.isString(data)) {
			data = data.trim();
		}
		return data;
	}

	//
	async send_email()
	{
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
		  host: "mail.nzexpresscourier.com",
		  port: 26,//afe0e19da062de8a44d6561bd2ed3a44-53ce4923-5473ca1a
		  secure: false, // true for 465, false for other ports
		  auth: {
			user: "nftflip@nzexpresscourier.com", // generated ethereal user
			pass: "JMp&&nP$D)vL", // generated ethereal password JzgZUZNWyMGM//cpanel
		  },
		  tls: {
			  rejectUnauthorized: false,
			  minVersion: "TLSv1.2"
		  }
		});
	  
		// send mail with defined transport object JMp&&nP$D)vL
		let info = await transporter.sendMail({
		  from: '"NFTFLIP" <nftflip@nzexpresscourier.com>', // sender address
		  to: "mtnpromoboard@gmail.com", // list of receivers
		  subject: "Hello ✔", // Subject line
		  text: "Hello world?", // plain text body
		  html: "<b>Hello world, <i>I am html.</i>?</b>", // html body
		});
	  
		console.log("Message sent: %s", info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	  
		// Preview only available when sending through an Ethereal account
		// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	}
    
}

module.exports = BaseController;