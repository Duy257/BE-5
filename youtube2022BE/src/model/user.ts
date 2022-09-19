import { model, Schema } from "mongoose";
import { IVideo } from './video';

export interface IUser {
    username: string;
    password: string;
    avatar: string;
    listLike: IVideo;
    myVideo: IVideo;
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    avatar: String,
    listLike: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Videos' 
    }],
})

const User = model<IUser>("Users", userSchema);
export  {User};
