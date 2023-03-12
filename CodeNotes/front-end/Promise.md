# Promise

```javascript
const promiseObject = new Promise((resolve, reject) => {
  resolve() // OR reject()
})

promiseObject.then(resolveValue =>{
  
}, rejectValue => {
  
})
```



## promise.reslove()

### 传入非promise对象

```javascipt
const promiseObject = Promise.resolve("ok")
```

会把“ok”字符串变成一个状态为 resolve 的 promise 对象 = 在resolve函数里 new 了 一个新的状态为resolve的promise对象

```javascript
const newPromiseObject = new Promise((resovle, reject) => {
  resolve("ok")
})

const promiseObject = Promise.resolve(newPromiseObject)
```

### 传入promise对象

##### promise对象状态为resolve

结果就是传入的promise对象的状态 即 resolve

```javascript
const promiseObject = Promise.resolve(new Promise((resovle, reject) => {
  resolve()
}))
```



##### promise对象状态为reject

结果就是传入promise对象的状态 即 reject

```javascript
const promiseObject = Promise.resolve(new Promise((resovle, reject) => {
  reject()
}))
```



## promise.reject

### 传入非promise对象

```javascipt
const promiseObject = Promise.reject("no")
```

会把“no”字符串变成一个状态为 reject 的 promise 对象 = 在reject函数里 new 了 一个新的状态为reject的promise对象

```javascript
const newPromiseObject = new Promise((resovle, reject) => {
  reject("no")
})

const promiseObject = Promise.reject(newPromiseObject)
```

### 传入promise对象

##### promise对象的状态为resolve

结果不在是传入的promise对象的状态 (resolve) 而是reject

```javascript
const promiseObject = Promise.reject(new Promise((resovle, reject) => {
  resolve()
}))
```



##### promise对象的状态为reject

结果就是传入promise对象的状态 即 reject

```javascript
const promiseObject = Promise.resolve(new Promise((resovle, reject) => {
  reject()
}))
```

