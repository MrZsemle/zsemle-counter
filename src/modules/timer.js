export default argDate => {
    const date = Date.parse(argDate);
    const app = document.querySelector(".counter-row");

    //countdown
    const countdown = setInterval(() => {
        //calc
        const nowDate = Date.now();
        const distance = date - nowDate;
        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        ).toLocaleString(undefined, { minimumIntegerDigits: 2 });
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
        app.innerHTML = `<div class="col-auto pr-2 pr-md-3 numb">
                    <span class="display-1 font-weight-normal">${days}</span>
                    <p class="numbDetails">Days</p>
                    </div>
                    <div class="col-auto pr-3 pr-md-4 pl-4 pl-md-5 numb">
                    <span class="display-1">${hours}</span>
                    <p class="numbDetails">Hours</p>
                    </div>
                    <div class="col-auto pr-4 pr-md-5 pl-4 pl-md-5 numb">
                    <span class="display-1">${minutes}</span>
                    <p class="numbDetails">Minutes</p>
                    </div>
                    <div class="col-auto pl-3 pl-md-4 numb">
                    <span class="display-1">${seconds}</span>
                    <p class="numbDetails">Seconds</p>
                    </div>`;

        //Verify
        if (0 > distance) {
            clearInterval(countdown);
            app.innerHTML = `<div class="col display-4 text-white text-center">Happy New Year!</div>`;
        }
    }, 1000);
};