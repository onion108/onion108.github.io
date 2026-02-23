window.addEventListener("load", () => {
    const audioEl = document.querySelector("audio");
    const start = 44;
    const end = 56;
    if (audioEl) {
        const handle = setInterval(() => {
            let t = audioEl.currentTime;
            if (t >= start) {
                t = (t - start) / (end - start);

                if (t > 1.0) {
                    t = 1.0;
                    clearInterval(handle);
                }
                document.documentElement.style.setProperty("--animation-progress", t);
                console.log(t);
            }
        }, 8);
    }
})
