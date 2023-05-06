const a = 6; 
// a is number of rows
for (let i = 0; i < a; i++) {
    for (let j = i+1; j <= a; j++) {
        process.stdout.write("*");  
        // process.stdout.write is used to console without trailing newline  
    }
    console.log();
}
