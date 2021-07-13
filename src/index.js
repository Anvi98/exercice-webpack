import _ from 'lodash';
import './style.css';
import Icon from './pic.jpeg';

function component() {
  const element = document.createElement('div');

  // Lodash, imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  const myIcon =new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
  return element;
}

document.body.appendChild(component());