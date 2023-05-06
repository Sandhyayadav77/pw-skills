const lists = [
    {
        book_name: " The India Story",
        author: "Bimal Jalal ",
        year: 2009
    },
    {
        book_name: "Listen to Your Heart ",
        author: "Ruskin Bond ",
        year: 2018
    },
    {
        book_name: " A Place Called Home",
        author: " Preeti Shenoy",
        year: 2012
    },
    {
        book_name: "Queen of Fire ",
        author: "Devika Rangachari ",
    year: 2007
    },
    {
        book_name: " Hear Yourself",
        author: " Prem Rawat ",
        year: 2019
    }
]
// filtered by years 
const filteredBooksYear = lists.filter((details) => {
    return details.year >= 2010;
}) 
// filtered by capitalized author name 
const filteredAuthorNameCapitlize = filteredBooksYear.map((filteredBooksYear)=>{
    return ({...filteredBooksYear, author: filteredBooksYear.author.toUpperCase()})
})

console.log(filteredBooksYear)
console.log(filteredAuthorNameCapitlize)
