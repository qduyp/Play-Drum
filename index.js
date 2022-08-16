for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var theNote = this.className[0];
    playSound(theNote);
    animation(theNote);
  })
}

document.addEventListener('keydown', e => {
  var theNote = e.key;
  playSound(theNote);
  animation(theNote);
})

function playSound(note){
  var sound;
  switch(note){
    case 'w' : sound = new Audio('sounds/tom-1.mp3');
    break;

    case 'a' : sound = new Audio('sounds/tom-2.mp3');
    break;

    case 's' : sound = new Audio('sounds/tom-3.mp3');
    break;

    case 'd' : sound = new Audio('sounds/tom-4.mp3');
    break;

    case 'j' : sound = new Audio('sounds/crash.mp3');
    break;

    case 'k' : sound = new Audio('sounds/kick-bass.mp3');
    break;

    case 'l' : sound = new Audio('sounds/snare.mp3');
    break;

    default: sound = new Audio('sounds/silence.mp3');
    break;
  }
  return sound.play()
}

function animation(note){
  document.querySelector("."+note).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+note).classList.remove("pressed");
  }, 50);
}
