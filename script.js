var countDown = document.createElement("div")
countDown.className = "main"
setTimeout(() => {
    console.log("10")
    countDown.innerText="10"
}, 1000);
setTimeout(() => {
    console.log("9")
        countDown.innerText="9"

}, 2000);
setTimeout(() => {
    console.log("8")
            countDown.innerText="8"

}, 3000);
setTimeout(() => {
    console.log("7")
            countDown.innerText="7"

}, 4000);
setTimeout(() => {
    console.log("6")
            countDown.innerText="6"

}, 5000);
setTimeout(() => {
    console.log("5")
            countDown.innerText="5"

}, 6000);
setTimeout(() => {
    console.log("4")
            countDown.innerText="4"

}, 7000);
setTimeout(() => {
    console.log("3")
            countDown.innerText="3"

}, 8000);
setTimeout(() => {
    console.log("2")
            countDown.innerText="2"

}, 9000);
setTimeout(() => {
    console.log("1")
            countDown.innerText="1"

}, 10000);
setTimeout(() => {
    console.log("Happy Independence Day")
            countDown.innerText="Happy Independence Day"

}, 11000);

document.body.append(countDown)