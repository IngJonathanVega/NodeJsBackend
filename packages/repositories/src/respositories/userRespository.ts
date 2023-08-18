import { UserDto } from '@jvega/common'
import { AppDataSource } from '../data-source'
import { User } from '../entity/User'

export class UserRespository {
  public getAll = async (): Promise<UserDto[]> => {
    const users = await AppDataSource.getRepository(User).find()
    const result: UserDto[] = users.map(user => this.convert(user))
    return result
  }

  public get = async (id: number): Promise<UserDto | null> => {
    const user = await AppDataSource.getRepository(User).findOne({
      where: {
        id: id,
      },
    })
    return user ? this.convert(user) : null
  }

  public add = async ({ name, lastName }: UserDto): Promise<UserDto> => {
    const user = new User()
    user.firstName = name
    user.lastName = lastName
    user.age = 25
    await AppDataSource.manager.save(user)
    return this.convert(user)
  }

  private convert(user: User): UserDto {
    return {
      id: user.id,
      name: user.firstName,
      lastName: user.lastName!,
      username: `nickname_${user.firstName}`,
      email: `${user.firstName}@email.com`,
      status: 'Happy',
      phoneNumbers: [],
      age: 1,
    }
  }
}
