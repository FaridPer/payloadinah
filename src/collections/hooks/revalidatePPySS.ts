import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache';

export const revalidatePracticas: CollectionAfterChangeHook = async () => {
  revalidatePath('/servicio-practicas'); // Cambia por la ruta real
};

export const revalidatePracticasDelete: CollectionAfterDeleteHook = async () => {
  revalidateTag('practicas-servicio')  // Borra la caché cuando se elimina un programa
}