var dpr = window.devicePixelRatio || 1;
var width = document.documentElement.clientWidth * dpr;
var height = document.documentElement.clientHeight * dpr;
var $ = require('jquery')
// require('./rem.js');
require('../postcss/index.css');

window.onload = function() {
  document.body.style.display = 'block';
  var video = document.getElementById('video');
  var audio = document.getElementById('audio');
  var w = width / 640.0;
  var h = height / 1045.0;
  let $img = $('.img');
  // video.play();
  setTimeout(function() {
    setInterval(function() {
      if (audio.volume > 0.06)
        audio.volume -= 0.02;
      }
    , 100);
  }, 46000);
  video.addEventListener('ended', function(e) {
    setTimeout(function() {
      $img.show();
      // window.location.href = "http://woman.disoul.me";
      document.getElementById('btn').style.opacity = 1;
    }, 750);
  });
  video.addEventListener('timeupdate', function(e) {
    if (e.target.currentTime > 51) {
      // window.location.href = "http://woman.disoul.me";
      $img.show();
    }
  });
  scaleToFill(video);
  video.play();
  audio.play();
}

function check() {
  if (video.currentTime >= 52) {
    // window.location.href = "http://woman.disoul.me";
  }
  requestAnimationFrame(check);
}

function scaleToFill(videoTag) {
  var $video = $(videoTag),
    videoRatio = videoTag.videoWidth / videoTag.videoHeight,
    tagRatio = $video.width() / $video.height();
  if (videoRatio < tagRatio) {
    $video.css('-webkit-transform', 'scaleX(' + tagRatio / videoRatio + ')')
  } else if (tagRatio < videoRatio) {
    $video.css('-webkit-transform', 'scaleY(' + videoRatio / tagRatio + ')')
  }
}
requestAnimationFrame(check);
