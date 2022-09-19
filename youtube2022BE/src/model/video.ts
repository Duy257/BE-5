import { model, Schema } from "mongoose";
import {IUser} from './user';

export interface IVideo {
    name: string,
    avatar: string,
    video: string,
    title: string,
    view: number,
    description: string,
    like: number,
    disLike: number,
    dateCreate: Date
    idUser: IUser
}

const videoSchema = new Schema<IVideo>({
    name: String,
    avatar: String,
    video: String,
    title: String,
    view: Number,
    description: String,
    like: Number,
    disLike: Number,
    dateCreate: Date,
    idUser: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Users' 
    }],
})

const Video = model<IVideo>("Videos", videoSchema);

export {Video};

