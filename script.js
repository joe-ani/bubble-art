const bubbleContainer = document.querySelector(".bubble-container");

function generateBubble() {
  // random bubble positions and sizes
  const SIZE = Math.floor(Math.random() * 30);
  const TOP = Math.floor(Math.random() * 100);
  const LEFT = Math.floor(Math.random() * 100);
  // create bubble element and eppend to container
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubbleContainer.append(bubble)
//   set bubble sizes and positions 
bubble.style.width = `${SIZE}px` 
bubble.style.height = `${SIZE}px`
bubble.style.top = `${TOP}%`
bubble.style.left = `${LEFT}%`
// generate random colours

let hexVal = [];
const hexArray = ["a", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "b", "c", "d", "e", "f"];
for (let i = 0; i <= hexArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * 16)
    if (hexVal.length < 6) {
      hexVal.push(hexArray[randomIndex]);
    }
  }
  bubble.style.background = `#${hexVal.join("")}`;
}


// call function every 10 miliseconds
setInterval(() => {
    generateBubble();
  }, 10);
  

