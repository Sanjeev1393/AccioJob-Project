const btn = document.querySelectorAll(".btn");

const pauseSound = () =>{
    btn.forEach(button =>{
        const audio = document.getElementById(button.innerText);
        audio.pause();
        audio.currentTime = 0;
    });
    
};
const playSound = () =>{
    btn.forEach(button => {
        button.addEventListener('click', () =>{
            pauseSound();
            document.getElementById(button.innerText).play();
           
        });
    });
};

playSound();
 