const regex = /^(http:\/\/|https:\/\/)[\w\d\S]+\.[\w]+$/;
function  validUrl(url){
    if(regex.test(url)){
        console.log(`${url} is valid`);
    }
    else{
        console.log(`${url} is not valid`);
    }
}

validUrl("http://google.com")
validUrl("fttp://example.com")