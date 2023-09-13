/* window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
  }
};
 */

window.onload = function (){
  const startButton = document.getElementById('start-button')
  let game

  function startGame(){
    console.log('Hola Elisa')
    game = new Game()
    game.start()
  }

  startButton.addEventListener('click', function(){
    startGame()
    
  })
}