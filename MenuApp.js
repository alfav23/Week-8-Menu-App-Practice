// app that manages teams and players on team using classes
// CLASS FOR DIFFERENT PLAYERS WITH PROPERTIES OF NAME AND POSITION ON TEAM
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
// METHOD TO DESCRIBE PLAYER NAME AND POSITION
    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}
// CLASS FOR DIFFERENT TEAMS REFERENCING AN ARRAY -- EMPTY RIGHT NOW -- OF PLAYERS THAT CAN BE INCLUDED ON A TEAM
class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
// METHOD WITHIN TEAM CLASS TO ADD A PLAYER TO CURRENTLY EMPTY ARRAY OF PLAYERS
    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of a Player. Argument is not a player: ${player}`);
        }
    }
// METHOD TO DESCRIBE TEAM NAME AND HOW MANY PLAYERS ARE ON THE TEAM
    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}
// MENU CLASS WITH AN ARRAY OF DIFFERENT TEAMS AND ABILITY TO SELECT A TEAM, STARTING WITH NO TEAM SELECTED (NULL)
class Menu {
    contructor() {
        this.teams = [];
        this.slectedTeam = null;
    }
// METHOD TO CREATE SWITCH BASED ON USER INPUT FROM PROMPT FROM SHOW MAIN MENU OPTIONS METHOD
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
    // ALERT THAT USER WILL SEE IF EXITING (SELECTS 0 OR ANYTHING ELSE BESIDES 1-4)
        alert('Goodbye!')
    }
    // METHOD TO PROMPT USER TO INPUT A VALUE BASED ON DESIRED ACTION
    showMainMenuOptions() {
        return prompt (`
            0) exit
            1) create new team
            2) view team
            4) display all teams
        `);
    }
    // METHOD THAT PASSES IN INFORMATION ABOUT A TEAM AND PROMPTS USER TO MAKE A SELECTION BASES ON A DESIRED ACTION
    showTeamMenuOptions(teamInfo) {
        return prompt (`
            0) back
            1) create player
            2) delete player
            ----------------------
            ${teamInfo}
        `);
    }
    // METHOD THAT DISPLAYS ALL TEAMS WITHIN TEAMS ARRAY WHICH IS CURRENTLY EMPTY BUT CAN BE ADDED TO
    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i = ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }
    // METHOD TO CREATE NEW TEAM AND PROMPTS USER TO GIVE NEW TEAM A NAME AND THEN PUSHES TEAM NAME TO TEAM ARRAY
    createTeam() {
        let name = prompt('Enter name for new team: ');
        this.teams.push(new Team(name));
    }
    // METHOD TO VIEW DESIRED TEAM BASED ON USER INPUT OF INDEX OF DESIRED TEAM
    // INCLUDES VALIDATION OF INPUT TO AVOID USER ERROR (ENSURES USER WILL SELECT A TEAM THAT EXISTS ON THE ARRAY)
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
// CREATING OBJECT FROM CLASS SO AS TO EXECUTE "BLUEPRINT"
let menu = new Menu();
// CALLING START METHOD FROM MENU CLASS TO SHOW USER PROMPT
menu.start();