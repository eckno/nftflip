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

	static setUserSession(req, session_data) {
		if (req && session_data) {
			req.session.users = {...req.session.users, ...session_data};
			req.session.save();
		}
	}

	//
	async send_email(subj, to_, template)
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
		  to: to_, // list of receivers
		  subject: subj, // Subject line
		  text: "", // plain text body
		  html: template, // html body
		});
	  
		console.log("Message sent: %s", info.messageId);
	}
    
}

module.exports = BaseController;