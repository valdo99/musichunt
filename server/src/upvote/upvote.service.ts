import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UpvoteServiceBase } from "./base/upvote.service.base";

@Injectable()
export class UpvoteService extends UpvoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
