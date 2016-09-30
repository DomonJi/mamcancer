var dpr = window.devicePixelRatio || 1;
var width = document.documentElement.clientWidth * dpr;
var height = document.documentElement.clientHeight * dpr;
var $ = require('jquery')
// require('./rem.js');
require('../postcss/index.css');
let $videoa = $('#videoa')
var ua = navigator.userAgent.toLowerCase();
if (/iphone|ipad|ipod/.test(ua)) {
  var $vide = $('#video')
  var video = document.getElementById('video');
  $videoa.remove()
} else {
  $('#video').remove()
  var $video = $('#videoa')
  var video = document.getElementById('videoa');
}
window.onload = function() {
  document.body.style.display = 'block';
  var audio = document.getElementById('audio');
  // let $video = $('#video')
  var w = width / 640.0;
  var h = height / 1045.0;
  let $img = $('.img')
  // if (/iphone|ipad|ipod/.test(ua)) {
  //   $video.attr('src', '../assets/source3.mp4');
  //   audio.play()
  //   video.play()
  // } else {}
  // video.play();
  // setTimeout(function() {
  //     setInterval(function() {
  //         if (audio.volume > 0.06)
  //             audio.volume -= 0.02;
  //     }, 100);
  // }, 46000);
  video.addEventListener('ended', function(e) {
    setTimeout(function() {
      $img.show()
      $video.remove()
      if (/iphone|ipad|ipod/.test(ua)) {} else {
        audio.play();
      }
      // window.location.href = "http://woman.disoul.me";
      // document.getElementById('btn').style.opacity = 1;
    }, 400);
  });
  video.addEventListener('timeupdate', function(e) {
    if (e.target.currentTime > 40) {
      // window.location.href = "http://woman.disoul.me";
      $img.show()
      $video.remove()
    }
  });
  if (/iphone|ipad|ipod/.test(ua)) {
    audio.play();
  }
  video.play();
  setTimeout(function() {
    scaleToFill(video);
  }, 10)
}

function check() {
  if ($video.currentTime >= 42) {
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
