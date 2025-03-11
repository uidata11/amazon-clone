// 1. 문자열, 숫자, 불리언, null, undefinded
const a = ''
const b:string='2'

console.log(b)

const c = false

console.log(c)
// 2. 배열, 객체

const a1 = [1, 'asdf', false, null]

const a2 :number[] = [1,2]

const o = {name:'', age:12} 
const o2:{name:string; age:number} = {age:12, name:'123'}
const a3:{name:string, age:number}[]= [
    {name:'asdf', age:28}, 
    {name:'asdf', age:22}, 
]

const a4:Array<number>=[1,2,3]

type S =string
const s1:S = 'string'

type Type<T>=T

// type t1:Type<T=string/> = ''

// const t2:Type<>

// const t3 : type<number> = 12

type OBJ<T=stringn> ={
    name:string;
    age:number;
    mobile:T
}

const p1:OBJ = {age:12, name:'asdf', mobile:'01012341234'}
const p2:OBJ<number> = {age:12, name:'asdf', mobile:12341234}
const p3:OBJ<number|string>[] = [p1, p2]

interface Animal<stirng> {
    name:string
    id:number   
    price:number
    age:number
    isFemale:boolean
}

const an1:Animal = {
    name:'coco'
    id:1
    price:10
    age:3,
    isFemale:false
}
const an2:Animal = {
    name:'coco'
    id:1
    price:10
    age:3,
    isFemale:false
}

const an3:Animal<string|number>[] =[a1, a2]