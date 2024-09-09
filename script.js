const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        console.log('Navbar is open');
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        console.log('Nabar is closed');
        nav.classList.remove('active');
    })
}

// bar.addEventListener('click', () => {
//     console.log("Nav opened");
//     nav.classList.add('active');
// });

// close.addEventListener('click', () => {
//     console.log("Nav closed");
//     nav.classList.remove('active');
// });