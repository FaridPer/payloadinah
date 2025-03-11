import { getPayload } from 'payload'
import config from '@payload-config'
import ServicioPracticas from './Client'

export default async function ProgramasAPI() {
  const payload = await getPayload({ config });
  const data = await payload.find({ collection: 'practicas-servicio' });
  const programas = data.docs; // Datos obtenidos
  
  return <ServicioPracticas programas={programas} />;
  
}
