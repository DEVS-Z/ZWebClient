// src/components/Features/users/user-home/UserHomeView.tsx

type UserHomeViewProps = {
  username: string;
  stats: number;
};

export default function UserHomeView({ username, stats }: UserHomeViewProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Hola, {username} 👋</h1>
      <p className="text-gray-600">Tienes {stats} puntos acumulados</p>
    </div>
  );
}
