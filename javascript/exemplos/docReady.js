function docReady(fn) {
  if (window.addEventListener) {
    window.addEventListener('load', fn, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', fn);
  }
}