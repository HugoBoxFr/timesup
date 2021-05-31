import { Team } from "./team";

export class Game {
    nbOfCards: number = 3;
    time: number = 30;
    nbOfTeams: number = 2;
    teams: Team[] = [];
}
