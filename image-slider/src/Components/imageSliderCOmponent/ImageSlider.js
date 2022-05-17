import React from "react";
import './imageSlider.css'
import 'bootstrap/dist/css/bootstrap.css';

let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png'];
let arrayIndex = 0;
let isCLicked = false;
let interval;


function next() {
    if (!isCLicked) {
        if (arrayIndex < images.length - 1) {
            arrayIndex++;
            document.getElementById('imgSlider').src = images[arrayIndex];
        } else {
            arrayIndex = images.length - 1;
        }
    }
}

function prev() {
    if (!isCLicked) {
        if (arrayIndex > 0) {
            arrayIndex--;
            document.getElementById('imgSlider').src = images[arrayIndex];
        } else {
            arrayIndex = 0;
        }
    }
}

function start() {
    if (!isCLicked) {
        isCLicked = !isCLicked;
        interval = setInterval(() => {
            arrayIndex++;
            document.getElementById('imgSlider').src = images[arrayIndex];
            if (arrayIndex === images.length) {
                arrayIndex = 0;
                document.getElementById('imgSlider').src = images[arrayIndex];
            }
        }, 1000)
    }
}

function stop() {
    if (isCLicked) {
        isCLicked = !isCLicked;
        clearInterval(interval);
    }
}

let imageSlider = () => {
    return (
        <div className={'imageSlider'}>
            <img src="1.jpg" id="imgSlider" alt="images"/>
            <div className={'d-flex justify-content-around'}>
                <button className={'btn btn-warning mt-2'} onClick={prev}>prev</button>
                <button className={'btn btn-primary mt-2'} onClick={start}>Start</button>
                <button className={'btn btn-danger mt-2'} onClick={stop}>Stop</button>
                <button className={'btn btn-success mt-2'} onClick={next}>Next</button>
            </div>
        </div>
    )
}


export default imageSlider;