export interface ISessionPlayer {
  id: string;
  name: string;
  age: number;
  position: string;
  availablePositions: string[];
}

export interface ISessionDetails {
  id?: string;
  eventType: string;
  location: string;
  date: string; // ISO date string
  startingTime: string; // HH:mm format
  finishingTime: string; // HH:mm format
  note: string;
  players: ISessionPlayer[];
}

export interface ISessionDetailsFormProps {
  isOpen: boolean;
  onClose: () => void;
  sessionData?: ISessionDetails;
  availablePlayers: ISessionPlayer[];
  onSave: (session: ISessionDetails) => void;
  onDelete?: (sessionId: string) => void;
}
