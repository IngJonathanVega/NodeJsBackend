import { UserDto } from '@jvega/common'
import { UserRespository } from '@jvega/repositories'

export class UsersService {
  constructor(private readonly userRespository: UserRespository) {}

  public async getAll(): Promise<UserDto[]> {
    return await this.userRespository.getAll()
  }

  public async get(id: number): Promise<UserDto | null> {
    return await this.userRespository.get(id)
  }

  public async create(dto: UserDto): Promise<UserDto> {
    return await this.userRespository.add(dto)
  }
}
