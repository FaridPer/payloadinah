import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidatePracticas: CollectionAfterChangeHook = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    const path = `/practicas-servicio/${doc.id}`
    payload.logger.info(`Revalidando caché en la ruta: ${path}`)
    
    revalidatePath(path)

    // Si el documento tenía cambios en algún campo clave, puedes forzar la revalidación
    if (previousDoc && previousDoc.id !== doc.id) {
      const oldPath = `/practicas-servicio/${previousDoc.id}`
      payload.logger.info(`Revalidando ruta anterior: ${oldPath}`)
      revalidatePath(oldPath)
    }
  }

  return doc
}

export const revalidatePracticasDelete: CollectionAfterDeleteHook = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/practicas-servicio/${doc.id}`
    revalidatePath(path)
  }

  return doc
}
