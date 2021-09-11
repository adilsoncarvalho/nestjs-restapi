import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import baseConfig from './typeorm.config';

export const config: TypeOrmModuleOptions = {
  ...baseConfig,
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
