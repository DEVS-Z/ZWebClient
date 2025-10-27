'use client';

interface CreateEventButtonProps {
  onClick: () => void;
}

export default function CreateEventButton({ onClick }: CreateEventButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
    >
      <span className="text-xl">+</span>
      Create Event
    </button>
  );
}
