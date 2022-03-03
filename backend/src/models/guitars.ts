import { Schema, model } from 'mongoose';

const GuitarSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});

export default model('Guitars', GuitarSchema, 'Guitars');
