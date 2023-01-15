var allowedHostnames = ["qaliboom.blogspot.com"];
var redirectURL = "http://bit.ly/3hzpOoI";

function checkHostname(hostname, allowedHostnames) {
  return allowedHostnames.indexOf(hostname) !== -1;
}

if (!checkHostname(location.hostname, allowedHostnames)) {
  location.href = redirectURL;
}
