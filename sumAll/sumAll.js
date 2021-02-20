const sumAll = function(min, max) {
  let outputSum = 0;
  switch (true) {
    case (typeof(min) !== "number"):
    case (typeof(max) !== "number"):
    case min < 0:
    case max < 0:
      return "ERROR";
  }

  if (max < min) {
    let tempMax = min;
    min = max;
    max = tempMax;
  }

  if (typeof(min) !== "number" || typeof(max) !== "number") {
    return "ERROR";
  }
  for (let i = min; i <= max; i++) {
    outputSum += i;
  } 
  return outputSum;
}

module.exports = sumAll
