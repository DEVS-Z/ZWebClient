// EventListView.tsx
import EventCardView from "../eventCard/EventCardView";
import { IEvent } from "@/models/modules/iEvents";


interface EventListViewProps {
  events: IEvent[];
}

const EventListView = ({ events }: EventListViewProps) => {
  return (
    <div className="flex flex-col gap-6">
      {events.map((event) => (
        <EventCardView
          key={event.id}
          month={event.month}
          day={event.day}
          time={event.time}
          title={event.title}
          location={event.location}
          scheduledBy={event.organizer}
          players={event.playerCount}
        />
      ))}
    </div>
  );
};

export default EventListView;
