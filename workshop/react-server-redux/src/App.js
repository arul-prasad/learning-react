import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import Provider from 'react-redux';

function MyHello(props) {
   var onHello = function(e) {
     console.log('Hello ==' , e.target.value);
     console.log('search Text =' , document.getElementById("searchText").value);
     console.log('current props=' , props);
     console.log('current props=' , props.name);
   }

   var printText = function(e) {
     console.log('print while type:',e.target.value);
   }

   return (
     <div>
    <input type="text" id="searchText" onChange={printText} />
    <button onClick={onHello} value="testMe"> TEST ME THE BUTTON </button>
    <a href="#" onClick={onHello} value="testMe"> TEST ME THE LINK</a>
    </div>
    );
}

export default MyHello
