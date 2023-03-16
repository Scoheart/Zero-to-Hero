# vue2

## Virtual-DOM

```js	
import Vue from 'vue';

new Vue({
    el: "#app",
    render(createElement){
        const VDOM = createElement('h1', {}, 'tag content')
        console.log("first")
        return VDOM
    }
})
```



# react

## Virtual-DOM

```js
import React from 'react';
import ReactDOM from 'react-dom';

const VDOM = React.createElement('h1', {}, "sdfsdf")
ReactDOM.render(VDOM, document.querySelector('#app'))
```