
const reverseString = () => {

  const input = document.getElementById("inputString").value;
  const reverseStringOutput = document.getElementById("reverseStringOutput");
  let reverseString_2 = Array.from(input).reverse().join('');
  reverseStringOutput.innerText = reverseString_2;
  console.log(reverseString_2)
}
const button = document.getElementsByTagName("button")[0];
button.addEventListener('click', reverseString)
setTimeout(reverseString,2000);

