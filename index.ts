// Import stylesheets
import './style.css';
import giphy = require('giphy-api');

console.log(giphy());

const appDiv: HTMLElement = document.getElementById('app');

giphy({ https: true })
  .random('morning')
  .then(function (res) {
    console.log('response', res);

    if (res.data?.image_url)
      appDiv.innerHTML = `<img src = "${res.data.image_url}"  title="GIF via Giphy">`;
  })
  .catch((e) => console.error('error while loading gif', e));

// Write TypeScript code!

appDiv.innerHTML = `<img src="https://media1.giphy.com/media/qwHBUmbJYqoaA/giphy.gif"/>`;
