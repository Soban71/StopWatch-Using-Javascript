var timerms=0;
var timers=0;
var timermin=0;
var timer=false;

function startwatch(){
	timer=true;
	updatetime();

}

function reset(){
  timer=false;
  var timerms=0;
var timers=0;
var timermin=0;
 document.getElementById('timerms').innerHTML='00';
 document.getElementById('timers').innerHTML='00';
 document.getElementById('timermin').innerHTML='00';
}

function stop(){

  timer=false;
  if (timers <=9) {
        timers= '0'+timers;
      }
}

function updatetime(){


   if (timer==true) {
     timerms=timerms+1;

    
     if (timerms > 99) {
      timers=timers+1;
      timerms=0;
     }
     if (timers > 60) {
      timermin=timermin+1;
      timers=0;
     }

     var millisecond=timerms;
     var seconds=timers;
     var mintues=timermin;
      if (timerms < 10) {
        millisecond= "0"+millisecond;
      }

      else if (timers < 10) {
        seconds= "0"+seconds;
      }
       else if (timers < 60) {
        mintues= "0"+mintues;
      }



     document.getElementById('timerms').innerHTML=millisecond;
            document.getElementById('timers').innerHTML=seconds;
document.getElementById('timermin').innerHTML=mintues;
   	setTimeout("updatetime()",10)
   }

}