import Repository from "../../base/repository/Repository"
import { IDefaultArgs } from "../../common/interfaces/general.interface"
import * as library from "./libs"

class UserRepository extends Repository {
  public async list(args: { id?: number; email?: string } = {}): Promise<Record<string, any>[]> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .list(args)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async profile(id: number): Promise<Record<string, any>[]> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .profile(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async upsert(args: IDefaultArgs = {}): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .upsert(args)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async archive(id: number): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .archive(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async restore(id: number): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .restore(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async toggle(id: number): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .toggle(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async delete(id: number): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .delete(id)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }

  public async getNonBlockedExistUser(args: {
    email: string
    password: string
    reseller_id: number
  }): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
      return await library.repo.pgLibrary
        .getNonBlockedExistUser(args)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }
}

export default new UserRepository()
