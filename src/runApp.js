import ReactDOM from 'react-dom';
import gon from 'gon';
import App from './App';

export default function runApp() {
  const gonProps = gon;
  ReactDOM.render(App(gonProps), document.getElementById('chat'));
}
