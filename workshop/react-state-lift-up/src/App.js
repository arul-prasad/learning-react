import React from 'react';
import ReactDOM from 'react-dom';

function MyHello(props) {
   var onHello = function(e) {
     console.log('Hello ==' , e.target.value);
     console.log('searText =' , document.getElementById("searchText").value);
   }

   var printText = function(e) {
     console.log('print what ??',e.target.value);
   }

   return (
     <div>
    <input type="text" id="searchText" onChange={printText} />
    <button onClick={onHello} value="testMe"> TEST ME </button>
    </div>
    ) ;
}

export function Welcome(props){
  return <h1> Hello React works in demo :-) </h1>
}
// WelcomeComp;
export default MyHello
