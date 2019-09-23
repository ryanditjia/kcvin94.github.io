import Velociraptor from './media/Velociraptor.png';
import SandFrilledLizard from './media/SandFrilledLizard.png';
import IceCorythosaurus from './media/IceCorythosaurus.png';
import Pangolin from './media/Pangolin.png';
import TootBird from './media/TootBird.png';
import FlyingSquirrel from './media/FlyingSquirrel.png';
import BigTongueFlower from './media/BigTongueFlower.png';
import LavaBeast from './media/LavaBeast.png';
import WhiteYak from './media/WhiteYak.png';
import MiniScarBunny from './media/MiniScarBunny.png';
import Sheep from './media/Sheep.png';
import UnicornGorilla from './media/UnicornGorilla.png';
import Dimetrodon from './media/Dimetrodon.png';
import Dandelion from './media/Dandelion.png';
import RockCrab from './media/RockCrab.png';
import Owl from './media/Owl.png';
import SnowfieldDodoBird from './media/SnowfieldDodoBird.png';
import Pterosaur from './media/Pterosaur.png';
import LightningFlyingSquirrel from './media/LightningFlyingSquirrel.png';
import SabreTiger from './media/SabreTiger.png';
import TRex from './media/TRex.png';
import RockPlacodermi from './media/RockPlacodermi.png';
import LightningPlushBeast from './media/LightningPlushBeast.png';
import LavaCrab from './media/LavaCrab.png';
import Ankylosaur from './media/Ankylosaur.png';
import MountainDragon from './media/MountainDragon.png';
import SwiftPterosauria from './media/SwiftPterosauria.png';
import Rapator from './media/Rapator.png';
import SandFox from './media/SandFox.png';
import Warg from './media/Warg.png';
import Stegosaurus from './media/Stegosaurus.png';
import BlackrockThrasher from './media/BlackrockThrasher.png';
import WhiteYakKing from './media/WhiteYakKing.png';
import GreyTigerKing from './media/GreyTigerKing.png';
import LavaBeastChieftain from './media/LavaBeastChieftain.png';
import Radobaan from './media/Radobaan.png';
import TyrantDragon from './media/TyrantDragon.png';
import HermitCrab from './media/HermitCrab.png';
import PterosaurKing from './media/PterosaurKing.png';
import WargKing from './media/WargKing.png';
import BigTongueFlowerKing from './media/BigTongueFlowerKing.png';
import Liondragon from './media/Liondragon.png';
import IrishElk from './media/IrishElk.png';
import SharptalonDragon from './media/SharptalonDragon.png';
import Spinosaurus from './media/Spinosaurus.png';
import GiantMountainDragon from './media/GiantMountainDragon.png';
import TyphoonDragon from './media/TyphoonDragon.png';
import QueenDragon from './media/QueenDragon.png';
import Mammoth from './media/Mammoth.png';

// Rarities
export const NORMAL = 'Normal';
export const UNCOMMON = 'Uncommon';
export const RARE = 'Rare';
export const EPIC = 'Epic';
export const LEGENDARY = 'Legendary';
export const RARITIES = [NORMAL, UNCOMMON, RARE, EPIC, LEGENDARY];

// Regions
export const PLAIN = 'Plain';
export const GORGE = 'Gorge';
export const SNOW_MOUNTAIN = 'Snow Mountain';
export const OASIS = 'Oasis';
export const WOODLAND = 'Woodland';
export const VOLCANO = 'Volcano';
export const DESERT = 'Desert';
export const RAIN_FOREST = 'Rain Forest';
export const COAST = 'Coast';
export const MOUNTAIN_RANGE = 'Mountain Range';
export const REGIONS = [
  PLAIN,
  GORGE,
  SNOW_MOUNTAIN,
  OASIS,
  WOODLAND,
  VOLCANO,
  DESERT,
  RAIN_FOREST,
  COAST,
  MOUNTAIN_RANGE,
];

