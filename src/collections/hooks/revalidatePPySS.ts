import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

/**
 * Hook to revalidate paths after a Practicas y Servicios document is created or updated
 */
export const revalidatePracticas: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    // Revalidate the specific page for this document
    revalidatePath(`/practicas-servicio/${doc.id}`)
    
    // Revalidate the list page for all practicas
    revalidatePath('/practicas-servicio')
    
    console.log(`Revalidated paths for program: ${doc.nombre_programa} (ID: ${doc.id})`)
  } catch (error) {
    console.error('Error revalidating paths after program change:', error)
  }
}

/**
 * Hook to revalidate paths after a Practicas y Servicios document is deleted
 */
export const revalidatePracticasDelete: CollectionAfterDeleteHook = async ({ id }) => {
  try {
    // For deleted documents, we still revalidate the specific route
    // (will typically show a 404 page, but the route needs refreshing)
    revalidatePath(`/practicas-servicio/${id}`)
    
    // Revalidate the list page
    revalidatePath('/practicas-servicio')
    
    console.log(`Successfully revalidated paths after deleting program ID: ${id}`)
  } catch (error) {
    console.error('Error revalidating paths after program deletion:', error)
  }
}