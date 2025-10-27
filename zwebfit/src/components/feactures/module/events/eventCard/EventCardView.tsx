// components/feactures/module/events/eventCard/EventCardView.tsx
import { FC } from "react";

interface EventCardProps {
  month: string;
  day: number;
  time: string; // e.g. "12:00 – 14:00"
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
  const [startTime, endTime] = time.split("–").map((t) => t.trim());

  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden w-full bg-white shadow-sm">
      {/* Fecha */}

      <div className="bg-gray-200 flex flex-col items-center justify-center px-10 py-6 min-w-[320px] text-base">

      
        <span className="text-gray-600 font-bold text-2xl">{month}</span>



        <span className="text-4xl font-medium text-black ">{day}</span>




        <hr className="w-70 border-gray-600 my-2" />


        <div className="text-2xl font-medium text-gray-900 mt-2 font-mono tracking-wide">
  {startTime} – {endTime}
</div>






      </div>

      {/* Contenido del evento */}
      <div className="p-4 flex flex-col justify-center gap-2 text-[18px] w-full">


        <h3 className="text-2xl font-bold text-black">{title}</h3>


        <p className="text-gray-700">{location}</p>
        <p className="text-gray-500">
          Scheduled by {scheduledBy} – {players} players should attend
        </p>
      </div>
    </div>
  );
};

export default EventCardView;
