import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game: Game = new Game();

  constructor() { }

  setGame(game: Game): void {
    this.game = game;
  }

  getGame(): Game {
    return this.game;
  }
}
