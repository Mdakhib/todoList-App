module.exports.getDate=()=>{
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
        hour:"numeric",
        minute:"numeric"
    };
    return today.toLocaleDateString("en-US", options);

    
}
exports.getDay=getDay;
function getDay(){
    let today=new Date();
    let options={
        weekday:"long"
    };
    return today.toLocaleDateString("en-US", options);
}
console.log(module.exports);
    