import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class UpvoteUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SongWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SongWhereUniqueInput)
  @IsOptional()
  @Field(() => SongWhereUniqueInput, {
    nullable: true,
  })
  song?: SongWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}
export { UpvoteUpdateInput };
