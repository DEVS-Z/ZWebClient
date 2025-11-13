import { Fetcher } from './fetcher';
import { enviroment } from '../enviroment/enviroment';
import { IRutina } from '@/models/modules/IRutina';

const fetcher = new Fetcher(enviroment.Production.ApiUrl);

export const rutinasApi = {
  getAll: async () => {
    return await fetcher.get<{ status: number; message: string; data: IRutina[] }>('/rutinas/');
  },

  getById: async (id: number) => {
    return await fetcher.get<{ status: number; message: string; data: IRutina }>(`/rutinas/${id}`);
  },

  create: async (rutina: IRutina) => {
    return await fetcher.post<{ status: number; message: string; data: IRutina }>('/rutinas/', rutina);
  },

  update: async (id: number, rutina: IRutina) => {
    return await fetcher.put<{ status: number; message: string; data: IRutina }>(`/rutinas/${id}`, rutina);
  },

  delete: async (id: number) => {
    return await fetcher.delete<{ status: number; message: string }>(`/rutinas/${id}`);
  },
};
