import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UpvoteCreateInput = {
  song: SongWhereUniqueInput;
  user: UserWhereUniqueInput;
};
