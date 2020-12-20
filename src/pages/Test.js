import React from 'react';

import './Test.css';


function Test() {
  return (
    // <div className='home'>
    //   <h1>Home</h1>
    // </div>

<>
<input id="menu-switch" type="checkbox" />
    <nav id="menu" role="navigation">
        <div class="brand">&Aopf;</div>            
        <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
        </ul>
    </nav>

    <div class="page-wrap">
        <label for="menu-switch" id="menu-toggle"></label>
           <div class="container" role="main">
            <article>

            <div class="circle">

            </div>
                <h2>Puse Css push menu</h2>
                    <p>Sometimes you just need a really simple push menu, without any Javascript Libraries. I made this in a rush for a client with the instructions to not use any jQuery.</p>
                    <p>I like the thought of adding a class to the body and climb the DOM instead of adding classes to the affected elements.</p>
                    <p>Less is more.</p>
                <a href="https://codepen.io/razitazi/pen/WbZaOq">forked from here: VANILLA JAVASCRIPT PUSH MENU</a> 
            </article>
      </div>
   </div>

</>

  );
}

export default Test;
