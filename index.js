window.onload = function() {
    let timesRun = 0;
    setInterval(function() {
        timesRun += 1;
        if(timesRun < 8){
            confetti({
    particleCount: 300,
    spread: 70,
    origin: { y: 0.6 }
  });
} else{
    return;
}
    }, 1000);

};