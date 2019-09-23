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

export const getAttributeCalculations = clatterData => {
  let totalAttack = 0;
  let totalCrit = 0;
  let totalImpale = 0;
  let totalHP = 0;
  let totalArmor = 0;
  let totalBlock = 0;
  let totalTenacity = 0;

  clatterData.forEach(clatter => {
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

  return {
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
