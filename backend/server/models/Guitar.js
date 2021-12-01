import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var GuitarsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  producent: {
    type: String,
  },
  price: {
    type: Number,
  },
  woodType: {
    type: String,
  },
  img: {
    type: String,
  },
  kolor: {
    type: String,
  },
});

var Token = mongoose.model('Guitars', GuitarsSchema, 'Guitars');
module.exports = Token;
