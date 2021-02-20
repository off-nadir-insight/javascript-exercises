const repeatString = function(str, num) {
	let outputStr = '';
	if (num < 0) {
		return 'ERROR';
}	
	for (num; num > 0; num--) {
		outputStr += str;
	}	
	return outputStr;
}
repeatString('hey', 3);
module.exports = repeatString
