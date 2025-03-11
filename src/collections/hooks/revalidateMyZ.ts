import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { MuseosZona, PractiasServicio } from '@/payload-types'

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

export const revalidatePracticas: CollectionAfterChangeHook<PractiasServicio> = ({
    doc,
    previousDoc,
    req: { payload, context },
  }) => {
    if (!context.disableRevalidate) {
      const path = `/practias-servicio/${doc.id}`;
      payload.logger.info(`Revalidando práctica/servicio en la ruta: ${path}`);
  
      revalidatePath(path);
      revalidateTag('practicas-sitemap');
  
      if (previousDoc && previousDoc.id !== doc.id) {
        const oldPath = `/practias-servicio/${previousDoc.id}`;
        payload.logger.info(`Revalidando ruta anterior: ${oldPath}`);
        revalidatePath(oldPath);
        revalidateTag('practicas-sitemap');
      }
    }
    return doc;
  };
  
export const revalidateDeletePracticas: CollectionAfterDeleteHook<PractiasServicio> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/practias-servicio/${doc.id}`;
    revalidatePath(path);
    revalidateTag('practicas-sitemap');
  }

  return doc;
};
