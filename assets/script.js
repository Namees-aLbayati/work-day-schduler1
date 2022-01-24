var PresentTime=$('#currentDay');
function gettimenow(){
  var current=  moment().format('LLLL'); // Monday, January 24, 2022 11:10 AM
    PresentTime.text(current);
}
setInterval(gettimenow,1000);
var hour=moment().hour();
for (var i=8;i<18 ;i++){
    if (i>hour){
$('#i').addClass("future");

    }else if (i===hour){
        $('#i').addClass("now")
    }else{
        $('#i').addClass("timeago");
    }
    }

$('#save').click(function (){
var eight=localStorage.setItem('p8',$('#8').val());
var a=localStorage.getItem('p8')
console.log(a)
});