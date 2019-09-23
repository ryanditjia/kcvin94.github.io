import { BLACK, GREEN, BLUE, PURPLE, GOLD, RED, GRAY, PINK } from './colors';
import {
  NORMAL,
  UNCOMMON,
  RARE,
  EPIC,
  LEGENDARY,
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
  GIANT_JAW,
  HARD_SHELL,
  FLYING_WINGS,
  AGILE,
  DEADLY_POISON,
  SOLID_BONE,
  SHARP_CLAW,
  FLUFF,
  ATK,
  HP,
  ARMOR,
  IMPALE,
  CRIT,
  TENACITY,
  BLOCK,
  REGION_DESCRIPTIONS,
  TYPE_DESCRIPTIONS,
} from './constants';
import Plain from './media/Plain.png';
import RainForest from './media/RainForest.png';
import Coast from './media/Coast.png';
import Desert from './media/Desert.png';
import Oasis from './media/Oasis.png';
import Woodland from './media/Woodland.png';
import Volcano from './media/Volcano.png';
import SnowMountain from './media/SnowMountain.png';
import Gorge from './media/Gorge.png';
import MountainRange from './media/MountainRange.png';
import GiantJaw from './media/GiantJaw.png';
import Fluff from './media/Fluff.png';
import FlyingWings from './media/FlyingWings.png';
import HardShell from './media/HardShell.png';
import DeadlyPoison from './media/DeadlyPoison.png';
import SharpClaw from './media/SharpClaw.png';
import SolidBone from './media/SolidBone.png';
import Agile from './media/Agile.png';

export const getRarityColor = rarity => {
  let color = BLACK;

  if (rarity === NORMAL) color = BLACK;
  else if (rarity === UNCOMMON) color = GREEN;
  else if (rarity === RARE) color = BLUE;
  else if (rarity === EPIC) color = PURPLE;
  else if (rarity === LEGENDARY) color = GOLD;

  return color;
};

export const getRegionImage = region => {
  let image = '';

  if (region === PLAIN) image = Plain;
  else if (region === RAIN_FOREST) image = RainForest;
  else if (region === COAST) image = Coast;
  else if (region === DESERT) image = Desert;
  else if (region === OASIS) image = Oasis;
  else if (region === WOODLAND) image = Woodland;
  else if (region === VOLCANO) image = Volcano;
  else if (region === SNOW_MOUNTAIN) image = SnowMountain;
  else if (region === GORGE) image = Gorge;
  else if (region === MOUNTAIN_RANGE) image = MountainRange;

  return image;
};

export const getTypeImage = type => {
  let image = '';

  if (type === GIANT_JAW) image = GiantJaw;
  else if (type === FLUFF) image = Fluff;
  else if (type === FLYING_WINGS) image = FlyingWings;
  else if (type === HARD_SHELL) image = HardShell;
  else if (type === DEADLY_POISON) image = DeadlyPoison;
  else if (type === SHARP_CLAW) image = SharpClaw;
  else if (type === SOLID_BONE) image = SolidBone;
  else if (type === AGILE) image = Agile;

  return image;
};

export const getAttributeColor = attribute => {
  let color = BLACK;

  if (attribute === ATK) color = RED;
  else if (attribute === HP) color = GREEN;
  else if (attribute === CRIT) color = GOLD;
  else if (attribute === BLOCK) color = BLUE;
  else if (attribute === ARMOR) color = GRAY;
  else if (attribute === TENACITY) color = PURPLE;
  else if (attribute === IMPALE) color = PINK;

  return color;
};

const addUniqueToArray = (array, item) => {
  if (!array.some(i => i === item)) {
    array.push(item);
  }
};

const getRegionResult = (uniqueArray, regionKey) => {
  if (uniqueArray.length > 0) {
    for (let i = uniqueArray.length; i > 0; i -= 1) {
      const region = REGION_DESCRIPTIONS[regionKey];

      if (region[i]) {
        return {
          descriptions: region.description,
          values: region[i],
        };
      }
    }
  }
  return null;
};

const getTypeResult = (uniqueArray, typeKey) => {
  if (uniqueArray.length > 0) {
    for (let i = uniqueArray.length; i > 0; i -= 1) {
      const type = TYPE_DESCRIPTIONS[typeKey];

      if (type[i]) {
        return {
          descriptions: type.description,
          values: type[i],
        };
      }
    }
  }
  return null;
};

