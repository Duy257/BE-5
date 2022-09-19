import { Router } from "express";
import {AuthRoute} from "./auth-route";
import { userRoute } from "./user-route";
import {videoRouter} from './video-route'
import { auth } from "../middleware/auth";
import userController from "../controller/user-controller";

export const routes = Router();

routes.use('', AuthRoute);
routes.use('/users', userRoute);
routes.use('/video', videoRouter);
