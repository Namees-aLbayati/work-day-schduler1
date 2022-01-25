var PresentTime=$('#currentDay');
function gettimenow(){
  var current=  moment().format('LLLL'); // Monday, January 24, 2022 11:10 AM
    PresentTime.text(current);
}
setInterval(gettimenow,1000);
var hour=moment().hour();
for (var i=8;i<18 ;i++){
    if (i > hour){
$('#'+i).addClass("future");

    }else if (i === hour){
        $('#'+i).addClass("now")
    }else{
        $('#'+i).addClass("timeAgo");
    }
    };

$('#save').click(function (){
    var eight=$("#8").val();
localStorage.setItem('eight',eight);
var nine=$("#9").val();
localStorage.setItem('nine',nine);
var ten=$('#10').val();
localStorage.setItem('ten',ten);
var eleven=$('#11').val();
localStorage.setItem('eleven',eleven);
var twelv=$('#12').val();
localStorage.setItem('twelv',twelv);
var th=$('#13').val();
localStorage.setItem('thirteen',th);
var ft=$('#14').val();
localStorage.setItem('fourten',ft);
var fft=$('#15').val();
localStorage.setItem('fiften',fft);
var st=$('#16').val();
localStorage.setItem('sixten',st);
var svt=$('#17').val();
localStorage.setItem('seventen',svt);
var et=$('#18').val();
localStorage.setItem('eighten',et);
alert('saved')
});
window.onload = getiteams();
function getiteams(){
var l=localStorage.getItem('eight')
$('#8').val(l);
var a=localStorage.getItem('nine');
$('#9').val(a);
$('#10').val(localStorage.getItem('ten'));
$('#11').val(localStorage.getItem('eleven'));

$('#12').val(localStorage.getItem('twelv'));

$('#13').val(localStorage.getItem('thirteen'));
$('#14').val(localStorage.getItem('fourten'));

$('#15').val(localStorage.getItem('fiften'));

$('#16').val(localStorage.getItem('sixten'));

$('#17').val(localStorage.getItem('seventen'));
$('#18').val(localStorage.getItem('eighten'));

};
$('#clear8').click(() => { 
    $('#8').val('');

})
$('#clear9').click(() => { 
    $('#9').val('');

})
$('#clear10').click(() => { 
    $('#10').val('');

})
$('#clear11').click(() => { 
    $('#11').val('');

})
$('#clear12').click(() => { 
    $('#12').val('');

})
$('#clear13').click(() => { 
    $('#13').val('');

})
$('#clear14').click(() => { 
    $('#14').val('');

})
$('#clear15').click(() => { 
    $('#15').val('');

})
$('#clear16').click(() => { 
    $('#16').val('');

})
$('#clear17').click(() => { 
    $('#17').val('');

})
$('#clear18').click(() => { 
    $('#18').val('');

});

