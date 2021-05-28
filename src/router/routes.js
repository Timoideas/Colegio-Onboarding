import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
import { Auth } from '../middlewares/Auth';
routes.route('/').get(Auth, Index);
import {
  GETColegio,
  GETColegios,
  POSTColegio,
  PUTColegio,
  DELETEColegio,
} from '../controllers/Colegio.Controller';
routes.route('/colegios').get(GETColegios).post(POSTColegio);
routes
  .route('/colegio/:id')
  .get(GETColegio)
  .put(PUTColegio)
  .delete(DELETEColegio);
routes.route('*').get(BadUrl);

export default routes;
