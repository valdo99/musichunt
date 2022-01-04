import { SongWhereInput } from "./SongWhereInput";
import { SongOrderByInput } from "./SongOrderByInput";

export type SongFindManyArgs = {
  where?: SongWhereInput;
  orderBy?: SongOrderByInput;
  skip?: number;
  take?: number;
};
