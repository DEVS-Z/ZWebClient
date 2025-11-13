export interface IClubSuscription {
    SuscripcionId? : number;
    Nombre?: string;
    Precio?: number;
    CantPlayers?: number;
}

export interface IClubSuscriptionProps{
    clubSuscription : IClubSuscription;
    onChange: (value: string | number) => void;
}