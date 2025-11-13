export interface IActividad {
  ActividadId?: number;
  JugadorId?: number;
  RutinaId?: number;
  Tipo: string;
  FechaInicio: string; // Format: "2025-11-13T01:42:03.490Z"
  FechaFin: string; // Format: "2025-11-13T01:42:03.490Z"
  Descripcion: string;
}

export interface IActividadFormProps {
  isOpen: boolean;
  onClose: () => void;
  actividadData?: IActividad;
  rutinas: Array<{ RutinaId?: number; Nombre: string }>;
  onSave: (actividad: IActividad) => void;
  onDelete?: (actividadId: number) => void;
}
