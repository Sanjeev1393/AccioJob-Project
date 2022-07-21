const start = document.getElementById("start-btn");

const reset = document.getElementById("reset-btn");
const heading = document.getElementById('heading');
const description = document.getElementById('description');

let randomNumberGenerator = (start, end) => {
    let number = start + Math.floor(Math.random() * (end - start + 1));
    return number;
}
let currentTime, startTime, totalTime, bestTime, avgTime, count;

const getDifference = (startTime, currentTime) => {
    let ans = (currentTime - startTime);
    return ans;
}
let timeTaken = document.getElementById('time-taken');
const showShape = () => {
    if (count == 0) {
        description.style.color = 'yellow';
        description.innerText = 'Why stopped ?....keep clicking !!!!!!'
    }
    if(count == 6){
        description.style.color = '#BAFE12';
        description.innerText = 'If you are tired ......you can reset and check your SCORE...!!!'
    }
    if (startTime != undefined) {
        count++;
        currentTime = new Date();
        let time = getDifference(startTime, currentTime) / 1000;
        bestTime = Math.min(bestTime, time);
        // console.log(bestTime);
        totalTime += time;
        // console.log(totalTime, count);
        console.log(time, 'time');
        timeTaken.innerText = `${time}` + ' secs';
        startTime = currentTime;
    } else {
        startTime = new Date();
        count = 0;
        totalTime = 0;
        bestTime = Number.MAX_SAFE_INTEGER;
        let reactionTime = document.getElementById('reaction-time');
        reactionTime.innerHTML = 'Reaction Time: ';
        timeTaken.innerText = '';
    }

    const main = document.getElementById("main");

    const parentHeight = main.offsetHeight;
    const parentWidth = main.offsetWidth;

    const shape = document.getElementById("shape");

    shape.style.height = `${randomNumberGenerator(50, parentHeight * 0.3)}px`;
    shape.style.width = shape.style.height;


    shape.style.borderRadius = `${randomNumberGenerator(0, 50)}%`;

    shape.style.backgroundColor = `rgb(${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)})`;

    shape.style.left = `${randomNumberGenerator(0, parentWidth * 0.8)}px`;
    shape.style.top = `${randomNumberGenerator(0, parentHeight * 0.7)}px`;

    shape.style.display = 'block';
    heading.style.display = 'none';
    description.style.display = 'block';
    start.style.background = 'grey';
    start.disabled = true;

};

start.addEventListener("click", showShape);

const shape = document.getElementById("shape");

shape.addEventListener('click', showShape);

reset.addEventListener('click', () => {
    shape.style.display = 'none';
    heading.style.display = 'block';
    description.style.color = 'white';
    description.innerText = 'click on the random shape !!'
    description.style.display = 'none';
    start.style.background = 'green';
    start.disabled = false;
    let reactionTime = document.getElementById('reaction-time');
    reactionTime.innerText = `Average Reaction Time :  ${(totalTime / count).toFixed(2)} secs

                              Best Reaction Time :  ${bestTime.toFixed(2)} secs`;

    let timeTaken = document.getElementById('time-taken');
    timeTaken.innerText = '';
    startTime = undefined;
    count = undefined;
})
