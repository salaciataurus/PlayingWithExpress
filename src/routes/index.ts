import { Application } from 'express';
import { deleteAll, findAll, replaceAll } from '../data';

export const register = (app: Application) => {
  app.get('/items', findAll);

  app.post('/items', (req, res) => {
    replaceAll(req, res);
  });

  app.delete('/items', (req, res) => {
    deleteAll(req, res);
  });
};
