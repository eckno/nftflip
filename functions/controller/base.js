const _ = require('lodash');
const {empty, isObject, isString} = require("../lib/utils/utils");
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
    
}

module.exports = BaseController;