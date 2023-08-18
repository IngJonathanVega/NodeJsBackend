import { RepositoriesConfiguration } from '@jvega/repositories'
import { UsersService } from '../user'

export class ServicesConfiguration {
  private readonly repositories = new RepositoriesConfiguration()
  readonly userService = new UsersService(this.repositories.userRepository)
}
