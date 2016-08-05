<?php
  error_reporting(0); 
header("Content-type:text/html;charset:utf-8");
 $conn=mysql_connect("localhost:3306", "root", "");

 mysql_query("set names 'utf8'");   
 $sql="SELECT a.lat,a.lng,a.station,b.pm2_5_24h,b.pm10_24h,b.pubtime,b.aqi FROM `airwatch` as b,`airstation` as a   where a.station_code=b.station_code AND a.﻿province='江苏省' AND b.pubtime in  ('".$_REQUEST['t']." 23:00:00','".$_REQUEST['t']." 02:00:00','".$_REQUEST['t']." 04:00:00','".$_REQUEST['t']." 06:00:00','".$_REQUEST['t']." 08:00:00','".$_REQUEST['t']." 10:00:00','".$_REQUEST['t']." 12:00:00','".$_REQUEST['t']." 14:00:00','".$_REQUEST['t']." 16:00:00','".$_REQUEST['t']." 18:00:00','".$_REQUEST['t']." 20:00:00','".$_REQUEST['t']." 22:00:00')";         
    
 $result=mysql_db_query("bigdata", $sql, $conn);
    // 获取查询结果
  
     //$row=mysql_fetch_row($result);
   
     $results = array();
      while ($row = mysql_fetch_assoc($result)) {
      $results[] = $row;

      }
      
// 将数组转成json格式
     echo json_encode($results);




    // 释放资源
    mysql_free_result($result);
    // 关闭连接
    mysql_close($conn);  
?> 