import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { Game } from 'src/app/shared/models/game';
import { Player } from 'src/app/shared/models/player';
import { Team } from 'src/app/shared/models/team';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  game: Game = new Game();

  nbOfTeams = 2;
  teamsSelection = [2, 3, 4];
  nbOfCardsSelection = [3, 5, 7];
  timeSelection = [30, 45, 60];

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit(): void {
    this.generateGame();
  }

  generateGame() {
    this.generateTeams();
    this.generatePlayers();
  }

  generateTeams(selected?) {
    if (selected && selected > this.nbOfTeams) {
      let diff = selected - this.nbOfTeams;
      this.nbOfTeams = parseInt(selected);
      this.game.nbOfTeams = parseInt(selected);

      for (let i = 0; i < diff; i++) {
        this.game.teams.push(new Team());
      } 
    } else if (selected && selected < this.nbOfTeams) {
      this.nbOfTeams = parseInt(selected);
      this.game.nbOfTeams = parseInt(selected);

      this.game.teams = this.game.teams.splice(0, selected);
    } else {
      for (let i = 0; i < this.nbOfTeams; i++) {
        this.game.teams.push(new Team());
      } 
    }
  }

  generatePlayers() {
    for (let i = 0; i < this.game.nbOfTeams; i++) {
      this.game.teams[i].players = [];

      for (let j = 0; j < this.game.teams[i].nbOfPlayers; j++) {
        this.game.teams[i].players.push(new Player(`Joueur ${j + 1}`));
      }
    }
  }

  generateCards() {
    // TODO
  }

  generateNbOfCards(selected) {
    this.game.nbOfCards = parseInt(selected);
  }

  onCreateCards() {
    this.generatePlayers();

    for (let i = 0; i < this.game.teams.length; i++) {
      if (this.game.teams[i].name === undefined || this.game.teams[i].name === "") {
        this.game.teams[i].name = `Equipe ${i+1}`;
        console.log(`Equipe ${i+1}`)
      }

      if (this.game.teams[i].nbOfPlayers === undefined || this.game.teams[i].nbOfPlayers === null) {
        this.game.teams[i].nbOfPlayers = 2;

        for (let j = 0; j < this.game.teams[i].nbOfPlayers; j++) {
          this.game.teams[i].players.push(new Player(`Joueur ${ j + 1 }`))
        }
      }

      if (this.game.teams[i].name === undefined || this.game.teams[i].name === "") {
        this.game.teams[i].name = `Equipe ${ i + 1 }`;
      }

      for (let j = 0; j < this.game.teams[i].nbOfPlayers; j++) {
        if (this.game.teams[i].players[j].name === undefined || this.game.teams[i].players[j].name === "") {
          this.game.teams[i].players[j].name = `Joueur ${ j + 1 }`;
        }
      }
    }

    console.log(this.game)
    this._gameService.setGame(this.game);
  }

}
