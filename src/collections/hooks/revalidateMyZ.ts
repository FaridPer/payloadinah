import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { MuseosZona, PracticasServicio } from '@/payload-types'

export const revalidateMyZ: CollectionAfterChangeHook<MuseosZona> = ({
    doc,
    previousDoc,
    req: { payload, context },
  }) => {
    if (!context.disableRevalidate) {
      const path = `/museos-zona/${doc.id}`;
      payload.logger.info(`Revalidando museo/zona en la ruta: ${path}`);
  
      revalidatePath(path);
      revalidateTag('myz-sitemap');
  
      if (previousDoc && previousDoc.id !== doc.id) {
        const oldPath = `/museos-zona/${previousDoc.id}`;
        payload.logger.info(`Revalidando ruta anterior: ${oldPath}`);
        revalidatePath(oldPath);
        revalidateTag('myz-sitemap');
      }
    }
    return doc;
  };
  
export const revalidateDeleteMyZ: CollectionAfterDeleteHook<MuseosZona> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/museos-zona/${doc.id}`;
    revalidatePath(path);
    revalidateTag('myz-sitemap');
  }

  return doc;
};

export const revalidatePracticas: CollectionAfterChangeHook<PracticasServicio> = ({
    doc,
    previousDoc,
    req: { payload, context },
  }) => {
    if (!context.disableRevalidate) {
      const path = `/practicas-servicio/${doc.id}`;
      payload.logger.info(`Revalidando práctica/servicio en la ruta: ${path}`);
  
      revalidatePath(path);
      revalidateTag('practicas-sitemap');
  
      if (previousDoc && previousDoc.id !== doc.id) {
        const oldPath = `/practicas-servicio/${previousDoc.id}`;
        payload.logger.info(`Revalidando ruta anterior: ${oldPath}`);
        revalidatePath(oldPath);
        revalidateTag('practicas-sitemap');
      }
    }
    return doc;
  };
  
export const revalidateDeletePracticas: CollectionAfterDeleteHook<PracticasServicio> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/practicas-servicio/${doc.id}`;
    revalidatePath(path);
    revalidateTag('practicas-sitemap');
  }

  return doc;
};
