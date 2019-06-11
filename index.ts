// Import stylesheets
import './style.css';
import { sealed, logger } from './decorator';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


@sealed('Employee')
@logger
class Employee {
  add() {
    return '4';
  }
}
 
let emp = new Employee();
