import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache';

export const revalidatePracticas: CollectionAfterChangeHook = async () => {
  console.log("Revalidando caché de practicas-servicio...");
  revalidateTag('practicas-servicio');
  revalidatePath('/servicio-practicas'); // Cambia por la ruta real
};

export const revalidatePracticasDelete: CollectionAfterDeleteHook = async () => {
  console.log("Revalidando caché de practicas-servicio después de eliminación")
  revalidateTag('practicas-servicio')  // Borra la caché cuando se elimina un programa
}