// Region Descriptions
export const REGION_DESCRIPTIONS = {
  [PLAIN]: {
    description: ['While entering the battlefield, the Plain card will cause '],
    2: ['ATK +20%'],
    4: ['ATK +40%'],
    6: ['ATK +60%'],
  },
  [GORGE]: {
    description: ['While entering the battlefield, the Gorge card will cause '],
    2: ['HP +20%'],
    4: ['HP +40%'],
  },
  [SNOW_MOUNTAIN]: {
    description: ['Team mates with HP below ', ', '],
    2: ['25%', 'Healing +8%'],
    4: ['25%', 'Healing +16%'],
  },
  [OASIS]: {
    description: ['Enemy units with HP below ', ', basic attack '],
    2: ['15%', 'DMG +35%'],
    4: ['25%', 'DMG +60%'],
  },
  [WOODLAND]: {
    description: ['While entering the battlefield, '],
    2: ['Impale +600'],
    4: ['Impale +1200'],
  },
  [VOLCANO]: {
    description: ['While entering the battlefield '],
    2: ['CRIT +600'],
    4: ['CRIT +1200'],
    6: ['CRIT +1800'],
  },
  [DESERT]: {
    description: [
      'When HP is lower than ',
      ', ',
      ' for 4 seconds (triggers once per battle)',
    ],
    3: ['25%', 'DMG taken reduces 50%'],
  },
  [RAIN_FOREST]: {
    description: [
      'While entering the battlefield, the Rain Forest card ',
      '. When HP falls below 25%, heal ',
      ' of the pet Symbosis within 3 seconds. (It can be triggered once per battle)',
    ],
    2: ['HP +12%', '40%'],
    4: ['HP +24%', '80%'],
  },
  [COAST]: {
    description: ['While entering the battlefield, '],
    2: ['Crit +300 and Impale +300'],
    4: ['Crit +600 and Impale +600'],
  },
  [MOUNTAIN_RANGE]: {
    description: [
      'If only 1 kind of Mountain Range card is equipped, basic attack ',
    ],
    1: ['DMG +5%'],
  },
};

// Types
export const GIANT_JAW = 'Giant Jaw';
export const HARD_SHELL = 'Hard Shell';
export const FLYING_WINGS = 'Flying Wings';
export const AGILE = 'Agile';
export const DEADLY_POISON = 'Deadly Poison';
export const SOLID_BONE = 'Solid Bone';
export const SHARP_CLAW = 'Sharp Claw';
export const FLUFF = 'Fluff';
export const TYPES = [
  GIANT_JAW,
  HARD_SHELL,
  FLYING_WINGS,
  AGILE,
  DEADLY_POISON,
  SOLID_BONE,
  SHARP_CLAW,
  FLUFF,
];

export const TYPE_DESCRIPTIONS = {
  [GIANT_JAW]: {
    description: [
      'Attacks cast 1 bonus layer of the [Giant Jaw] effect. When 4 layers are stacked, next basic attack inflict bonus ',
      ' ATK DMG',
    ],
    3: ['40%'],
    6: ['124%'],
    9: ['188%'],
  },
  [FLUFF]: {
    description: ["Increase each battle's "],
    3: ['initial energy +1'],
  },
  [HARD_SHELL]: {
    description: [
      'Activate the Hard Shell effect every ',
      ' attacks and obtain 1 layer of shield of ',
      " of the Pet's Protection. Up to 3 layers can be stacked",
    ],
    2: ['4', '50%'],
    4: ['4', '100%'],
    6: ['3', '150%'],
  },
  [FLYING_WINGS]: {
    description: [
      'While entering the battlefield, the Flying Wing card will cause ',
    ],
    3: ['ATK +20% and Impale +600'],
    6: ['ATK +40% and Impale +1200'],
  },
  [AGILE]: {
    description: [
      'Activate the Agile effect every ',
      ' attacks and restore the HP for ',
      ' within 3 seconds',
    ],
    3: ['4', 'Symbiosis +8%'],
    6: ['3', 'Symbiosis +16%'],
    9: ['3', 'Symbiosis +24%'],
  },
  [DEADLY_POISON]: {
    description: [
      'While entering the battlefield, transform 1 random enemy unit into a pig with the transformation lasting ',
      ' second',
    ],
    3: ['1'],
  },
  [SOLID_BONE]: {
    description: [
      "Trigger the Solid Bone effect every 4 attacks. The healer's basic attack's ",
    ],
    3: ['healing effect +75%'],
    6: ['healing effect +150%'],
  },
  [SHARP_CLAW]: {
    description: [
      'While entering the battlefield, the Sharp Claw card will cause ',
      ' and ',
    ],
    3: ['HP +30%', 'ATK +30%'],
  },
};

// Attributes
export const ATK = 'ATK';
export const HP = 'HP';
export const ARMOR = 'ARMOR';
export const IMPALE = 'IMPALE';
export const CRIT = 'CRIT';
export const TENACITY = 'TENACITY';
export const BLOCK = 'BLOCK';
export const ATTRIBUTES = [ATK, HP, ARMOR, IMPALE, CRIT, TENACITY, BLOCK];

