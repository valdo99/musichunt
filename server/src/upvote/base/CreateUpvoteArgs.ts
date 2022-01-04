import { ArgsType, Field } from "@nestjs/graphql";
import { UpvoteCreateInput } from "./UpvoteCreateInput";

@ArgsType()
class CreateUpvoteArgs {
  @Field(() => UpvoteCreateInput, { nullable: false })
  data!: UpvoteCreateInput;
}

export { CreateUpvoteArgs };
