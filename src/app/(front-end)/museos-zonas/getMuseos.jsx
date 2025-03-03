import { getPayload } from 'payload'
import config from '@payload-config'
import MuseosZonas from './Client';

export default async function MuseosAPI() {
  const payload = await getPayload({ config });
  const data = await payload.find({ collection: 'museos-zona' });
  const myz = data.docs; // Datos obtenidos
  
  return <MuseosZonas myz={myz} />;
  
}
