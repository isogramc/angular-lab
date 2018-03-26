export class Customer {
  constructor (
    public id: number,
    public fullname: string,
    public email: string,
    public product: string,
    public score: number,
    public satisfaction: string,
    public message?: string
  ){}

}

