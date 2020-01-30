$(document).ready(function()
{
  function getDomainCookie(t) {
    var e = t.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/)
      , n = t.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,24}$/i)
      , r = t.match(/localhost/);
    if (n && n.length > 0) {
        var i = t.split(".").reverse();
        return i.length >= 3 && i[1].match(/^(com|edu|gov|net|mil|org|nom|co|ac|name|info|biz)$/i) ? i[2] + "." + i[1] + "." + i[0] : i[1] + "." + i[0]
    }
    if (e && e.length > 0)
        return e[0];
    if (r && r.length > 0)
        return "localhost";
    throw "No domain can be found for cookies"
  }

  function setCookie(name, value, expires, domain) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + expires + "; domain=" + domain + "; path=/"
  }

  var domain = getDomainCookie(window.location.hostname)
  var expiry = (r = new Date,
              r.setFullYear(r.getFullYear() + 3),
              r.toUTCString())

  // on document load....
  setCookie("my-test", "123|abc", expiry, domain)
  alert('hola');
});
