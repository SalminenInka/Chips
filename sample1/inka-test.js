function rps(wep) {
  let game = '';
  let compwep = '';
  const chooser = Math.floor((Math.random() * 31) + 1);
  if (chooser < 11) {
    compwep = 'Rock';
  } else if (chooser < 21) {
    compwep = 'Paper';
  } else {
    compwep = 'Scissors';
  }
  if (wep === compwep) {
    game = 'Tie.';
  } else if (compwep === 'Rock' && wep === 'Scissors') {
    game = `${compwep} wins ${wep}.`;
  } else if (compwep === 'Paper' && wep === 'Rock') {
    game = `${compwep} wins ${wep}.`;
  } else if (compwep === 'Scissors' && wep === 'Paper') {
    game = `${compwep} wins ${wep}.`;
  } else if (wep === 'Rock' && compwep === 'Scissors') {
    game = `${compwep} wins ${wep}.`;
  } else if (wep === 'Paper' && compwep === 'Rock') {
    game = `${compwep} wins ${wep}.`;
  } else if (wep === 'Scissors' && compwep === 'Paper') {
    game = `${compwep} wins ${wep}.`;
  }
  return game;
}
console.log(rps('Rock'));
