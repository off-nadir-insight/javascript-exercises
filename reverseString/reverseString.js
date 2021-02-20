const reverseString = function(str) {
  charArray = str.split(''); 
  const reverseCharArray = [];

  for (let i = 0; i < charArray.length; i++) {
    reverseCharArray.unshift(charArray[i]);
  }
  return reverseCharArray.join('');
}

module.exports = reverseString;
