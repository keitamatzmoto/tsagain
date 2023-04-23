// let a = 100

// function AAA<T>(aaa: T, bbb: T): T {
//   if (typeof aaa === 'number' && typeof bbb === 'number') {
//     return aaa + bbb
//   }
// }

// console.log(AAA(1, '10'))

let ap1 = function () {
  // this.aaa = 1
  // this.bbb = 2
  // // ccc = 3
}
console.log(ap1)

// let role: any[2] = [2, 'hoge']
// let role: [number, string, number] = [2, 'hoge']
let role: [number, string, number] = [2, 'hoge', 3]

console.log(role)
role.push('hoge')
console.log(role)

role = [1, 'hoho', 1]

console.log('analytic?')

const person = {
  id: 1,
  name: 'hoge',
  pfunc: function () {
    console.log('gya')
  },
  sarani: {
    id: 2,
    name: 'sarani!',
  },
}

const personb = { ...person }

console.log(person, personb)

personb.pfunc()

const aaa = [1, 3, 124, 34, 34, 3, 434, 3]

function func01(...args: number[]): void {
  for (let a of args) {
    console.log(`number=${a}`)
  }

  const [b1, b2, ...b3] = args
  console.log('b1', b1)
  console.log('b2', b2)
  console.log('b3', b3)
}

// func01(aaa)
func01(1, 432, 413, 4122, 412, 4, 124, 12, 32, 423)
