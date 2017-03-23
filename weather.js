$(document).ready(function(){
    
    $("#submitCity").click(function(){
        
        return getWeather();
        
        
    });
    
});

function getWeather()
{
    var city=$("#city").val();
    if(city != '')
        {
          $.ajax({
              
             url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +"&units=metric" + "&APPID=3dc9a29630ee9a892dcd672335bf6e6b" ,
              type: "GET" ,
              dataType: "jsonp",
              success : function(data)
              {
                  var widget=showResults(data);
                  $("#showWeather").html(widget);
                  $("#city").val('');
                  
              }
          });  
        }
    else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City Field Cannot Be Empty</div>");
    }
}
function showResults(data)
{
     return '<h2 style="font-weight:bold; font-size:30px;padding-top:30px; " class="text-center">Current weather for '+data.name+','+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong> : " +data.weather[0].main+ "</h3>"+
            "<h3 style='padding-left:40px;'><strong>Weather description</strong> :<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></img> " +data.weather[0].description+ "</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temparature</strong> : " +data.main.temp+ "&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure </strong>: " +data.main.pressure+ " hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity </strong>: " +data.main.humidity+ " %</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature </strong>: " +data.main.temp_min+ " &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong> : " +data.main.temp_max+ " &deg;C</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind speed </strong>: " +data.wind.speed+ " m/s</h3>"
;
        
}