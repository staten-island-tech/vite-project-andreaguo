import '../styles/style.css';
import { setupCounter } from './counter.js';
import AOS from "aos";
AOS.init();
import {menu} from "./menu";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `
console.log(menu);
setupCounter(document.querySelector('#counter'))
