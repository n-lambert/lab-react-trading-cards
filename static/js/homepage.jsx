'use strict';

// A welcome message to the user
// A link to the /cards page
// A nice, large image of Balloonicorn 
// (the image is located at /static/img/balloonicorn.jpg)

function Homepage() {
  return (<div>
    <p>Welcome!</p>
    <a href="/cards">Click here to view the Trading Cards</a>
    <img src="/static/img/balloonicorn.jpg" id="homepage-img"/>
  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
