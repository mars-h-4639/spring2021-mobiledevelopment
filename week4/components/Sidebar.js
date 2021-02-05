import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      // Used a += to condense the code, plus wrapping the items in the list
      responseHTML +=  '<li>' + item + '</li>';
    });

//Wrapping the response in the ul
responseHTML = '<ul>' + responseHTML + '</ul>';
    return responseHTML;
  }
}

export default Sidebar;
