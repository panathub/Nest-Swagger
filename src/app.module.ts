import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UsersService, PostsService, PrismaService],
})
export class AppModule {}
