import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UpvoteUpdateInput = {
  song?: SongWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
