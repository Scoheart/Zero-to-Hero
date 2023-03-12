# 原生连接（JDBC）
## 下载mysql jar包

## 让项目识别jar包

## 编写代码

```java
 import java.sql.*;  
 ​  
 public class Main {  
     public static void main(String[] args) throws Exception {  
         Class.forName("com.mysql.cj.jdbc.Driver");  
         String url = "jdbc:mysql://localhost:3306/js";  
         String username = "root";  
         String password = "shuhao201028";  
 ​  
         Connection connection = DriverManager.getConnection(url, username, password);  
 ​  
         Statement statement = connection.createStatement();  
 ​  
         String sql = "select * from person_basic";  
 ​  
         ResultSet resultSet = statement.executeQuery(sql);  
 ​  
         while(resultSet.next()){  
             System.out.println(resultSet.getInt(1));  
             System.out.println(resultSet.getString(2));  
             System.out.println(resultSet.getInt(3));  
         }  
 ​  
         statement.close();  
     }  
 }
```
