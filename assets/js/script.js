$(document).ready(function(){
 
$ajax({
    "url":"https://jsonplaceholder.typicode.com/users",
    method:"get",
    success:function(data){
        console.log(data);
    },
    error:function(data){
        console.log(data);
    }

})

  
});