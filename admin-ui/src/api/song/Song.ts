import { Category } from "../category/Category";
import { Upvote } from "../upvote/Upvote";
import { User } from "../user/User";

export type Song = {
  category?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  updatedAt: Date;
  upvotes?: Array<Upvote>;
  url: string | null;
  user?: User;
};
