
import {
  Body,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
  Middlewares
} from 'tsoa'
import { UsersService } from '@jvega/services'
import { UserDto, userSchema } from '@jvega/common'
import { RequestHandler } from 'express'
import { validateSchema } from '../middleware/validationSchema'
import { ControllerBase } from './base/controllerBase'

@Route('users')
export class UsersController extends ControllerBase {
  private readonly usersService: UsersService

  constructor(){
    super()
    this.usersService = this.servicesConfiguration.userService
  }

  @Get()
  public async getAll(): Promise<UserDto[]> {
    return await this.usersService.getAll()
  }

  @Get('{userId}')
  public async getUser(
    @Path() userId: number
  ): Promise<UserDto | null> {
    return await this.usersService.get(userId)
  }

  @Middlewares<RequestHandler>(validateSchema(userSchema))
  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserDto 
  ): Promise<UserDto | null> {
    this.setStatus(201)
    return await this.usersService.create(requestBody)
  }
}