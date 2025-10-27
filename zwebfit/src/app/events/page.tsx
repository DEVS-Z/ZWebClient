import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import EventListContainer from "@/components/feactures/module/events/eventList/EventListContainer";

export default function EventsPage() {
  return (
    <main className="p-6 flex flex-col gap-6">
      <SessionSelectorContainer />
    <h2 className="text-xl font-bold text-black">Events</h2>


      <EventListContainer />
    </main>
  );
}
