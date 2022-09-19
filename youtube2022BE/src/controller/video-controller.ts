// Quản lý giao dịch
import { Request, Response } from 'express';
import {Video} from '../model/video';
import moment, { isDate } from 'moment';

class VideoController {
    getAllVideo = async(req: any, res: any) => {
        try {
            let videos = await Video.find()
            res.status(200).json(videos);
        }catch {
            res.status(404).json();
        }
    };

    addVideo = async(req: any, res: any) => {
        try {
            let video = req.body;
            let day = new Date;
            video.dateCreate = day;
            await Video.create(video);
            res.status(200).json(video);
        }catch (err) {
            res.status(404).json();

        }
    }



    deleteVideo = async (req: Request, res: Response) => {        
        try {
            let id = req.params.id;
            let video = await Video.findById(id);
            video.delete()
            res.status(204).json();
        }catch(err) {
            res.status(404).json();
        }
    }
}

export default new VideoController();