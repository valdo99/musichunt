import { UpvoteWhereInput } from "./UpvoteWhereInput";
import { UpvoteOrderByInput } from "./UpvoteOrderByInput";

export type UpvoteFindManyArgs = {
  where?: UpvoteWhereInput;
  orderBy?: UpvoteOrderByInput;
  skip?: number;
  take?: number;
};
