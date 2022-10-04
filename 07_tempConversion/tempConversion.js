const ftoc = function(degF) {
  let degC = (degF - 32) * (5/9);

  let rounded = Math.round(degC * 10) / 10;

  return rounded;
};

const ctof = function(degC) {
  let degF = (degC * 9/5) + 32;

  let rounded = Math.round(degF * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
