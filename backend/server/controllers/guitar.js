import Guitar from '../models/Guitar';

export const getGuitars = async (req, res, next) => {
  try {
    let allGuitars = await Guitar.find({});
    if (!allGuitars) return res.status(400).send({ message: 'cant find' });
    res.status(201).send({ allGuitars });
  } catch (error) {
    throw new Error(error);
  }
};

export const createGuitar = async (req, res, next) => {
  const { name, producent, price, woodType, img, kolor } = req.body;
  try {
    let kupa = await Guitar.create({ name, producent, price, woodType, img, kolor });
    kupa.save();
    if (!kupa) return res.status(400).send({ message: 'bad request' });
    res.status(201).send({ message: 'created' });
  } catch (error) {
    throw new Error(error);
  }
};
