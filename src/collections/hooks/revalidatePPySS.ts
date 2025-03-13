import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidatePracticas: CollectionAfterChangeHook = async () => {
  revalidateTag('practicas-servicio') // Borra la caché cuando haya cambios
}

export const revalidatePracticasDelete: CollectionAfterDeleteHook = async () => {
  revalidateTag('practicas-servicio') // También al eliminar
}