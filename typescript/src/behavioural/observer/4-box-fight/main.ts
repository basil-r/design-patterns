import { BoxFight } from "./concrete/box-fight";
import { ConservativePlayer } from "./concrete/conservative-player";
import { RiskyPlayer } from "./concrete/risky-player";

const boxFight = new BoxFight();

const riskyPlayer = new RiskyPlayer();
const conservativePlayer = new ConservativePlayer();

boxFight.attachObserver(riskyPlayer);
boxFight.attachObserver(conservativePlayer);

boxFight.nextRound();
boxFight.nextRound();
boxFight.nextRound();
boxFight.nextRound();
