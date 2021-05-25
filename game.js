var startBtn = document.querySelector("#startBtn");
var info = document.querySelector(".info");
var team1Div = document.querySelector(".team1");
var team2Div = document.querySelector(".team2");
var activeTeam = null;
var activePlayer = null;
var team1Score = document.querySelector(".team1Score");
var team2Score = document.querySelector(".team2Score");
startBtn.addEventListener("click",game);

function game() {
    this.style.display = "none";
    info.innerHTML = "Skok za loptu";
    skokZaLoptu()
    setTimeout(() => {
        changePossesion();
    }, 1000);
}

function changePossesion(){
        displaySemafor();
        team1Div.style.backgroundColor = "#333";
        team2Div.style.backgroundColor = "#333";
        currentPlayer()
        selectActiveDiv()
        displayGame()
        dodavanje()
}

function skokZaLoptu() {
    var rand = Math.random();
    console.log(rand)
    if (rand<0.5) {
        console.log("1")
        activeTeam = team1.members;
    }else{
        console.log("2")
        activeTeam = team2.members;
    }
}

function selectActiveDiv(){
    if(activeTeam[0].team == "team1"){
        team1Div.style.backgroundColor = "green";
        info.innerHTML = "Team1 ima loptu"
        info.innerHTML += `<p>${activePlayer.name} ima loptu</p>`
    }else{
        team2Div.style.backgroundColor = "green";
        info.innerHTML = "Team2 ima loptu"
        info.innerHTML += `<p>${activePlayer.name} ima loptu</p>`
    }
}

function currentPlayer(){
    var cp = activeTeam[Math.floor(Math.random()*3)];
    cp.active = true;
    activePlayer = cp;
}

function displayGame(){
    team1Div.innerHTML = team1.showStatistic();
    team2Div.innerHTML = team2.showStatistic();
}

function dodavanje() {
    let rand = Math.floor(Math.random()*(5-3)+3);
    function dodaj() {
        rand --;
        if(rand>0){
            setTimeout(() => {
                let randomPlayer = activeTeam[Math.floor(Math.random() * 3)];
                let msg = "";
                if (randomPlayer.name == activePlayer.name) {
                    msg = `${randomPlayer.name} i dalje ima loptu`
                }else{
                    msg = `${activePlayer.name} je dodao ${randomPlayer.name}`;
                    randomPlayer.active = true;
                    activePlayer.active = null;
                    activePlayer = randomPlayer;
                }
                info.innerHTML = `<h3>${msg}</h3>`;
                displayGame();
                dodaj();
            }, 2000);
        } else{
            setTimeout(() => {
                info.innerHTML = activePlayer.shoot();
                activePlayer.active = null;
                setTimeout(() => {
                    (activeTeam[0].team == "team1") ? activeTeam = team2.members : activeTeam = team1.members;
                    console.log(activeTeam);
                    changePossesion();
                }, 2000);
            }, 2000);

            setTimeout(() => {
                info.innerHTML = activePlayer.name+" sutira";
            }, 1000);
        }
    }
    dodaj();
}

function displaySemafor(){
    team1Score.innerHTML = team1.score;
    team2Score.innerHTML = team2.score;
}