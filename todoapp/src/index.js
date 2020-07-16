import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// $( document ).ready(function() {	
//     // progress bar
//     var back =$(".prev");
//     var	next = $(".next");
//     var	steps = $(".step");
//     var step1 = $("#step1a");
//     var step2 = $("#step2a")
    
    
//     next.bind("click", function() { 
//         $.each( steps, function( i ) {
//             if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
//                 $(steps[i]).addClass('current');
//                 $(steps[i - 1]).removeClass('current').addClass('done');
//                 return false;
//             }
//         })		
//     });
//     step2.bind("click", function() { 
//         $.each( steps, function( i ) {
//             if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
//                 $(steps[i]).addClass('current');
//                 $(steps[i - 1]).removeClass('current').addClass('done');
//                 return false;
//             }
//         })		
//     });
//     step1.bind("click", function() { 
//         $.each( steps, function( i ) {
//             if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
//                 $(steps[i + 1]).removeClass('current');
//                 $(steps[i]).removeClass('done').addClass('current');
//                 return false;
//             }
//         })		
//     });
//     back.bind("click", function() { 
//         $.each( steps, function( i ) {
//             if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
//                 $(steps[i + 1]).removeClass('current');
//                 $(steps[i]).removeClass('done').addClass('current');
//                 return false;
//             }
//         })		
//     });

// })
