import { ValidateObject } from '../libraries/Validate';
import ColegioSchema from '../models/Colegio.Schema';

export async function GETColegios(req, res) {
  try {
    const ColegioDB = await ColegioSchema.find();
    res.status(200).json({ ok: true, data: ColegioDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETColegio(req, res) {
  try {
    const { id } = req.params;
    const ColegioDB = await ColegioSchema.findById(id);
    res.status(200).json({ ok: true, data: ColegioDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTColegio(req, res) {
  try {
    const body = await ValidateObject(req.body, [
      'name',
      'numero',
      'rd',
      'ugel',
      'admin',
      'direccion',
      'logo',
      'registro',
    ]);
    const Colegio = new ColegioSchema(body);
    const ColegioDB = await Colegio.save();
    res.status(200).json({ ok: true, data: ColegioDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTColegio(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, [
      'name',
      'numero',
      'rd',
      'ugel',
      'admin',
      'direccion',
      'logo',
      'registro',
    ]);
    const Colegio = await ColegioSchema.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: Colegio });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEColegio(req, res) {
  const { id } = req.body;
  ColegioSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
