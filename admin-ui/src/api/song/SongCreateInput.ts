import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SongCreateInput = {
  description?: string | null;
  name: string;
  url?: string | null;
  user: UserWhereUniqueInput;
};
