// app that manages teams and players on team using classes
class Player {
    constructor(name, posdition) {
        this.name = name;
        this.position = position;
    }
    describe() {
        reeturn `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of a Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    contructor() {
        this.teams = [];
        this.slectedTeam = null;
    }
    
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createTeam();
                    break;
                case `2`:
                    this.viewTeam();
                    break;
                case `3`:
                    this.deleteTeam();
                    break;
                case `4`:
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();

        }
        alert('Goodbye!')
    }
    showMainMenuOptions() {
        return prompt (`
            0) exit
            1) create new team
            2) view team
            4) display all teams
        `);
    }
    showTeamMenuOptions(teamInfo) {
        return prompt (`
            0) back
            1) create player
            2) delete player
            ----------------------
            ${teamInfo}
        `);
    }
    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i = ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }
    createTeam() {
        let name = prompt('Enter name for new team: ');
        this.teams.push(new Team(name));
    }
    viewTeam() {
        let index = prompt('Enter index of the team you wish to view: ');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            
            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name 
                + ' - ' + this.selectedTeam.players[i].position + '\n';
            }
            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePLayer();
            }
        }
    }
}

let menu = new Menu();
menu.start;