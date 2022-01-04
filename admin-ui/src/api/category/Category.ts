import { Song } from "../song/Song";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  songs?: Array<Song>;
  updatedAt: Date;
};
