import { IDefaultArgs } from "src/common/interfaces/repository.interface"
import { getAllUsers, createUser } from "./libs"

export const getUserList = (args: IDefaultArgs = {}): Promise<Record<string, any>[]> => {
  return new Promise(async (resolve, reject) => {
    return await getAllUsers(args)
      .then((response) => resolve(response))
      .catch((err) => reject(err))
  })
}

export const addUser = (args: IDefaultArgs = {}): Promise<Record<string, any>> => {
  return new Promise(async (resolve, reject) => {
    return await createUser(args)
      .then((response) => resolve(response))
      .catch((err) => reject(err))
  })
}

export default {
  getUserList,
  addUser,
}
