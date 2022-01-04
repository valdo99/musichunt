import { Upvote as TUpvote } from "../api/upvote/Upvote";

export const UPVOTE_TITLE_FIELD = "id";

export const UpvoteTitle = (record: TUpvote): string => {
  return record.id || record.id;
};
