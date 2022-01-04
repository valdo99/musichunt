import { Module } from "@nestjs/common";
import { UpvoteModuleBase } from "./base/upvote.module.base";
import { UpvoteService } from "./upvote.service";
import { UpvoteController } from "./upvote.controller";
import { UpvoteResolver } from "./upvote.resolver";

@Module({
  imports: [UpvoteModuleBase],
  controllers: [UpvoteController],
  providers: [UpvoteService, UpvoteResolver],
  exports: [UpvoteService],
})
export class UpvoteModule {}
