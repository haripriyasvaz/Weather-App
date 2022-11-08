// FETCHING DATA FROM A URL using request()
const request =require('request') 

        const geocode=(address,callback)=>{

            const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGFyaXByaXlhc3ZheiIsImEiOiJjbDhiaWo1MmMwOHV2M3hxOXhibGRvOHdrIn0.aiEM1MZfzDRG6v-eLaus5A&limit=1'
            
             //body is a property from response
            request({url: url, json: true},(error,{body})=>{
            if(error){
            callback(' Lost Internet Connectivity!',undefined)
            
            }
            else if(body.features.length===0){
            callback(' Unable to find the location. Check your URL!',undefined)
            }
            else{
            const object={
                place: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]}
            callback(undefined,object)
            }})
        }

module.exports=geocode        
       
