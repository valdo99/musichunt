import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SongUpdateInput = {
  description?: string | null;
  name?: string;
  url?: string | null;
  user?: UserWhereUniqueInput;
};
