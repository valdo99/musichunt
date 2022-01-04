import { ArgsType, Field } from "@nestjs/graphql";
import { SongCreateInput } from "./SongCreateInput";

@ArgsType()
class CreateSongArgs {
  @Field(() => SongCreateInput, { nullable: false })
  data!: SongCreateInput;
}

export { CreateSongArgs };
