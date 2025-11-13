export interface IPlayerStats {
  running?: number;
  stamina?: number;
  speed?: number;
  strength?: number;
}

export interface IPlayer {
  MiembroId: number;
  name: string;
  age: string;
  image: string;
  positions: string[];
  stats?: IPlayerStats;
}

