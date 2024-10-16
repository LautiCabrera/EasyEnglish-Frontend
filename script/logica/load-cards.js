const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');
const open7 = document.getElementById('open7');
const modal_con = document.getElementById('modal-con');
const modal_con2 = document.getElementById('modal-con2');
const modal_con3 = document.getElementById('modal-con3');
const modal_con4 = document.getElementById('modal-con4');
const modal_con5 = document.getElementById('modal-con5');
const modal_con6 = document.getElementById('modal-con6');
const modal_con7 = document.getElementById('modal-con7');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');
const close6 = document.getElementById('close6');
const close7 = document.getElementById('close7');

// opens
open.addEventListener('click', () => {
    modal_con.classList.add('show')
});
open2.addEventListener('click', () => {
    modal_con2.classList.add('show')
});
open3.addEventListener('click', () => {
    modal_con3.classList.add('show')
});
open4.addEventListener('click', () => {
    modal_con4.classList.add('show')
});
open5.addEventListener('click', () => {
    modal_con5.classList.add('show')
});
open6.addEventListener('click', () => {
    modal_con6.classList.add('show')
});
open7.addEventListener('click', () => {
    modal_con7.classList.add('show')
});

// closes
close.addEventListener('click', () => {
    modal_con.classList.remove('show')
});
close2.addEventListener('click', () => {
    modal_con2.classList.remove('show')
});
close3.addEventListener('click', () => {
    modal_con3.classList.remove('show')
});
close4.addEventListener('click', () => {
    modal_con4.classList.remove('show')
});
close5.addEventListener('click', () => {
    modal_con5.classList.remove('show')
});
close6.addEventListener('click', () => {
    modal_con6.classList.remove('show')
});
close7.addEventListener('click', () => {
    modal_con7.classList.remove('show')
});
