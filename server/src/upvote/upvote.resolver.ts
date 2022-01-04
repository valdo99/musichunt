import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UpvoteResolverBase } from "./base/upvote.resolver.base";
import { Upvote } from "./base/Upvote";
import { UpvoteService } from "./upvote.service";

@graphql.Resolver(() => Upvote)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UpvoteResolver extends UpvoteResolverBase {
  constructor(
    protected readonly service: UpvoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
