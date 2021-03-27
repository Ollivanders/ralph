import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.min.css';import './styles/index.scss'
import reportWebVitals from './reportWebVitals';

// console.log(`%c                                     
//             @   @                           @                                    
//             @   @                             @   ,                               
//           @   @                               @   @                              
//           @.   @                               @@   @                             
//         @@   #@                               @@   &@                            
//         @@   @@@                             @@@    @@                           
//         @@#            .@@,          @@&             @@                           
//         @@@        .@@@@@ @@ **   @@@  @@@@.         @@                           
//         .@@@@@@@.         @@@@@@@@@@@(         %@@@@@@@                           
//                   /@@@@@# @@@@@@@@@@,%@@@@@                                      
//                 @@(    @@  @@@@@@@  @@.    @@                                    
//               @@   @@@@   @@@@@@@@@.  (@@@    @*                                 
//             @@      @@@    @@@@@@@@@    *@@      .@%                              
//         @@@         @@@    .@@@@@@@@     @@         *@@,                          
//     @@@            @@.     @@@@@@@      @@            ,@@&                       
//     @@*            @@       @@@@@@      @@             @@@                       
//     @@             @@       ,@@@@       @@.            &@@                       
//     @@             @@        ,          ,@*             @                        
//     @@             @@                    @*            %@                        
//       @             @@                    @             @                         
//       @            &@                   /@            (@                         
//         &            @                   @(            @                          
//                       @                 %@            @                           
//                       @@                @            @                            
//                       @*              @                                          
//                                           @             @                                           
//   `, "color: #00d0ff; font-size: 12px; font-family: ''Open Sans', Helvetica, sans-serif;'")

console.log(`%cDopeness comes from within, reading the source code
  `
  , "color: #00d0ff; font-size: 14px; font-family: ''Open Sans', Helvetica, sans-serif;'",
  `Oli Baxandall 2021`,
  // `So thank you for opening the console, it would be a pleasure to hear from you`
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
