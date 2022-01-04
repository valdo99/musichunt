import { Song } from "../song/Song";
import { Upvote } from "../upvote/Upvote";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  songs?: Array<Song>;
  updatedAt: Date;
  upvotes?: Array<Upvote>;
  username: string;
};
