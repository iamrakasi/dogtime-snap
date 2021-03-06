export type Characteristic = {
  Char: string
  Rating: number
}

export type Dog = {
  Name: string
  ProfileUrl: string
  ImgSrc: string
  Characteristics: Characteristic[]
}
