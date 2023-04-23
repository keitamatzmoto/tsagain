let a1: number = 1
let a2: string = '1'
let a3: boolean = true
let a4: {
  a: number
  b: 3
} = {
  a: 1,
  b: 3,
}

class CB1 {
  b1: string[]
  b2: number

  constructor() {
    this.b1 = []
    this.b1.push('11')
    this.b2 = 0
  }
}

class CHoge {
  b1: string[]
  b2: number
  b3: CB1

  constructor(public a: number, public b: number) {
    this.b1 = []
    this.b1.push('shkiti1')
    this.b1.push('shkiti2')
    this.b2 = 1

    this.b3 = new CB1()
    this.b3.b1.push('shoi1')
    this.b3.b1.push('shoi2')
    this.b3.b2 = 1
  }
}
let a5: CHoge = new CHoge(1, 2)

// console.log(a1, a2, a3, a4, a5)

console.log(a5)

function AAA(obj: { b1: string[]; b2: number }, d1: CB1): void {
  obj.b1.push('IRETEMIRU')
  obj.b2 = 1616 //かわらない

  d1.b1.push('hogehogehoge')
  d1.b2 = 1616 //かわる
}

AAA({ b1: a5.b1, b2: a5.b2 }, a5.b3)

console.log(a5)
