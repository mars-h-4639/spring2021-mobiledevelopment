/* Importing Article through require(), based on example code and since the 
original method caused a syntax error */
const Component = require("./Component.js");

// Article is a child object of Component
class Article extends Component {
//Super added based on how it's added in example code
  constructor (props) {
    super(props);
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    `return
      <Article>${this.props.title}</Article>

    `
    );
    
  }

}
// Changed export method based on example code
module.exports = Article;
