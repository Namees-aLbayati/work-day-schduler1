// show current hour in the header section
var PresentTime=$('#currentDay');
function gettimenow(){
  var current=  moment().format('LLLL'); // Monday, January 24, 2022 11:10 AM
    PresentTime.text(current);
}
setInterval(gettimenow,1000);

// creat different classes to show the past hours ,current hour and future hours 
// using for loop to check the hours if its equal or greater than the current hour or less than it
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
    // when the user clicked save button for each hour,function bellow will be excute 
    // using local storage to save the key and the value to each hour 
    // the first step:i bring the value that i wroted inside textarea 
    // set the value of textarea using localstorage set iteam to save the value when the user will reload the page,the website call another function to get the value that we set before


$('.save').click(function (){
    var eight=$("#8").val();
localStorage.setItem('eight',eight);
console.log('eight',eight)
var nine=$("#9").val();
localStorage.setItem('nine',nine);
console.log(nine)
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
var get8=localStorage.getItem('eight');
var get9=localStorage.getItem('nine');
var get10=localStorage.getItem('ten');
var get11=localStorage.getItem('eleven');
var get12=localStorage.getItem('twelv');
var get13=localStorage.getItem('thirteen');
var get14=localStorage.getItem('fourten');
var get15=localStorage.getItem('fiften');
var get16=localStorage.getItem('sixten');
var get17=localStorage.getItem('seventen');
var get18=localStorage.getItem('eighten');
// push  getiteam value to text area after reload the page
$("#8").val(get8);
$("#9").val(get9);
$("#10").val(get10);
$("#11").val(get11);
$("#12").val(get12);
$("#13").val(get13);
$("#14").val(get14);
$("#15").val(get15);
$("#16").val(get16);
$("#17").val(get17);
$("#18").val(get18);

};
// clear the plann for each hour using clear button
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

