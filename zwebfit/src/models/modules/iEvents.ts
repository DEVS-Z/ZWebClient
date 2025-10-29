// src/models/modules/IEvent.ts
export interface IEvent {
  id: string;
  month: string;
  day: number;
  time: string;
  title: string;
  location: string;
  organizer: string;
  playerCount: number;
}
