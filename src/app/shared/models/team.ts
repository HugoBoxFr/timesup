import { Player } from "./player";

export class Team {
    name: string;
    nbOfPlayers: number;
    points: number = 0;
    players: Player[];
}
