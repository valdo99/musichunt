import { ArgsType, Field } from "@nestjs/graphql";
import { SongWhereUniqueInput } from "./SongWhereUniqueInput";
import { SongUpdateInput } from "./SongUpdateInput";

@ArgsType()
class UpdateSongArgs {
  @Field(() => SongWhereUniqueInput, { nullable: false })
  where!: SongWhereUniqueInput;
  @Field(() => SongUpdateInput, { nullable: false })
  data!: SongUpdateInput;
}

export { UpdateSongArgs };
