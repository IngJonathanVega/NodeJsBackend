import { UserDto } from "@jvega/common"

export class UsersService {
  public getAll(): UserDto[] {
    return [
      {
        id: 1,
        email: 'JonathanVega@doe.com',
        name: 'Jonathan Vega',
        status: 'Happy',
        phoneNumbers: [],
      },
      {
        id: 2,
        email: 'SebastianVega@doe.com',
        name: 'Felipe Vega',
        status: 'Sad',
        phoneNumbers: [],
      },
    ]
  }

  public get(id: number, name?: string): UserDto {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    }
  }

  public create(userCreationParams: UserDto): UserDto | null {
    try {
      return {
        ...userCreationParams,
        id: Math.floor(Math.random() * 10000), // Random
        status: 'Happy',
      }
    } catch (error) {
        console.info(error)
    } 
    return null
  }
}
