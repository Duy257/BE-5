import Router from 'express';
import videoController from '../controller/video-controller';
import {auth} from '../middleware/auth';


export const videoRouter = Router();

// videoRouter.use(auth);

videoRouter.get('', videoController.getAllVideo);
videoRouter.post('', videoController.addVideo);
videoRouter.delete('/:id', videoController.deleteVideo);