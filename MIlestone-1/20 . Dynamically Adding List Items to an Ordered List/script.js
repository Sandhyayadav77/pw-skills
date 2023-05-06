const listWhatYouLearn = ["HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpages",
"Grid and Flex-box in CSS",
"Projects using HTML & CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with DOM",
"Making Projects using HTML, CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Understanding the Database",
"Starting with NodeJS and Express",
"Understanding React and its Fundamentals",
"Understanding Hooks and Routers",
"Starting and Completing Full Fledge Projects"]
const nextItemButton = document.getElementById("nextItem");
nextItemButton.addEventListener('click', (e) => {

const listContainer = document.getElementById('listContainer');
//length of lists , if length is less than the array list item then append that current index of item in list container 
const indexOfItem = listContainer.getElementsByTagName('li').length;
if (indexOfItem < listWhatYouLearn.length) {
    const newListItem = document.createElement('li');
    newListItem.textContent = listWhatYouLearn[indexOfItem];
    // console.log(newListItem);
    listContainer.appendChild(newListItem);
}
else {
    // when all the items are added then this message will show up on the screen 
    const message = document.createElement('p');
    message.id = "message";
    message.style.color= "Yellow";
    message.style.fontSize="18px";
    message.style.position= "absolute";
    message.style.bottom= "70px";
    message.innerText = " All Items have been Added. "
    document.body.appendChild(message);
    // console.log(message);
}
})