import { Sequelize } from 'sequelize-typescript';

import { databaseConfig } from './database.config';
import { SEQUELIZE, QA, BETA, BASE } from '../../constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.APP_ENV) {
        case QA:
          config = databaseConfig.qa;
          break;
        case BETA:
          config = databaseConfig.beta;
          break;
        case BASE:
          config = databaseConfig.base;
          break;
        default:
          config = databaseConfig.qa;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
