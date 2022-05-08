import { LaptopBuilder } from "./abstract/LaptopBuilder";
import { BuyLaptop } from "./concrete/BuyLaptop";
import { GamingLaptopBuilder } from "./concrete/GamingLaptopBuilder";
import { TripLaptopBuilder } from "./concrete/TripLaptopBuilder";

const tripBuilder: LaptopBuilder = new TripLaptopBuilder();
const gamingBuilder: LaptopBuilder = new GamingLaptopBuilder();

const shopForYou = new BuyLaptop();
shopForYou.setLaptopBuilder(gamingBuilder);
shopForYou.constructLaptop();

const laptopForAClient = shopForYou.getLaptop();
console.log(`${laptopForAClient}`);

shopForYou.setLaptopBuilder(tripBuilder);
shopForYou.constructLaptop();

const laptopForBClient = shopForYou.getLaptop();
console.log(`${laptopForBClient}`);
