import * as migration_20250128_232244 from './20250128_232244';

export const migrations = [
  {
    up: migration_20250128_232244.up,
    down: migration_20250128_232244.down,
    name: '20250128_232244'
  },
];
