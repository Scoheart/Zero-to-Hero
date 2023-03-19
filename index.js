class cat {
    catName = 'lisa'
    catColor = 'red'

    constructor(age, listen3Func){
        this.catAge = age
        this.catLike = "eat fish"
        this.listen1 = function () {
            console.log("listen", this)
        }
        this.listen2 = () => {
            console.log("listen", this)
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

let cat1 = new cat(15, ()=>{
    console.log("listen3", this)
})
console.log(cat1)
cat1.listen3()
