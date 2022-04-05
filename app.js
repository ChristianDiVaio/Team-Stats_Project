const team = {
  _players: [ 
   {firstName: 'Peter', lastName: 'Das', age: 23},
   {firstName: 'Alistair', lastName: 'Jackson', age: 24},
   {firstName: 'John', lastName: 'Smith', age: 26},
  ],
  _games: [
    {opponent: 'Knicks', teamPoints: '54', opponentPoints: 23},
    {opponent: 'Lakers', teamPoints: '45', opponentPoints: 25},
    {opponent: 'Charlotte', teamPoints: '24', opponentPoints: 42},
  ],

get players(){
    return this._players; 
    },
get games(){
    return this._games;
    },

addPlayer(newFirstName, newLastName, newAge){
  let player = {
    firstName: newFirstName,  
    lastName: newLastName,
    age: newAge,
    };
    this.players.push(player);
},

addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints,
  };
  this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);










