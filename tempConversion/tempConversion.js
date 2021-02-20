// °F to °C	Deduct 32, then multiply by 5, then divide by 9
// °C to °F	Divide by 5, then multiply by 9, then add 32

const roundTemp = function(temp) {
  return Math.round(temp * 10) / 10;
}

const ftoc = function(temp) {
  let convert = (temp - 32) * 5 / 9;
  return roundTemp(convert); 
}

const ctof = function(temp) {
  let convert = temp / 5 * 9 + 32;
  return roundTemp(convert);
}

module.exports = {
  ftoc,
  ctof
}
