import { UserRegister } from '@/types'

export function parseUserDataLib(userData: string): UserRegister {
  const userObject: UserRegister = {}
  const entries = userData.match(/(\w+):([^ ]+)/g)
  if (entries) {
    entries.forEach((entry) => {
      const [key, value] = entry.split(':')

      userObject[key as keyof UserRegister] =
        value === 'true' ? true : value === 'false' ? false : value
    })
  }

  return userObject
}
