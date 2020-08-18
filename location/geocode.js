const request=require('request');



const geocode=(place,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?access_token=pk.eyJ1Ijoid2lzZG9tcHJvIiwiYSI6ImNrZGtjNmVleTBuZGEyeHEzZ2o4b3V4OGIifQ.cD1bNFVgA5yi9Pcny2Ln1Q";
    request.get({url:url,json:true},(err,res)=>{
        if(res.body.features.length===0){callback("no")}
        else{
        var lat=res.body.features[0].center[1];
        var long=res.body.features[0].center[0];
      callback(undefined,lat,long);}
})}
module.exports=geocode;