$(document).ready(function(){
    

   $("button").click(function(e){
    e.preventDefault();
    let value = $("input").val();
    console.log(value);
    let select = document.querySelector("option");
    console.log(select.value);
   
    $.ajax({
        url:`https://api.weatherapi.com/v1/current.json?key=1111c6a4132043c4ad3131917231903&q=${value}`,
        method:"get",
        success:function(data){
            console.log(data);
            document.getElementById("city").innerText=data.location.name;
            document.getElementById("country").innerText=data.location.country;
            document.getElementById("weather").innerText=data.current.temp_c;
            document.getElementById("sky").innerText=data.current.condition.text;
    
            
        },
        error:function(data){
            console.log(data);
        }
    })
   })
})