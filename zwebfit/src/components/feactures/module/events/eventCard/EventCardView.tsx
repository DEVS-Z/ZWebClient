// components/feactures/module/events/eventCard/EventCardView.tsx
import { FC } from "react";

interface EventCardProps {
  month: string;
  day: number;
  time: string;
  title: string;
  location: string;
  scheduledBy: string;
  players: number;
}

const EventCardView: FC<EventCardProps> = ({
  month,
  day,
  time,
  title,
  location,
  scheduledBy,
  players,
}) => {
  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden w-full max-w-xl bg-white">
      {/* Fecha */}
      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center min-w-[100px] text-sm">
        <span className="text-gray-500">{month}</span>
        <span className="text-2xl font-semibold">{day}</span>
        <hr className="w-8 border-gray-400 my-1" />
        <span className="text-xs">{time}</span>
      </div>

      {/* Contenido del evento */}
      <div className="p-4 flex flex-col justify-center text-sm w-full">
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-gray-700">{location}</p>
        <p className="text-gray-500">
          Scheduled by {scheduledBy} – {players} players should attend
        </p>
      </div>
    </div>
  );
};

export default EventCardView;
