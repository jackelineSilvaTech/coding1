#### *Este é um mini dicionário de métodos de array realizado através de consultas no MDN Web Docs_*

# 1. Join()

.> Este método consegue juntar os elementos de um array.

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

```

# 2. Unshift()
.> Este método consegue adicionar um ou mais elementos no INÍCIO de um array, modicando assim o array original. Com isso, ele retorna o novo comprimento do array após a adição dos elementos.

```js
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

# 3. Filter()
.> Este método consegue criar um novo array com todos os elementos que passaram em um teste (fornecido por uma função). Ele percorre cada elemento do array original e aplica a função de teste a cada um. Se a função retornar true, o elemento é adicionado ao novo array. Caso contrário, ele é ignorado
### 

```js
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

# 4. Map()
.> Este método consegue invocar a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```js
var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
````

# 5. forEach()
> Este método itera (percorre) cada elemento de um array e executa uma função para cada elemento.

```js
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```
