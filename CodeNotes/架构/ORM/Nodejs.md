# 原生连接
## npm 下载 mysql
```shell
npm i mysql
```
## 编写代码
```js
const mysql = require('mysql');

const connect = mysql.createConnection({

host:"localhost",

port: '3306',

user: "root",

password: 'shuhao201028',

database: 'js'

})

connect.connect()

const selectSql = "select * from person_basic"

const insertSql = "insert into person_basic values(5, 'sf', 1, 'sdf')"

const updateSql = "update person_basic set name = 'new_name' where id = 1"

const deleteSql = "delete from person_basic where id = 1"

  

connect.query(selectSql, function(res,result){

console.log(res)

console.log(result)

})

  

connect.end()
```

