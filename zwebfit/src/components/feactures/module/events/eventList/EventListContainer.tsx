// EventListContainer.tsx
import EventListView from "./EventListView";
import { IEvent } from "@/models/modules/iEvents";

const dummyEvents: IEvent[] = [
  {
    id: "1",
    month: "April",
    day: 1,
    time: "12:00 – 14:00",
    title: "Training Session",
    location: "At Los Xolos Stadium",
    organizer: "La Pulga",
    playerCount: 14,
  },
  {
    id: "2",
    month: "April",
    day: 3,
    time: "10:00 – 11:30",
    title: "Strategy Meeting",
    location: "At Club House",
    organizer: "El Míster",
    playerCount: 8,
  },
  {
  id: "3",
  month: "April",
  day: 7,
  time: "16:00 – 17:30",
  title: "Tactical Review",
  location: "At Video Room",
  organizer: "Coach Varela",
  playerCount: 10,
}
];

const EventListContainer = () => {
  return <EventListView events={dummyEvents} />;
};

export default EventListContainer;