// Clatter Cards
const VELOCIRAPTOR = {
  id: 0,
  name: 'Velociraptor',
  image: Velociraptor,
  rarity: NORMAL,
  region: [PLAIN],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const SAND_FRILLED_LIZARAD = {
  id: 1,
  name: 'Sand Frilled Lizard',
  image: SandFrilledLizard,
  rarity: NORMAL,
  region: [GORGE],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
  ],
  bonus: null,
};

const ICE_CORYTHOSAURUS = {
  id: 2,
  name: 'Ice Corythosaurus',
  image: IceCorythosaurus,
  rarity: NORMAL,
  region: [SNOW_MOUNTAIN],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 600,
    },
  ],
  bonus: null,
};

const PANGOLIN = {
  id: 3,
  name: 'Pangolin',
  image: Pangolin,
  rarity: NORMAL,
  region: [OASIS],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 600,
    },
  ],
  bonus: null,
};

const TOOT_BIRD = {
  id: 4,
  name: 'Toot Bird',
  image: TootBird,
  rarity: NORMAL,
  region: [WOODLAND],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: ATK,
      value: 150,
    },
    {
      attribute: IMPALE,
      value: 75,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: IMPALE,
      value: 450,
    },
  ],
  bonus: null,
};

const FLYING_SQUIRREL = {
  id: 5,
  name: 'Flying Squirrel',
  image: FlyingSquirrel,
  rarity: NORMAL,
  region: [GORGE],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
  ],
  bonus: null,
};

const BIG_TONGUE_FLOWER = {
  id: 6,
  name: 'Big Tongue Flower',
  image: BigTongueFlower,
  rarity: NORMAL,
  region: [GORGE],
  type: DEADLY_POISON,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
  ],
  bonus: null,
};

const LAVA_BEAST = {
  id: 7,
  name: 'Lava Beast',
  image: LavaBeast,
  rarity: NORMAL,
  region: [VOLCANO],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
  ],
  bonus: null,
};

const WHITE_YAK = {
  id: 8,
  name: 'White Yak',
  image: WhiteYak,
  rarity: NORMAL,
  region: [WOODLAND],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus: null,
};

const MINI_SCAR_BUNNY = {
  id: 9,
  name: 'Mini Scar-Bunny',
  image: MiniScarBunny,
  rarity: NORMAL,
  region: [PLAIN],
  type: SHARP_CLAW,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const SHEEP = {
  id: 10,
  name: 'Sheep',
  image: Sheep,
  rarity: NORMAL,
  region: [PLAIN],
  type: FLUFF,
  oneStar: [
    {
      attribute: ATK,
      value: 150,
    },
    {
      attribute: ARMOR,
      value: 50,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: ARMOR,
      value: 300,
    },
  ],
  bonus: null,
};

const UNICORN_GORILLA = {
  id: 11,
  name: 'Unicorn Gorilla',
  image: UnicornGorilla,
  rarity: UNCOMMON,
  region: [GORGE],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: HP,
      value: 750,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: IMPALE,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: IMPALE,
      value: 900,
    },
  ],
  bonus: null,
};

const DIMETRODON = {
  id: 12,
  name: 'Dimetrodon',
  image: Dimetrodon,
  rarity: UNCOMMON,
  region: [WOODLAND],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: IMPALE,
      value: 75,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
    {
      attribute: IMPALE,
      value: 450,
    },
  ],
  bonus: null,
};

const DANDELION = {
  id: 13,
  name: 'Dandelion',
  image: Dandelion,
  rarity: UNCOMMON,
  region: [RAIN_FOREST],
  type: FLUFF,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: BLOCK,
      value: 75,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: BLOCK,
      value: 150,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: BLOCK,
      value: 450,
    },
  ],
  bonus: null,
};

const ROCK_CRAB = {
  id: 14,
  name: 'Rock Crab',
  image: RockCrab,
  rarity: UNCOMMON,
  region: [MOUNTAIN_RANGE],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: BLOCK,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: BLOCK,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: BLOCK,
      value: 1350,
    },
  ],
  bonus: null,
};

const OWL = {
  id: 15,
  name: 'Owl',
  image: Owl,
  rarity: UNCOMMON,
  region: [GORGE],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: HP,
      value: 1125,
    },
    {
      attribute: ATK,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: ATK,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 6750,
    },
    {
      attribute: ATK,
      value: 1350,
    },
  ],
  bonus: null,
};

