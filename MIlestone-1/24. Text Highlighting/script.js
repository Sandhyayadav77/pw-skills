const article = document.getElementById('article');
const articleArray = article.textContent.split(" ");
console.log(articleArray)
for (let i = 0; i < articleArray.length; i++) {
    if (articleArray[i].length > 8) {
        // console.log(articleArray[i]);
        articleArray[i] = "<span style='background-color:yellow'>" + articleArray[i] + "</span>";
    }
}
article.innerHTML = articleArray.join(' ');