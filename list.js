  var world = []
world[0] = "England";
world[1] = "Malaysia";
world[2] = "South Africa";
world[3] = "Belgium";
world[4] = "Netherlands";
world[5] = "Denmark";
world[6] = "Spain";
world[7] = "Colombia";
world[8] = "Canada";

function World() {
    var randomWorld = Math.floor(Math.random()*(world.length));
    document.getElementById('pworld').innerHTML = world[randomWorld];
}