const SNOWFIELD_DODO_BIRD = {
  id: 16,
  name: 'Snowfield Dodo Bird',
  image: SnowfieldDodoBird,
  rarity: UNCOMMON,
  region: [SNOW_MOUNTAIN],
  type: AGILE,
  oneStar: [
    {
      attribute: ARMOR,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 900,
    },
  ],
  bonus: null,
};

const PTEROSAUR = {
  id: 17,
  name: 'Pterosaur',
  image: Pterosaur,
  rarity: UNCOMMON,
  region: [GORGE],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: IMPALE,
      value: 75,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: IMPALE,
      value: 450,
    },
  ],
  bonus: null,
};

const LIGHTNING_FLYING_SQUIRREL = {
  id: 18,
  name: 'Lightning Flying Squirrel',
  image: LightningFlyingSquirrel,
  rarity: UNCOMMON,
  region: [MOUNTAIN_RANGE],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
  ],
  bonus: null,
};

const SABRE_TIGER = {
  id: 19,
  name: 'Sabre Tiger',
  image: SabreTiger,
  rarity: UNCOMMON,
  region: [OASIS],
  type: SHARP_CLAW,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
  ],
  bonus: null,
};

const T_REX = {
  id: 20,
  name: 'T. Rex',
  image: TRex,
  rarity: RARE,
  region: [PLAIN, VOLCANO],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus: null,
};

const ROCK_PLACODERMI = {
  id: 21,
  name: 'Rock Placodermi',
  image: RockPlacodermi,
  rarity: RARE,
  region: [COAST],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ARMOR,
      value: 100,
    },
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 600,
    },
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus: null,
};

const LIGHTNING_PLUSH_BEAST = {
  id: 22,
  name: 'Lightning Plush Beast',
  image: LightningPlushBeast,
  rarity: RARE,
  region: [RAIN_FOREST],
  type: FLUFF,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: TENACITY,
      value: 75,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: TENACITY,
      value: 150,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
    {
      attribute: TENACITY,
      value: 450,
    },
  ],
  bonus: null,
};

const LAVA_CRAB = {
  id: 23,
  name: 'Lava Crab',
  image: LavaCrab,
  rarity: RARE,
  region: [VOLCANO],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 400,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 1200,
    },
  ],
  bonus: null,
};

const ANKYLOSAUR = {
  id: 24,
  name: 'Ankylosaur',
  image: Ankylosaur,
  rarity: RARE,
  region: [RAIN_FOREST],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: TENACITY,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: TENACITY,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: TENACITY,
      value: 900,
    },
  ],
  bonus: null,
};

const MOUTAIN_DRAGON = {
  id: 25,
  name: 'Mountain Dragon',
  image: MountainDragon,
  rarity: RARE,
  region: [WOODLAND],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: ARMOR,
      value: 100,
    },
    {
      attribute: BLOCK,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
    {
      attribute: BLOCK,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 600,
    },
    {
      attribute: BLOCK,
      value: 900,
    },
  ],
  bonus: null,
};

const SWIFT_PTEROSAURIA = {
  id: 26,
  name: 'Swift Pterosauria',
  image: SwiftPterosauria,
  rarity: RARE,
  region: [RAIN_FOREST],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const RAPATOR = {
  id: 27,
  name: 'Rapator',
  image: Rapator,
  rarity: RARE,
  region: [PLAIN],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const SAND_FOX = {
  id: 28,
  name: 'Sand Fox',
  image: SandFox,
  rarity: RARE,
  region: [DESERT],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ARMOR,
      value: 600,
    },
  ],
  bonus: null,
};

const WARG = {
  id: 29,
  name: 'Warg',
  image: Warg,
  rarity: RARE,
  region: [RAIN_FOREST],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: BLOCK,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: BLOCK,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: BLOCK,
      value: 900,
    },
  ],
  bonus: null,
};

const STEGOSAURUS = {
  id: 30,
  name: 'Stegosaurus',
  image: Stegosaurus,
  rarity: RARE,
  region: [DESERT],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus: null,
};

const BLACKROCK_TRASHER = {
  id: 31,
  name: 'Blackrock Trasher',
  image: BlackrockThrasher,
  rarity: RARE,
  region: [VOLCANO],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: ATK,
      value: 300,
    },
    {
      attribute: TENACITY,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 600,
    },
    {
      attribute: TENACITY,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 1800,
    },
    {
      attribute: TENACITY,
      value: 900,
    },
  ],
  bonus: null,
};

