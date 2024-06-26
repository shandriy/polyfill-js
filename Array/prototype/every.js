Array.prototype.every = Array.prototype.every || function(f) {
  var len = this.length;
  for (var i = 0; i < len; i += 1) if (!f(this[i])) return false;
  return true;
}