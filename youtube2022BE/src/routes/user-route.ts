import { Router } from "express";
import { authAdmin } from "../middleware/checkAdmin";
import userController from "../controller/user-controller";

export const userRoute = Router();

// userRoute.use(authAdmin)
userRoute.get('', userController.getAll);
userRoute.put('/:id', userController.updateUser);
userRoute.put('/video/like', userController.likeVideo)
userRoute.put('/video/disLike', userController.disLikeVideo)