const WHITE_YAK_KING = {
  id: 32,
  name: 'White Yak King',
  image: WhiteYakKing,
  rarity: RARE,
  region: [SNOW_MOUNTAIN],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const GREY_TIGER_KING = {
  id: 33,
  name: 'Grey Tiger King',
  image: GreyTigerKing,
  rarity: RARE,
  region: [SNOW_MOUNTAIN],
  type: SHARP_CLAW,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ATK,
      value: 300,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ATK,
      value: 600,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ATK,
      value: 1800,
    },
  ],
  bonus: null,
};

const LAVA_BEAST_CHIEFTAIN = {
  id: 34,
  name: 'Lava Beast Chieftain',
  image: LavaBeastChieftain,
  rarity: EPIC,
  region: [VOLCANO],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus:
    'When basic attacks go critical, they cast an extra 1 layer of [Giant Jaw] effect',
};

const RADOBAAN = {
  id: 35,
  name: 'Radobaan',
  image: Radobaan,
  rarity: EPIC,
  region: [OASIS],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ARMOR,
      value: 100,
    },
    {
      attribute: CRIT,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: ARMOR,
      value: 200,
    },
    {
      attribute: CRIT,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: ARMOR,
      value: 600,
    },
    {
      attribute: CRIT,
      value: 1350,
    },
  ],
  bonus: "When the target's HP is below 25%, basic attack DMG +3%",
};

const TYRANT_DRAGON = {
  id: 36,
  name: 'Tyrant Dragon',
  image: TyrantDragon,
  rarity: EPIC,
  region: [MOUNTAIN_RANGE],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: CRIT,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: CRIT,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: CRIT,
      value: 900,
    },
  ],
  bonus:
    'When basic attacks go critical, they cast an extra 1 layer of [Giant Jaw] effect',
};

const HERMIT_CRAB = {
  id: 37,
  name: 'Hermit Crab',
  image: HermitCrab,
  rarity: EPIC,
  region: [VOLCANO, DESERT],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ARMOR,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ARMOR,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ARMOR,
      value: 900,
    },
  ],
  bonus: 'While entering the battlefield, the Desert Bond effect +25%',
};

const PTEROSAUR_KING = {
  id: 38,
  name: 'Pterosaur King',
  image: PterosaurKing,
  rarity: EPIC,
  region: [COAST],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: IMPALE,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: IMPALE,
      value: 900,
    },
  ],
  bonus: null,
};

const WARG_KING = {
  id: 39,
  name: 'Warg King',
  image: WargKing,
  rarity: EPIC,
  region: [RAIN_FOREST],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: TENACITY,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: TENACITY,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
    {
      attribute: TENACITY,
      value: 900,
    },
  ],
  bonus: 'The Rain Forest bond healing +25%',
};

const BIG_TONGUE_FLOWER_KING = {
  id: 40,
  name: 'Big Tongue Flower King',
  image: BigTongueFlowerKing,
  rarity: EPIC,
  region: [OASIS],
  type: DEADLY_POISON,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: IMPALE,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: IMPALE,
      value: 900,
    },
  ],
  bonus: null,
};

const LIONDRAGON = {
  id: 41,
  name: 'Liondragon',
  image: Liondragon,
  rarity: EPIC,
  region: [VOLCANO],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: ARMOR,
      value: 600,
    },
  ],
  bonus:
    'Trigger the Solid Bone effect for targets with HP below 30%. Additionally heal 5% of ATK',
};

const IRISH_ELK = {
  id: 42,
  name: 'Irish Elk',
  image: IrishElk,
  rarity: EPIC,
  region: [PLAIN],
  type: FLUFF,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: ARMOR,
      value: 100,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: ARMOR,
      value: 600,
    },
  ],
  bonus: null,
};

const SHARPTALONG_DRAGON = {
  id: 43,
  name: 'Sharptalon Dragon',
  image: SharptalonDragon,
  rarity: EPIC,
  region: [WOODLAND],
  type: SHARP_CLAW,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: IMPALE,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: IMPALE,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: IMPALE,
      value: 1350,
    },
  ],
  bonus: null,
};

const SPINOSAURUS = {
  id: 44,
  name: 'Spinosaurus',
  image: Spinosaurus,
  rarity: LEGENDARY,
  region: [WOODLAND],
  type: GIANT_JAW,
  oneStar: [
    {
      attribute: ATK,
      value: 450,
    },
    {
      attribute: IMPALE,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 900,
    },
    {
      attribute: IMPALE,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 2700,
    },
    {
      attribute: IMPALE,
      value: 1350,
    },
  ],
  bonus: 'While entering the battlefield, all members ATK +1800',
};

