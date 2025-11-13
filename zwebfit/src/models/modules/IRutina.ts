export interface IRutina {
  RutinaId?: number;
  CreadoPorId?: number;
  Nombre: string;
  Objetivo: string;
  NivelDificultad: string;
  FechaRegistro?: string; // Format: "2025-11-13 01:33:34"
  Tipo: string;
}

export interface IRutinaFormProps {
  isOpen: boolean;
  onClose: () => void;
  rutinaData?: IRutina;
  onSave: (rutina: IRutina) => void;
  onDelete?: (rutinaId: number) => void;
}
