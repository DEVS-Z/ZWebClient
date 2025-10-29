// components/feactures/module/events/eventCard/EventCardContainer.tsx
import EventCardView from "./EventCardView";

const EventCardContainer = () => {
  // Esto puede venir de props, context o un fetch en el futuro
  return (
    <EventCardView
      month="April"
      day={1}
      time="12:00 – 14:00"
      title="Training Session"
      location="At Los Xolos Stadium"
      scheduledBy="La Pulga"
      players={14}
    />
  );
};

export default EventCardContainer;
