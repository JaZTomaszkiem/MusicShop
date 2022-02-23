import { Schema, model } from 'mongoose';

const GuitarSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default model('Guitars', GuitarSchema, 'Guitars');
