import { ArgsType, Field } from "@nestjs/graphql";
import { UpvoteWhereUniqueInput } from "./UpvoteWhereUniqueInput";

@ArgsType()
class DeleteUpvoteArgs {
  @Field(() => UpvoteWhereUniqueInput, { nullable: false })
  where!: UpvoteWhereUniqueInput;
}

export { DeleteUpvoteArgs };
