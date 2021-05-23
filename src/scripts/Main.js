import ComponentFactory from './ComponentFactory';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    //Charge le sprite svg
    Icons.load();

    new ComponentFactory();
  }
}
new Main();
