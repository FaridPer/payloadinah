import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidatePracticas: CollectionAfterChangeHook = async ({ doc }) => {
  // Revalida la ruta asociada al documento modificado
  revalidatePath(`/practicas-servicio/${doc.id}`)
  revalidatePath('/practicas-servicio', 'page') // Revalida la lista de prácticas
}

export const revalidatePracticasDelete: CollectionAfterDeleteHook = async ({ id }) => {
  // Revalida la lista general al eliminar un documento
  revalidatePath('/practicas-servicio', 'page')
}
