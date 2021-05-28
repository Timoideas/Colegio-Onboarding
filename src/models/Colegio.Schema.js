import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const ColegioSchema = new Schema({
  name: { type: String },
  numero: { type: Number },
  ugel: { type: String },
  rd: { type: Number },
  admin: {
    name: { type: String },
    lastname: { type: String },
    telefono: { type: String },
    dni: { type: String },
  },
  direccion: {
    pais: { type: String },
    provincia: { type: String },
    departamento: { type: String },
    distrito: { type: String },
  },
  logo: { type: String },
  estudiantes: { type: Number, default: 0 },
  docentes: { type: Number, default: 0 },
  registro: { type: String, default: Fecha },
});
ColegioSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Colegio', ColegioSchema);
