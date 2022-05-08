import { BoxFight } from "./BoxFight";
import { ConservativePlayer } from "./ConservativePlayer";
import { RiskyPlayer } from "./RiskyPlayer";

const boxFight = new BoxFight();

const riskyPlayer = new RiskyPlayer();
const conservativePlayer = new ConservativePlayer();

boxFight.AttachObserver(riskyPlayer);
boxFight.AttachObserver(conservativePlayer);

boxFight.NextRound();
boxFight.NextRound();
boxFight.NextRound();
boxFight.NextRound();
