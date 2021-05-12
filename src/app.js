import 'bootstrap';
// import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-roboto';
import twemoji from 'twemoji';
import './style.scss';
import timer from './modules/timer';
import * as config from './config.json';

timer(config.date);

document.querySelector('.emojis').innerHTML = config.emojis.join(' ');

twemoji.parse(document.querySelector('.emojis'), {
    folder: 'svg',
    ext: '.svg',
});
