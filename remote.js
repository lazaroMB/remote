document.addEventListener("deviceready", function(){
  var app = $('#app');
  var number1 = $('<input type="number" name="number1"/>');
  var number2 = $('<input type="number" name="number2"/>');
  var button = $('<button>SUM</button>');
  app.append(number1);
  app.append(number2);
  app.append(button);
});
