// Import stylesheets
import './style.css';
import { sealed, logger, readOnly } from './decorator';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


@sealed('Employee')
@logger
class Employee {
  @readOnly
  add() {
    return '4';
  }
}
 
let emp = new Employee();
