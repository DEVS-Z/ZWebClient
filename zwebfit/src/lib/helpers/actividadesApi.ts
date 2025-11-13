import { Fetcher } from './fetcher';
import { enviroment } from '../enviroment/enviroment';
import { IActividad } from '@/models/modules/IActividad';

const fetcher = new Fetcher(enviroment.Production.ApiUrl);

export const actividadesApi = {
  getAll: async () => {
    return await fetcher.get<{ status: number; message: string; data: IActividad[] }>('/actividades/');
  },

  getById: async (id: number) => {
    return await fetcher.get<{ status: number; message: string; data: IActividad }>(`/actividades/${id}`);
  },

  create: async (actividad: IActividad) => {
    return await fetcher.post<{ status: number; message: string; data: IActividad }>('/actividades/', actividad);
  },

  update: async (id: number, actividad: IActividad) => {
    return await fetcher.put<{ status: number; message: string; data: IActividad }>(`/actividades/${id}`, actividad);
  },

  delete: async (id: number) => {
    return await fetcher.delete<{ status: number; message: string }>(`/actividades/${id}`);
  },
};
