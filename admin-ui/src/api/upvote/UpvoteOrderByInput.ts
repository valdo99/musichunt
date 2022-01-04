import { SortOrder } from "../../util/SortOrder";

export type UpvoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  songId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
