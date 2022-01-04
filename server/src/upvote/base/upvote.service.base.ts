import { PrismaService } from "nestjs-prisma";
import { Prisma, Upvote, Song, User } from "@prisma/client";

export class UpvoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UpvoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteFindManyArgs>
  ): Promise<number> {
    return this.prisma.upvote.count(args);
  }

  async findMany<T extends Prisma.UpvoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteFindManyArgs>
  ): Promise<Upvote[]> {
    return this.prisma.upvote.findMany(args);
  }
  async findOne<T extends Prisma.UpvoteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteFindUniqueArgs>
  ): Promise<Upvote | null> {
    return this.prisma.upvote.findUnique(args);
  }
  async create<T extends Prisma.UpvoteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteCreateArgs>
  ): Promise<Upvote> {
    return this.prisma.upvote.create<T>(args);
  }
  async update<T extends Prisma.UpvoteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteUpdateArgs>
  ): Promise<Upvote> {
    return this.prisma.upvote.update<T>(args);
  }
  async delete<T extends Prisma.UpvoteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpvoteDeleteArgs>
  ): Promise<Upvote> {
    return this.prisma.upvote.delete(args);
  }

  async getSong(parentId: string): Promise<Song | null> {
    return this.prisma.upvote
      .findUnique({
        where: { id: parentId },
      })
      .song();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.upvote
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
