function dataSD(t){
    var jsonStr=null;
     var geoCoordMap = {};
            var pm25Data=[];
            var pm10Data=[];
            var aqiData=[];
            var pm10time=[];
            var pm25time=[];
            var aqitime=[];
            var dtime;
       $.ajax({
            type:"POST",
            url:"dataimportSD.php",
            dataType:"text",
            cache:false,
            async:false,
            data:{"t":t},
            success:function(res){
                jsonStr=$.parseJSON(res);

                 //console.log("jsonStr "+jsonStr);
                 for(var i=0;i<=23;i++){
                $.each(jsonStr,function(index,item){
                    geoCoordMap[jsonStr[index].station]=[parseFloat(jsonStr[index].lng),parseFloat(jsonStr[index].lat)];
                   dtime=dealtime(jsonStr[index].pubtime);
                  if(dtime==i){
                    pm10Data.push({
                      name:jsonStr[index].station,
                      value:jsonStr[index].pm10_24h,
                    });
                    pm25Data.push({
                       name:jsonStr[index].station,
                       value:jsonStr[index].pm2_5_24h,
                    });
                    aqiData.push({
                       name:jsonStr[index].station,
                       value:jsonStr[index].aqi,
                    })
                   
                  }
                });
                // console.log("pm10Data "+pm10Data);
                pm10time[i]=pm10Data;
                pm25time[i]=pm25Data;
                aqitime[i]=aqiData;
                 //console.log("time "+time[i]);
                pm10Data=[];
                pm25Data=[];
                aqiData=[];
                  }





            },
            error:function(){alert('eror');}    
  
        })
      // console.log(geoCoordMap);
      // console.log(pm25Data[0]);
     //   return {a:geoCoordMap,b:pm25Data,c:pm10Data};
     return{a:geoCoordMap,b:pm10time,c:pm25time,d:aqitime}
   };
function dataJS(t){
    var jsonStr=null;
     var geoCoordMap = {};
            var pm25Data=[];
            var pm10Data=[];
            var aqiData=[];
            var pm10time=[];
            var pm25time=[];
            var aqitime=[];
            var dtime;
       $.ajax({
            type:"POST",
            url:"dataimportJS.php",
            dataType:"text",
            cache:false,
            async:false,
            data:{"t":t},
            success:function(res){
                jsonStr=$.parseJSON(res);

                 //console.log("jsonStr "+jsonStr);
                 for(var i=0;i<=23;i++){
                $.each(jsonStr,function(index,item){
                    geoCoordMap[jsonStr[index].station]=[parseFloat(jsonStr[index].lng),parseFloat(jsonStr[index].lat)];
                   dtime=dealtime(jsonStr[index].pubtime);
                  if(dtime==i){
                    pm10Data.push({
                      name:jsonStr[index].station,
                      value:jsonStr[index].pm10_24h,
                    });
                    pm25Data.push({
                       name:jsonStr[index].station,
                       value:jsonStr[index].pm2_5_24h,
                    });
                    aqiData.push({
                       name:jsonStr[index].station,
                       value:jsonStr[index].aqi,
                    })
                   
                  }
                });
                // console.log("pm10Data "+pm10Data);
                pm10time[i]=pm10Data;
                pm25time[i]=pm25Data;
                aqitime[i]=aqiData;
                 //console.log("time "+time[i]);
                pm10Data=[];
                pm25Data=[];
                aqiData=[];
                  }





            },
            error:function(){alert('eror');}    
  
        })
      // console.log(geoCoordMap);
      // console.log(pm25Data[0]);
     //   return {a:geoCoordMap,b:pm25Data,c:pm10Data};
     return{a:geoCoordMap,b:pm10time,c:pm25time,d:aqitime}
   };
  function dealtime(time){
    var unixtime=time;
  var unixTimestamp = new Date(unixtime* 1000); 
  var a=unixTimestamp.toTimeString()
  var reg=/.*?(?=[:]+)/
  var b=a.match(reg);
  return parseInt(b[0]);  
  }