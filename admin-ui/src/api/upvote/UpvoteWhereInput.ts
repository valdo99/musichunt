import { StringFilter } from "../../util/StringFilter";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UpvoteWhereInput = {
  id?: StringFilter;
  song?: SongWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
