import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';

interface Item {
  id: string;
  name: string;
}

const items: Item[] = [];

const createRandomItem = (): Item => {
  return { id: faker.datatype.uuid(), name: faker.animal.dog() };
};

export const intiData = () => {
  Array.from({ length: 10 }).forEach(() => {
    items.push(createRandomItem());
  });
};

export const findAll = (req: Request, res: Response) => {
  res.status(200).json(items);
};

export const replaceAll = (req: Request, res: Response) => {
  items.length = 0;
  const list = req.body.items;
  items.push.apply(items, list);
  res.sendStatus(200);
};

export const deleteAll = (req: Request, res: Response) => {
  items.length = 0;
  res.sendStatus(200);
};
