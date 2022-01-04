import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateUpvoteArgs } from "./CreateUpvoteArgs";
import { UpdateUpvoteArgs } from "./UpdateUpvoteArgs";
import { DeleteUpvoteArgs } from "./DeleteUpvoteArgs";
import { UpvoteFindManyArgs } from "./UpvoteFindManyArgs";
import { UpvoteFindUniqueArgs } from "./UpvoteFindUniqueArgs";
import { Upvote } from "./Upvote";
import { Song } from "../../song/base/Song";
import { User } from "../../user/base/User";
import { UpvoteService } from "../upvote.service";

@graphql.Resolver(() => Upvote)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UpvoteResolverBase {
  constructor(
    protected readonly service: UpvoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "read",
    possession: "any",
  })
  async _upvotesMeta(
    @graphql.Args() args: UpvoteFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Upvote])
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "read",
    possession: "any",
  })
  async upvotes(
    @graphql.Args() args: UpvoteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Upvote[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Upvote",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Upvote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "read",
    possession: "own",
  })
  async upvote(
    @graphql.Args() args: UpvoteFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Upvote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Upvote",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Upvote)
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "create",
    possession: "any",
  })
  async createUpvote(
    @graphql.Args() args: CreateUpvoteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Upvote> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Upvote",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Upvote"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        song: {
          connect: args.data.song,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Upvote)
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "update",
    possession: "any",
  })
  async updateUpvote(
    @graphql.Args() args: UpdateUpvoteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Upvote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Upvote",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Upvote"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          song: {
            connect: args.data.song,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Upvote)
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "delete",
    possession: "any",
  })
  async deleteUpvote(
    @graphql.Args() args: DeleteUpvoteArgs
  ): Promise<Upvote | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Song, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "read",
    possession: "any",
  })
  async song(
    @graphql.Parent() parent: Upvote,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Song | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Song",
    });
    const result = await this.service.getSong(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Upvote",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Upvote,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
