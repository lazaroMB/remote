document.addEventListener("deviceready", function(){
  var app = $('#app');
  var number1 = $('<input type="number" name="number1"/>');
  var number2 = $('<input type="number" name="number2"/>');
  var button = $('<button>SUM</button>');
  var picture = $('<button>Take picture</button>');

  button.on('click', function () {
    alert(parseInt(number1.val()) + parseInt(number2.val()));
  });

  picture.on('click', function () {
    navigator.camera.getPicture(function (imageURI) {
      alert('success');
    }, function () {
      alert('Error');
    })
  });

  app.append(number1);
  app.append(number2);
  app.append(button);
  app.append(picture);
});
