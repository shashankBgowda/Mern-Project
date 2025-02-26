import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',test);

export default router; //as we are exporting default, we can import by any name.