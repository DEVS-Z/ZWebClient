import EventCardContainer from "@/components/feactures/module/events/eventCard/EventCardContainer";

export default function EventsPage() {
  return (
    <main className="p-6 flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Events</h2>
      <EventCardContainer />
      <EventCardContainer />
      <EventCardContainer />
    </main>
  );
}
