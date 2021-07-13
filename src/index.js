import _ from 'lodash';
import './style.css';
import Icon from './pic.jpeg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  const myIcon =new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  
  return element;
}

document.body.appendChild(component());