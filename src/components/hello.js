class HelloComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const hello = document.createElement('div');
    hello.innerText = "Hello!";
    shadow.appendChild(hello);
  }
}

// const hello = "Hello!";
export default HelloComponent;