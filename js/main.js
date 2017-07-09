var zipCode = prompt("What is your zipcode");

$.ajax ({
  method: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
  success: function(response) {
    var div = $('<div id="main"></div>');
    div.append('<h3>' + response.name + '</h3>')
    div.append('<p id="currentTemp">' + response.main.temp + '</p>');
    div.append('<p id="description">' + response.weather[0].main + '</p>');
    var day = $('<div id="day"></div>');
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayName = weekday[d.getDay()];
    day.append('<span id="dayName">'+ dayName + ' '+ '</span><span id="today">Today</span>');
    var highAndLow = $('<div id="highLow"></div>');
    highAndLow.append('<span id="min">'+ response.main.temp_max + ' '+ '</span><span id="max">'+ response.main.temp_min + '</span>');
    $('body').append(div);
    $('body').append(day);
    $('body').append(highAndLow);


  }
})
