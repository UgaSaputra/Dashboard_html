let toggle =  document.querySelector('.toggle');
let navigation = document.querySelector('#navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}



// /* hover efek untuk navbar */
// /* #navigation ul li:hover,
// #navigation ul li.hovered {
//   background-color: var(--white);
// } */
// /* hover text ketika di pilih */
// #navigation ul li:hover a,
// #navigation ul li.hovered a {
//   color: var(--blue);
// }
// /* jarak antara text tugas dan dashboard */
// #navigation ul li:nth-child(1) {
//   margin-bottom: 40px;
// }
// /* hover untuk garis putih ketika memilih supaya melengkung ke atas */
// #navigation ul li:hover a::before,
// #navigation ul li.hovered a::before {
//   content: "";
//   position: absolute;
//   right: 0;
//   top: -50px;
//   width: 50px;
//   height: 50px;
//   background-color: transparent;
//   border-radius: 50%;
//   box-shadow: 35px 35px 0 10px var(--white);
//   pointer-events: none;
// }
// /* hover untuk line putih supya melengkung je bawah */
// #navigation ul li:hover a::after,
// #navigation ul li.hovered a::after {
//   content: "";
//   position: absolute;
//   right: 0;
//   bottom: -50px;
//   width: 50px;
//   height: 50px;
//   background-color: transparent;
//   border-radius: 50%;
//   box-shadow: 35px -35px 0 10px var(--white);
//   pointer-events: none;
// }