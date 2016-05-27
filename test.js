/**
 * Created by kelen on 5/25 0025.
 */

var opts = {
	console: false,
	dist: "asdadsa"
}

var defaultOpt = {
    console: true,
    appendFile: true,
    dist: "./",
    fileName: "log.txt"
}


function extend (target, source) {	
	for (var i in target) {
		if (typeof source[i] != 'undefined') {
			target[i] = source[i];
		}
	}
	return target;
}

console.log(extend(defaultOpt, opts));