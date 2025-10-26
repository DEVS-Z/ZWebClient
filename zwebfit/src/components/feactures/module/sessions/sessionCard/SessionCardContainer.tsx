import { ISession } from "@/models/modules/ISession";
import SessionCardView from "./SessionCardView";

export default function SessionCardContainer({ session }: { session?: ISession }) {
  //Le puse que si manda un objeto vacio no pasa nada, porque daba error
  //en el archivo de page de sessions
  const defaultSession: ISession = {} as ISession;

  return <SessionCardView session={session ?? defaultSession} />;
}
