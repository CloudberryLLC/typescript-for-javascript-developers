export {};

//タプルはすべての配列の要素に対して型を定義する。型推論で出てこないので定義が必要。

let profile: [string, number] = ['Nyaan', 255];

//profile = [255, 'Nyaan'];

console.log(profile);