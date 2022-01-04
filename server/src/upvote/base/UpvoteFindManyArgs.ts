import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpvoteWhereInput } from "./UpvoteWhereInput";
import { Type } from "class-transformer";
import { UpvoteOrderByInput } from "./UpvoteOrderByInput";

@ArgsType()
class UpvoteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UpvoteWhereInput,
  })
  @Field(() => UpvoteWhereInput, { nullable: true })
  @Type(() => UpvoteWhereInput)
  where?: UpvoteWhereInput;

  @ApiProperty({
    required: false,
    type: UpvoteOrderByInput,
  })
  @Field(() => UpvoteOrderByInput, { nullable: true })
  @Type(() => UpvoteOrderByInput)
  orderBy?: UpvoteOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UpvoteFindManyArgs };
