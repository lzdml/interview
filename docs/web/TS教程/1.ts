type DeepRequired<T> = T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T


type DeepOptional<T> = T extends object ? { [P in keyof T]?: DeepOptional<T[P]> } : T


type DeepReadonly<T> = T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T

type User = {
  name: string
  age: number
  children: {
    boy: number
    girl: number
  }
}

const user = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
}

const user2: DeepOptional<User> = {
  name: 'John Doe',
}

type User3 = {
  name?: string
  age?: number
  children?: {
    boy?: number
    girl?: number
  }
}

const user3: DeepRequired<User3> = {
  name: 'John Doe',
  age: 30,
  children: {
    boy: 30,
    girl: 30
  }
}



type T1 = NonNullable<string | number | undefined>
type T2 = NonNullable<string | string[] | null | undefined>

type T3 = { a: string } & {}
type T5 = null & {}
type T6 = undefined & {}
type T7 = number & {}

type objNonNullable<T> = { [P in keyof T as T[P] extends null | undefined ? never : P]: T[P] }

type TnUser = {
  name: string
  age: null,
  gender: undefined
}

type TN1 = objNonNullable<TnUser>


type N1 = Awaited<Promise<string>>

type N2 = Awaited<Promise<Promise<number>>>


// 联合类型, 会出发分发
type N3 = Awaited<boolean | Promise<number>>


type P1 = Parameters<() => string>

type P2 = Parameters<(s: string) => void>

type P3 = Parameters<<T>(arg: T) => T>
