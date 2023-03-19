# class

```js
class Cat {
    catName = 'lisa'
    catColor = 'red'

    constructor(age, listen3Func){
        this.catAge = age
        this.catLike = "eat fish"
        this.listen1 = function () {
            console.log("listen1", this)
        }
        this.listen2 = () => {
            console.log("listen2", this)
        }
        this.listen3 = listen3Func
    }

    speak = function () {
        console.log("speak", this)
    }

    walk(){
        console.log("walk", this)
    }

    sleep = () => {
        console.log("sleep", this)
    }
}
```

## properties

### define properties: 1st way

```js
class Cat {
    catName = 'lisa'
    catColor = 'red'
}
```

### define properties: 2nd way

```js
class Cat {
    constructor(age){
        this.catAge = age
        this.catLike = "eat fish"
    }
}
```

## methods

### define methods: 1st way

```js
class Cat {
    speak = function () {
        console.log("speak", this)
    }
}
```

### define methods: 2nd way

```js
class Cat {
    walk(){
        console.log("walk", this)
    }
}
```

### define methods: 3rd way

```js
class Cat {
    sleep = () => {
        console.log("sleep", this)
    }
}
```

### define methods: 4th way

```js
class Cat {
    constructor(listen3Func){
        this.listen1 = function () {
            console.log("listen1", this)
        }

        this.listen2 = () => {
            console.log("listen2", this)
        }

        this.listen3 = listen3Func
        // 如果 listen3Func 传入的是一个箭头函数 那么this指向 
        //      1. 在浏览器环境 指向Windows
        //      2. 在node环境下 为undefined
    }
}
```
