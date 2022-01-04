import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SongWhereInput } from "./SongWhereInput";
import { Type } from "class-transformer";
import { SongOrderByInput } from "./SongOrderByInput";

@ArgsType()
class SongFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SongWhereInput,
  })
  @Field(() => SongWhereInput, { nullable: true })
  @Type(() => SongWhereInput)
  where?: SongWhereInput;

  @ApiProperty({
    required: false,
    type: SongOrderByInput,
  })
  @Field(() => SongOrderByInput, { nullable: true })
  @Type(() => SongOrderByInput)
  orderBy?: SongOrderByInput;

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

export { SongFindManyArgs };
