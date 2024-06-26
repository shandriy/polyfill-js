Array.prototype.at = Array.prototype.at || function(i) {
  if (typeof i !== "number" || isNaN(i)) {
    return this[0];
  }
  var neg = i < 0;
  i = Math.floor(Math.abs(i));
  if (neg) {
    return this[this.length - i];
  } else {
    return this[i];
  }
}