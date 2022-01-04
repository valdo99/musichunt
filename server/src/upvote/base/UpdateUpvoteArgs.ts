import { ArgsType, Field } from "@nestjs/graphql";
import { UpvoteWhereUniqueInput } from "./UpvoteWhereUniqueInput";
import { UpvoteUpdateInput } from "./UpvoteUpdateInput";

@ArgsType()
class UpdateUpvoteArgs {
  @Field(() => UpvoteWhereUniqueInput, { nullable: false })
  where!: UpvoteWhereUniqueInput;
  @Field(() => UpvoteUpdateInput, { nullable: false })
  data!: UpvoteUpdateInput;
}

export { UpdateUpvoteArgs };