const GIANT_MOUNTAIN_DRAGON = {
  id: 45,
  name: 'Giant Mountain Dragon',
  image: GiantMountainDragon,
  rarity: LEGENDARY,
  region: [DESERT],
  type: HARD_SHELL,
  oneStar: [
    {
      attribute: HP,
      value: 1500,
    },
    {
      attribute: ARMOR,
      value: 200,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 3000,
    },
    {
      attribute: ARMOR,
      value: 400,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 9000,
    },
    {
      attribute: ARMOR,
      value: 1200,
    },
  ],
  bonus: 'While entering the battlefield, all members HP +4500 and Armor +300',
};

const TYPHOON_DRAGON = {
  id: 46,
  name: 'Typhoon Dragon',
  image: TyphoonDragon,
  rarity: LEGENDARY,
  region: [COAST],
  type: FLYING_WINGS,
  oneStar: [
    {
      attribute: ATK,
      value: 600,
    },
    {
      attribute: IMPALE,
      value: 150,
    },
  ],
  twoStar: [
    {
      attribute: ATK,
      value: 1200,
    },
    {
      attribute: IMPALE,
      value: 300,
    },
  ],
  threeStar: [
    {
      attribute: ATK,
      value: 3600,
    },
    {
      attribute: IMPALE,
      value: 900,
    },
  ],
  bonus:
    'While casting a DMG skill, cast an extra 2 layers of [Giant Jaw] effect',
};

const QUEEN_DRAGON = {
  id: 47,
  name: 'Queen Dragon',
  image: QueenDragon,
  rarity: LEGENDARY,
  region: [RAIN_FOREST],
  type: AGILE,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: TENACITY,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: TENACITY,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
    {
      attribute: TENACITY,
      value: 1350,
    },
  ],
  bonus: 'While entering the battlefield, all members HP +6300 and Armor +180',
};

const MAMMOTH = {
  id: 48,
  name: 'Mammoth',
  image: Mammoth,
  rarity: LEGENDARY,
  region: [RAIN_FOREST],
  type: SOLID_BONE,
  oneStar: [
    {
      attribute: HP,
      value: 2250,
    },
    {
      attribute: CRIT,
      value: 225,
    },
  ],
  twoStar: [
    {
      attribute: HP,
      value: 4500,
    },
    {
      attribute: CRIT,
      value: 450,
    },
  ],
  threeStar: [
    {
      attribute: HP,
      value: 13500,
    },
    {
      attribute: CRIT,
      value: 1350,
    },
  ],
  bonus: 'While entering the battlefield, all units Crit +450 and Impale +450',
};

export const CLATTER_LIST = [
  VELOCIRAPTOR,
  SAND_FRILLED_LIZARAD,
  ICE_CORYTHOSAURUS,
  PANGOLIN,
  TOOT_BIRD,
  FLYING_SQUIRREL,
  BIG_TONGUE_FLOWER,
  LAVA_BEAST,
  WHITE_YAK,
  MINI_SCAR_BUNNY,
  SHEEP,
  UNICORN_GORILLA,
  DIMETRODON,
  DANDELION,
  ROCK_CRAB,
  OWL,
  SNOWFIELD_DODO_BIRD,
  PTEROSAUR,
  LIGHTNING_FLYING_SQUIRREL,
  SABRE_TIGER,
  T_REX,
  ROCK_PLACODERMI,
  LIGHTNING_PLUSH_BEAST,
  LAVA_CRAB,
  ANKYLOSAUR,
  MOUTAIN_DRAGON,
  SWIFT_PTEROSAURIA,
  RAPATOR,
  SAND_FOX,
  WARG,
  STEGOSAURUS,
  BLACKROCK_TRASHER,
  WHITE_YAK_KING,
  GREY_TIGER_KING,
  LAVA_BEAST_CHIEFTAIN,
  RADOBAAN,
  TYRANT_DRAGON,
  HERMIT_CRAB,
  PTEROSAUR_KING,
  WARG_KING,
  BIG_TONGUE_FLOWER_KING,
  LIONDRAGON,
  IRISH_ELK,
  SHARPTALONG_DRAGON,
  SPINOSAURUS,
  GIANT_MOUNTAIN_DRAGON,
  TYPHOON_DRAGON,
  QUEEN_DRAGON,
  MAMMOTH,
];
