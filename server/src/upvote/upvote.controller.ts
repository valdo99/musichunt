import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UpvoteService } from "./upvote.service";
import { UpvoteControllerBase } from "./base/upvote.controller.base";

@swagger.ApiTags("upvotes")
@common.Controller("upvotes")
export class UpvoteController extends UpvoteControllerBase {
  constructor(
    protected readonly service: UpvoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
