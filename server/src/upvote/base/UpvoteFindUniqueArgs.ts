import { ArgsType, Field } from "@nestjs/graphql";
import { UpvoteWhereUniqueInput } from "./UpvoteWhereUniqueInput";

@ArgsType()
class UpvoteFindUniqueArgs {
  @Field(() => UpvoteWhereUniqueInput, { nullable: false })
  where!: UpvoteWhereUniqueInput;
}

export { UpvoteFindUniqueArgs };
