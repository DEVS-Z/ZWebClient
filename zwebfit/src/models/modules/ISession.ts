export interface ISession{
    id : string;
    createdById? : string;
    createdByName? : string;
    assignDate? : Date;
    duration? : string;
    sessionPlayer? : number;
    type? : string;
    time?: string; 
}