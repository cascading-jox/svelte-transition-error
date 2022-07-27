document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.page1').addEventListener('click', async () => {
        const response = await fetch('./page1.html');
        document.querySelector('main').innerHTML = await response.text();
    });
    document.querySelector('.page2').addEventListener('click', async () => {
        const response = await fetch('./page2.html');
        document.querySelector('main').innerHTML = await response.text();
    });
});
