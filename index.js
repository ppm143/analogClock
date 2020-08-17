setInterval(() => {
    date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    hRatation = 30 * hTime + mTime / 2;
    mRatation = 6 * mTime;
    sRatation = 6 * sTime;

    hour.style.transform = `rotate(${hRatation}deg)`;
    minute.style.transform = `rotate(${mRatation}deg)`;
    second.style.transform = `rotate(${sRatation}deg)`;
}, 1000)