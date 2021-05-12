export default argDate => {
    const date = Date.parse(argDate);
    const app = document.querySelector('.counter-row');

    //countdown
    const countdown = setInterval(() => {
        //calc
        const nowDate = Date.now();
        const distance = date - nowDate;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString(undefined, { minimumIntegerDigits: 2 });
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 });
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 });
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString(undefined, { minimumIntegerDigits: 2 });

        document.querySelector('.counter-row').style.visibility = 'visible';

        document.querySelector('.day').innerHTML = days;
        document.querySelector('.hour').innerHTML = hours;
        document.querySelector('.min').innerHTML = minutes;
        document.querySelector('.sec').innerHTML = seconds;

        if (0 > distance) {
            clearInterval(countdown);
            app.innerHTML = `<div class="col display-4 numb">uwu</div>`;
        }

        if (1 > distance / (1000 * 60 * 60 * 24)) {
            document.querySelector('.pr-md-3').style.display = 'none';
            document.querySelector('.hour').classList.add('font-weight-normal');
        }
        if (1 > distance / (1000 * 60 * 60 * 24) && 1 > (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) {
            document.querySelector('.pr-md-4').style.display = 'none';
            document.querySelector('.min').classList.add('font-weight-normal');
        }
        if (1 > distance / (1000 * 60 * 60 * 24) && 1 > (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) && 1 > (distance % (1000 * 60 * 60)) / (1000 * 60)) {
            document.querySelector('.min').classList.add('font-weight-normal');
            document.querySelector('.pr-md-5').style.display = 'none';
        }
    }, 1000);
};
