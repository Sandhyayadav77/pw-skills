// Block Scope
 {
    console.log(a);   //undefined 
    var a = 11;
    console.log(a); //a= 11
    console.log(b);  //can't access  b before initializtion
    let b = 12;
    console.log(b);
    console.log(c);   //can't access c before initializtion
    const c = 13;
    console.log(c);
}