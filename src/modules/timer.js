export default argDate => {
    const date = Date.parse(argDate);
    const app = document.querySelector(".container");

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
        app.innerHTML = `<div class="row align-items-stretch flex-fill justify-content-center display-1"><div class="col-auto pr-4 pr-md-5 numb"><span>${hours}</span></div><div class="col-auto pr-3 pr-md-5 pl-3 pl-md-5 numb"><span>${minutes}</span></div><div class="col-auto pl-4 pl-md-5 numb"><span>${seconds}</span></div></div>`;

        //Verify
        if (0 > distance) {
            clearInterval(countdown);
            app.innerHTML = `<div class="col">Yeyy! :D</div>`;
        }
    }, 1000);
};
