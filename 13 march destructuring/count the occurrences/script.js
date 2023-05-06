/* You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.
*/

const wordCounter = (largeString) => {
    const text = largeString.split(' ');
    const wordsCount = new Map();
    for (const words of text) {
        if (wordsCount.has(words)) {
            wordsCount.set(words, wordsCount.get(words) + 1);
        } else {
            wordsCount.set(words, 1)
        }
    }
    return wordsCount;
}
const text = 'Web designers Web designers Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included.';

const wordCountsofLargeString = wordCounter(text);

console.log(wordCountsofLargeString);


