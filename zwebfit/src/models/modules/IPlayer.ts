export interface IPlayerStats {
  running?: number;
  stamina?: number;
  speed?: number;
  strength?: number;
}

export interface IPlayer {
  id: number;
  name: string;
  age: string;
  image: string;
  positions: string[];
  stats?: IPlayerStats;
}

