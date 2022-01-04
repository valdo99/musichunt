import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class UpvoteCreateInput {
  @ApiProperty({
    required: true,
    type: () => SongWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SongWhereUniqueInput)
  @Field(() => SongWhereUniqueInput)
  song!: SongWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}
export { UpvoteCreateInput };
