document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const  progressBarInner= document.getElementById("progressBarInner");
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const percentage = scrollTop/ (scrollHeight- clientHeight) *100;
        console.log(percentage);
        progressBarInner.innerText= Math.round(percentage) + "%";
        progressBarInner.style.width= percentage + "%";
    })
})