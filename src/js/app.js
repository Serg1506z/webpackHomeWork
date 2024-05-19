import "../css/style.css"
import {Game, GameSavingData, readGameSaving, writeGameSaving} from "./Game.js";
const loadGame = readGameSaving
const saveGame = writeGameSaving
const game = new Game();
game.start();