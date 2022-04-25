var validator = require('validator');
const _ = require('lodash');

let _this = this;
//
exports.empty = (data = null) => {
    return this.isEmpty(data);
}

exports.isEmpty = (data = null) => {
    let rtn = false;
    if (this.isString(data) && (data === "" || data.trim() === "")) rtn = true;
    else if (this.isNumber(data) && data === 0) rtn = true;
    else if (this.isBoolean(data) && data === false) rtn = true;
    else if (this.isObject(data) && Object.values(data).length === 0) rtn = true;
    else if (this.isArray(data) && data.length === 0) rtn = true;
    else if (this.isUndefined(data)) rtn = true;
    else if (this.isNull(data)) rtn = true;

    return rtn;
}

exports.isObject = (data = null) => {
    return (typeof data === "object" && Object.prototype.toString.call(data) === "[object Object]") ? true : false;
}

exports.isArray = (data = null) => {
    return (typeof data === "object" && Object.prototype.toString.call(data) === "[object Array]") || Array.isArray(data) ? true : false;
}

exports.isString = (data = null) => {
    return typeof data === "string";
}

exports.isNumber = (value = null) => {
    try {
        // return typeof data === "number" || /[0-9]/.test(data);
        return typeof value === 'number' && value === value && value !== Infinity && value !== -Infinity
    } catch (err) {
        return false;
    }
}

exports.isBoolean = (data = null) => {
    return (typeof data === "boolean" || data === true || data === false);
}

/**
 * Helper function that checks if supplied parameter is undefined type or not.
 * @param {any} data - Represents the data to run check on.
 * @returns {boolean} - Returns true if supplied parameter (data) is undefined or false if it's not.
 */
 exports.isUndefined = (data = null) => {
    return ((typeof data === "undefined" || data == undefined) ? true : false);
}

/**
 * Helper function that checks if supplied parameter is null type or not.
 * @param {any} data - Represents the data to run check on. Accepts international numbers too
 * @returns {boolean} - Returns true if supplied parameter (data) is a valid phone number or false if it's not.
 */
 exports.isNull = (data = null) => {
    return (data === null ? true : false);
}

/**
 * Convert all HTML entities to their applicable characters
 * @param {string} string
 * @param {string} quoteStyle
 * @returns
 *
 * Usage example: html_entity_decode('&amp;lt;');
 * returns: '&lt;'
 *
 * example 1: html_entity_decode('Kevin &amp; van Zonneveld')
 * returns 1: 'Kevin & van Zonneveld'
 *
 * example 2: html_entity_decode('&amp;lt;')
 * returns 2: '&lt;'
 */
 exports.html_entity_decode = (string, quoteStyle) => {
    let tmpStr = ''
    let entity = ''
    let symbol = ''
    tmpStr = string.toString()
    const hashMap = this.get_html_translation_table('HTML_ENTITIES', quoteStyle)
    if (hashMap === false) {
        return false
    }

    delete (hashMap['&'])
    hashMap['&'] = '&amp;'
    for (symbol in hashMap) {
        entity = hashMap[symbol]
        tmpStr = tmpStr.split(entity).join(symbol)
    }
    tmpStr = tmpStr.split('&#039;').join("'")
    return tmpStr
}

/**
 * Convert all applicable characters to HTML entities
 * @param {string} string
 * @param {string} quoteStyle
 * @param {*} charset
 * @param {*} doubleEncode
 * @returns
 *
 * htmlentities("foo'bar","ENT_QUOTES")
 * returns:  'foo&#039;bar'
 *
 * example 1: htmlentities('Kevin & van Zonneveld')
 * returns 1: 'Kevin &amp; van Zonneveld'
 *
 * example 2: htmlentities("foo'bar","ENT_QUOTES")
 * returns 2: 'foo&#039;bar'
 */
 exports.htmlentities = (string, quoteStyle, charset, doubleEncode) => {
    const hashMap = this.get_html_translation_table('HTML_ENTITIES', quoteStyle)
    string = string === null ? '' : string + ''
    if (!hashMap) {
        return false
    }
    if (quoteStyle && quoteStyle === 'ENT_QUOTES') {
        hashMap["'"] = '&#039;'
    }
    doubleEncode = doubleEncode === null || !!doubleEncode
    const regex = new RegExp('&(?:#\\d+|#x[\\da-f]+|[a-zA-Z][\\da-z]*);|[' +
        Object.keys(hashMap)
            .join('')
            // replace regexp special chars
            .replace(/([()[\]{}\-.*+?^$|/\\])/g, '\\$1') + ']',
        'g')
    return string.replace(regex, function (ent) {
        if (ent.length > 1) {
            return doubleEncode ? hashMap['&'] + ent.substr(1) : ent
        }
        return hashMap[ent]
    })
}

exports.get_valid_phone_regex = () => {
    return /^[+]?([\d]{0,3})?[\(\.\-\s]?([\d]{3})[\)\.\-\s]*([\d]{3})[\.\-\s]?([\d]{4})$/;
}

exports.get_credit_card_types = () => {
    const credit_card_types = ["Visa", "MasterCard", "American Express", "Discover"];
    return credit_card_types;
}

exports.get_genders = () => {
    const genders = {
        '': "Sex",
        'Female': "Female",
        'Male': "Male"
    };
    return genders;
}

/**
 * Parse about any English textual datetime description into a Unix timestamp
 * @param {string} datetime
 * The string to parse.
 *
 * @param {number|null} baseTimestamp [optional]
 * Default value: null The timestamp which is used as a base for the calculation of relative dates.
 *
 * @return {number|false}
 * a timestamp on success, false otherwise.
 * Use this function or import and use strtotime from /lib/php_js/strtotime.js
 */
 exports.strtotime = (datetime, baseTimestamp) => {
    return _strtotime(datetime, baseTimestamp);
}

/**
 *
 * @todo complete all use cases for function, update matches
 * @param {string} pattern
 * @param {string} subject
 * @param {*} matches
 * @param {int} flags
 * @param {int} offset
 * @returns {int|false}
 */
 exports.preg_match = (pattern, subject, matches = null, flags = 0, offset = 0) => {

    return _.toString(subject).match(pattern);
};

exports.uniqid = (prefix = "", more_entropy = false) => {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(13, "0");
    return `${prefix}${id}${more_entropy ? `.${Math.trunc(Math.random() * 100000000)}` : ""}`;
};

/**
 *
 * @todo Cover all use cases
 * @param {*} body
 * @param {*} rule
 * @returns
 */
 exports.filter_var = (body, rule) => {
    switch (rule) {
        case "FILTER_VALIDATE_EMAIL":
            return validator.isEmail(body);
        case "FILTER_SANITIZE_EMAIL":
            return validator.normalizeEmail(body);
        case "FILTER_FLAG_NO_ENCODE_QUOTES":
        // return validator.escape(body);
        default:
            return body;
    }
};

exports.randomNumberWithInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

exports.generateRandomCodes = (amount, min_length = 10, max_length = 16, characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789") => {
    const string = [];
    for (let j = 0; j < amount; j++) {
        let first_string = '';
        const random_string_length = this.randomNumberWithInterval(min_length, max_length);
        for (let i = 0; i < random_string_length; i++) {
            first_string += characters[this.randomNumberWithInterval(0, characters.length - 1)];
        }
        string.push(first_string);
    }
    return string;
}