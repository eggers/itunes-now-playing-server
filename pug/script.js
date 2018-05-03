function resizeArtist() {
  console.log('resizeArtist');
  var artistElem = document.getElementById('artist');
  artistElem.style.display = "inline";
  var w1 = artistElem.offsetWidth;
  var w2 = window.innerWidth;
  var h1 = artistElem.offsetHeight;
  var h2 = window.innerHeight;
  var ratio = Math.min(w2/w1*0.9, h2/h1*0.45);
  artistElem.style.transform = "scale(" + ratio + ", " + ratio + ")";
  artistElem.style.display = "block";
  loadLater();

}

function loadLater() {
  window.setTimeout(loadNow, 5000);
}

function loadNow() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'get_track_info');
  xhr.send(null);
  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        var obj = JSON.parse(xhr.responseText);
        processResponse(obj);
      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  };
}

function processResponse(obj) {
  if (obj.title.trim().substr(0,5) === '2 sec') {
    console.log('spacer');
  } else {
    for (var key of Object.keys(obj)) {
      var elem = document.getElementById(key);
      if (!elem || elem.innerHTML == obj[key]) {
        continue;
      }
      elem.innerHTML = obj[key];
    }
  }
  resizeArtist();
}



window.onload = resizeArtist;
