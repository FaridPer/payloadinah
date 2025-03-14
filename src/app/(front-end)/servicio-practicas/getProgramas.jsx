import { getPayload } from 'payload'
import config from '@payload-config'
import ServicioPracticas from './Client'
import { unstable_cache } from 'next/cache'

const getCachedPracticas = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const data = await payload.find({
      collection: 'practicas-servicio',
      limit: 100,
      sort: 'id'
    })
    return data.docs // Retorna solo los documentos
  },
  ['practicas-servicio'] // Etiqueta para invalidación
)


export default async function ProgramasAPI() {
  const programas = await getCachedPracticas(); // Usa la función cacheada
  return <ServicioPracticas programas={programas} />
}
