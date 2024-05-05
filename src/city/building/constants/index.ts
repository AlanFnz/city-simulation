import { Citizen } from '../../citizen/constants';
import { City } from '../../constants';

interface Building {
  id: string;
  x: number;
  y: number;
  name?: string;
  type: string;
  style: number;
  height?: number;
  updated: boolean;
  citizens?: Citizen[];
  maxCitizens?: number;
  workers?: Citizen[];
  maxWorkers?: number;
  getNumberOfJobsAvailable?: () => number;
  getNumberOfJobsFilled?: () => number;
  update: (city: City) => void;
  dispose?: () => void;
  toHTML: () => string;
}

const BUILDING_TYPE = {
  BUILDING: 'BUILDING',
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  INDUSTRIAL: 'INDUSTRIAL',
  ROAD: 'ROAD',
};

type BuildingType = (typeof BUILDING_TYPE)[keyof typeof BUILDING_TYPE];

export { Building, BUILDING_TYPE, BuildingType };
