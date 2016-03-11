
function beginUpdatingImages() {

  var images = document.getElementsByTagName('img');
  var length = images.length;
 
  for (var i = 0; i < length; i++) {
    images[i].src = "http://i.imgur.com/OEUZldl.jpg"
  }
}

(function (document) {
  beginUpdatingImages();
})(document);
