var fs = require("fs");
var moment = require("moment");

var reqTrace = function(opts) {

	var defaultOpt = {
		console: true,
		appendFile: true,
		dist: "./log.txt"
	}

    if (opts) defaultOpt = extend(defaultOpt, opts);

	/**
	 *	 对象继承
	 */
	function extend (target, source) {	
		for (var i in target) {
			if (typeof source[i] != 'undefined') {
				target[i] = source[i];
			}
		}
		return target;
	}

	/**
	 *	 获取客户端ip
	 */
	function getClientIp(request) {
		var ipReg = /([\d]{1,3}.){3}[\d]{1,3}/g;
	    var ips;
	    try {
	        var clientIP = request.headers['x-forwarded-for'] ||
                request.connection.remoteAddress ||
                request.socket.remoteAddress || request.connection.socket.remoteAddress;
	        ips = ipReg.exec(clientIP);
	    } catch (err) {
	        ips = null;
	    }
	    return ips && ips[0];
	}

    return function * (next) {

		var ip = getClientIp(this.req) || null;

        var requestUrl = this.request.url;

        var logText = moment().format("YYYY-MM-DD HH:mm:ss") + " ==> " + ip + " ==> " + this.request.url;

        if (defaultOpt.console) {
        	console.log(logText);
        }

        if (defaultOpt.appendFile) {
	        require('fs').appendFile(defaultOpt.dist, logText + "\n", function () {});
        }
        yield next;
	}
}

module.exports = reqTrace;