import { SongWhereUniqueInput } from "./SongWhereUniqueInput";
import { SongUpdateInput } from "./SongUpdateInput";

export type UpdateSongArgs = {
  where: SongWhereUniqueInput;
  data: SongUpdateInput;
};
