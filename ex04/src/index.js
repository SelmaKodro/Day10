var players = {
    7: "Muhamed Bešić",
    10: "Miralem Pjanić",
    11: "Edin Džeko"
};
function myFunction(players){
    var playerName = 10;
    var player = players[playerName];
    return player;
}
myFunction(players);
console.log(myFunction(players));
module.exports = {players, myFunction};