export const getCalculations = clatterData => {
  // Region variables
  let totalPlain = [];
  let totalGorge = [];
  let totalSnowMountain = [];
  let totalOasis = [];
  let totalWoodland = [];
  let totalVolcano = [];
  let totalDesert = [];
  let totalRainForest = [];
  let totalCoast = [];
  let totalMountainRange = [];

  // Region descriptions
  let plainResult = null;
  let gorgeResult = null;
  let snowMountainResult = null;
  let oasisResult = null;
  let woodlandResult = null;
  let volcanoResult = null;
  let desertResult = null;
  let rainForestResult = null;
  let coastResult = null;
  let mountainRangeResult = null;

  // Type variables
  let totalGiantJaw = [];
  let totalHardShell = [];
  let totalFlyingWings = [];
  let totalAgile = [];
  let totalDeadlyPoison = [];
  let totalSolidBone = [];
  let totalSharpClaw = [];
  let totalFluff = [];

  // Type descriptions
  let giantJawResult = null;
  let hardShellResult = null;
  let flyingWingsResult = null;
  let agileResult = null;
  let deadlyPoisonResult = null;
  let solidBoneResult = null;
  let sharpClawResult = null;
  let fluffResult = null;

  // Attribute variables
  let totalAttack = 0;
  let totalCrit = 0;
  let totalImpale = 0;
  let totalHP = 0;
  let totalArmor = 0;
  let totalBlock = 0;
  let totalTenacity = 0;

  clatterData.forEach(clatter => {
    const { region, type } = clatter;

    // Calculate region
    region.forEach(singleRegion => {
      if (singleRegion === PLAIN) addUniqueToArray(totalPlain, clatter.id);
      else if (singleRegion === GORGE) addUniqueToArray(totalGorge, clatter.id);
      else if (singleRegion === SNOW_MOUNTAIN) {
        addUniqueToArray(totalSnowMountain, clatter.id);
      } else if (singleRegion === OASIS) {
        addUniqueToArray(totalOasis, clatter.id);
      } else if (singleRegion === WOODLAND) {
        addUniqueToArray(totalWoodland, clatter.id);
      } else if (singleRegion === VOLCANO) {
        addUniqueToArray(totalVolcano, clatter.id);
      } else if (singleRegion === DESERT) {
        addUniqueToArray(totalDesert, clatter.id);
      } else if (singleRegion === RAIN_FOREST) {
        addUniqueToArray(totalRainForest, clatter.id);
      } else if (singleRegion === COAST) {
        addUniqueToArray(totalCoast, clatter.id);
      } else if (singleRegion === MOUNTAIN_RANGE) {
        addUniqueToArray(totalMountainRange, clatter.id);
      }
    });

    // Calculate type
    if (type === GIANT_JAW) addUniqueToArray(totalGiantJaw, clatter.id);
    else if (type === HARD_SHELL) addUniqueToArray(totalHardShell, clatter.id);
    else if (type === FLYING_WINGS) {
      addUniqueToArray(totalFlyingWings, clatter.id);
    } else if (type === AGILE) {
      addUniqueToArray(totalAgile, clatter.id);
    } else if (type === DEADLY_POISON) {
      addUniqueToArray(totalDeadlyPoison, clatter.id);
    } else if (type === SOLID_BONE) {
      addUniqueToArray(totalSolidBone, clatter.id);
    } else if (type === SHARP_CLAW) {
      addUniqueToArray(totalSharpClaw, clatter.id);
    } else if (type === FLUFF) {
      addUniqueToArray(totalFluff, clatter.id);
    }

    // Calculate attributes
    clatter[clatter.star].forEach(({ attribute, value }) => {
      if (attribute === ATK) totalAttack += value;
      else if (attribute === HP) totalHP += value;
      else if (attribute === CRIT) totalCrit += value;
      else if (attribute === BLOCK) totalBlock += value;
      else if (attribute === ARMOR) totalArmor += value;
      else if (attribute === TENACITY) totalTenacity += value;
      else if (attribute === IMPALE) totalImpale += value;
    });
  });

  // Place correct message for region
  plainResult = getRegionResult(totalPlain, PLAIN);
  gorgeResult = getRegionResult(totalGorge, GORGE);
  snowMountainResult = getRegionResult(totalSnowMountain, SNOW_MOUNTAIN);
  oasisResult = getRegionResult(totalOasis, OASIS);
  woodlandResult = getRegionResult(totalWoodland, WOODLAND);
  volcanoResult = getRegionResult(totalVolcano, VOLCANO);
  desertResult = getRegionResult(totalDesert, DESERT);
  rainForestResult = getRegionResult(totalRainForest, RAIN_FOREST);
  coastResult = getRegionResult(totalCoast, COAST);
  mountainRangeResult = getRegionResult(totalMountainRange, MOUNTAIN_RANGE);

  // Place correct message for type
  giantJawResult = getTypeResult(totalGiantJaw, GIANT_JAW);
  hardShellResult = getTypeResult(totalHardShell, HARD_SHELL);
  flyingWingsResult = getTypeResult(totalFlyingWings, FLYING_WINGS);
  agileResult = getTypeResult(totalAgile, AGILE);
  deadlyPoisonResult = getTypeResult(totalDeadlyPoison, DEADLY_POISON);
  solidBoneResult = getTypeResult(totalSolidBone, SOLID_BONE);
  sharpClawResult = getTypeResult(totalSharpClaw, SHARP_CLAW);
  fluffResult = getTypeResult(totalFluff, FLUFF);

  return {
    [PLAIN]: plainResult,
    [GORGE]: gorgeResult,
    [SNOW_MOUNTAIN]: snowMountainResult,
    [OASIS]: oasisResult,
    [WOODLAND]: woodlandResult,
    [VOLCANO]: volcanoResult,
    [DESERT]: desertResult,
    [RAIN_FOREST]: rainForestResult,
    [COAST]: coastResult,
    [MOUNTAIN_RANGE]: mountainRangeResult,
    [GIANT_JAW]: giantJawResult,
    [HARD_SHELL]: hardShellResult,
    [FLYING_WINGS]: flyingWingsResult,
    [AGILE]: agileResult,
    [DEADLY_POISON]: deadlyPoisonResult,
    [SOLID_BONE]: solidBoneResult,
    [SHARP_CLAW]: sharpClawResult,
    [FLUFF]: fluffResult,
    [ATK]: totalAttack,
    [CRIT]: totalCrit,
    [IMPALE]: totalImpale,
    [HP]: totalHP,
    [ARMOR]: totalArmor,
    [BLOCK]: totalBlock,
    [TENACITY]: totalTenacity,
  };
};

export const formatNumber = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
