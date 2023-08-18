
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Middlewares
} from 'tsoa'
import { UsersService } from '@jvega/services'
import { UserDto, userSchema } from '@jvega/common'
import { RequestHandler } from 'express'
import { validateSchema } from '../middleware/validationSchema'

@Route('users')
export class UsersController extends Controller {
  @Get()
  public async getAll(): Promise<UserDto[]> {
    return new UsersService().getAll()
  }

  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<UserDto> {
    return new UsersService().get(userId, name)
  }

  @Middlewares<RequestHandler>(validateSchema(userSchema))
  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserDto 
  ): Promise<UserDto | null> {
    this.setStatus(201)
    return new UsersService().create(requestBody)
  }
}