$('button').on('click',function () {
  var city = $('input').val();
  $.ajax({
    url : 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&APPID=4107107b714e7fcf4f10d5b924aa5292',
    dataType : 'json'
  })
  .done(function (res) {
    console.log(res);
    var text = '<h2>City : '+res.name+'</h2>'
    text += '<h3>Description : '+res.weather[0].main+'</h3>'
    text += '<h3>Temperature : '+res.main.temp+' &#8451</h3>'
    text += '<h3>Max : '+res.main.temp_max+' &#8451</h3>'
    text += '<h3>Min : '+res.main.temp_min+' &#8451</h3>'
    text += '<h3>Humidity : '+res.main.humidity+' %</h3>'
    text += '<h3>Pressure : '+res.main.pressure+' hPa</h3>'
    text += '<h3>Wind : '+res.wind.speed+' km/h</h3>'
    $('#display').html(text);

    if (res.weather[0].main === 'Clear') {
      $('body').addClass('clear');
    } else if (res.weather[0].main === 'Clouds') {
      $('body').addClass('clouds');
    } else if (res.weather[0].main === 'Rain') {
      $('body').addClass('rain');
    } else if (res.weather[0].main === 'Snow') {
      $('body').addClass('snow');
    }
    $('.form-control').val('');
  })
})
