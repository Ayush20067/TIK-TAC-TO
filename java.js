let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('.msg')
const vdodiv = document.querySelector('.win-img');
const vdo = document.querySelector('video');
const users = document.querySelector('#users');
const comps = document.querySelector('#comps');


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      play(userChoice);
      
      
    });
  });

  const compmove = () => {
    const opt = ['rock','paper','scissors','rock','paper','scissors'];
    let idx = Math.floor(Math.random()*6);
    return opt[idx];
    
  };
  const play = (userChoice) => {
    console.log('user', userChoice);
    const compcs = compmove();
    console.log('comp',compcs);

    // draw
    if(userChoice === compcs){
      drawgame(userChoice);

    }
    else{ 
      let uservin = true;
      if (userChoice === 'scissors') {
        uservin = compcs === 'paper'? true : false;
      }
    else if (userChoice === 'paper') {
        uservin = compcs === 'scissors'?false : true;
      }
      else if (userChoice === 'rock') {
        uservin = compcs === 'scissors'? true : false;
      }
      showwin(uservin);
      winres(uservin);
      
      
    };



  };
  const drawgame = (userChoice) => {
    
    
      msg.innerText = ('its a draw');
    };
  const showwin = (uservin) => {
    if(uservin == true){
      msg.innerText = ('user wins the game');
      userscore++;
      users.innerText = (userscore);
    }
    else{
      msg.innerText = ('computer wins the game');
      compscore++;
      comps.innerText = (compscore);

    }
  };
  const winres = (uservin) =>{
    if(userscore >= 1 && userscore % 10 == 0 || compscore >= 1 && compscore % 10 == 0){
      vdodiv.classList.remove('hide');
    };
    
    
    
  };


  vdo.addEventListener("click", () => {
    vdodiv.classList.add('hide');
  }
);
const random = () =>{
  let randomvds = ['e977ce1fdd046c4e79f85f275959dc921899da78_hq.gif.mp4','f7a747a5ec44853b9192030d9de2012b.gif.mp4','R.e080c601d1d6262f6c54ceb8f49a0790.gif.mp4','R.2437a79b28febe00d63eb9c203db1293.gif.mp4'];
  let vdx = Math.floor(Math.random()*4);
    return randomvds[vdx];
    
}


