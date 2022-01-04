import { Song } from "../song/Song";
import { User } from "../user/User";

export type Upvote = {
  createdAt: Date;
  id: string;
  song?: Song;
  updatedAt: Date;
  user?: User;
};
