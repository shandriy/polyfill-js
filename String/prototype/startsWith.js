String.prototype.startsWith = String.prototype.startsWith || function(s, i) {
  if (typeof i !== "number" || isNaN(i)) i = 0;
  return s === this.substring(i, i + s.length);
}