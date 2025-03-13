import MuseosAPI from './getMuseos'
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<p>Cargando museos y zonas...</p>}>
      <MuseosAPI />
    </Suspense>
  );
}
