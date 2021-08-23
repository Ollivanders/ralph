import React from 'react';
import { render } from 'react-dom';
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

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

console.log(`%cDopeness comes from within, reading the source code, respect for opening the console
  `
  , "color: #00d0ff; font-size: 14px; font-family: ''Open Sans', Helvetica, sans-serif;'",
  `Oli Baxandall 2021`,
  // `So thank you for opening the console, it would be a pleasure to hear from you`
)

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

render(<StrictApp />, rootElement);