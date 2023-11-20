export interface IClientModel {
  id: string
  firstName: string
  lastName: string
  email: string
  events: IEvntModel[]
}

export interface IEvntModel {
  id: string
  title: string
  startDateTime: string
}
