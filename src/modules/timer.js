export default argDate => {
    const date = Date.parse(argDate);
    const app = document.querySelector(".row");

    //countdown
    const countdown = setInterval(() => {
        //calc
        const nowDate = Date.now();
        const distance = date - nowDate;
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toLocaleString(undefined, { minimumIntegerDigits: 2 });
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        ).toLocaleString(undefined, { minimumIntegerDigits: 2 });
        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        ).toLocaleString(undefined, { minimumIntegerDigits: 2 });

        //Edit HTML
        app.innerHTML = `<div class="col numb"><span>${hours}</span></div><div class="col numb"><span>${minutes}</span></div><div class="col numb"><span>${seconds}</span></div>`;

        //Verify
        if (0 > distance) {
            clearInterval(countdown);
            app.innerHTML = `<div class="col">Yeyy! :D</div>`;
        }
    }, 1000);
};
