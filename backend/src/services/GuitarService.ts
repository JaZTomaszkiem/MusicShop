import Guitar from '../models/guitars';

export const addGuitar = async (name: string, price: number) => {
  const guitar = await Guitar.create({
    name,
    price,
  });

  await guitar.save();

  return { message: 'The Guitar Has Been Added' };
};
