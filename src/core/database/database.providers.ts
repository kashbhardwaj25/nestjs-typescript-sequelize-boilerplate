import { Sequelize } from 'sequelize-typescript';

import { databaseConfig } from './database.config';
import { SEQUELIZE } from '../../constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      if (process.env.APP_ENV) {
        config = databaseConfig.config;
      }

      const sequelize = new Sequelize(config);
      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
