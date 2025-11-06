export interface INotification {
  id: string;
  type: 'match' | 'training';
  title: string;
  date: string;
  time: string;
  location: string;
  isRead: boolean;
}
