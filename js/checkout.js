class main_cards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template_dashboard = /* HTML */`
    <style>
      button{
        background: #292526;
        color: #fff;
        padding: 13px 30px;
        border-radius: 100px;
        border: none;
        cursor: pointer;
        width: 95%;
        font-weight: bold;
      }
      .header-checkout{
        display: flex;
        margin: 2rem;
        .back{
          background: none;
          border-radius: 100%;
          border: 2px solid #DFDEDE;
          cursor: pointer;
          width: 2.5rem;
        }
        h1{
          text-align: center;
        }
        .menu{
          background: none;
          border-radius: 100%;
          border: 2px solid #DFDEDE;
          cursor: pointer;
          width: 2.5rem;
        }
      }
    </style>

    <section class="card-main">
      <header class="header-checkout">
          <a href="./detail.html" >
              <img src="/storage/img/checkout/icon-main.png" alt="icon main" class="back">
          </a>
          <h1>Checkout</h1>
          <a href="./detail.html">
              <img src="/storage/img/checkout/icon-menu.png" alt="icon main" class="menu">
          </a>
      </header>
      <nav>
          <article class="product1">
              <img src="/storage/img/checkout/product1.png" alt="product1">
              <div >
                  <div class="detail">
                      <h2>Modern light Clothes</h2>
                      <p class="description">Dress modern</p>
                      <p>$212.99</p>
                  </div>
                  <div>
                      <img src="/storage/img/checkout/icon-options.png" alt="opciones" class="icon-options">
                  </div>
                  <div class="detail-botones">
                      <img src="/storage/img/checkout/icon-minus.png" alt="minus">
                      <p>4</p>
                      <img src="/storage/img/checkout/icon-add.png" alt="añadir">
                  </div>
              </div>
          </article>
          <hr>
          <article class="product2">
              <img src="/storage/img/checkout/product2.png" alt="product1">
              <div >
                  <div class="detail">
                      <h2>Modern light Clothes</h2>
                      <p class="description">Dress modern</p>
                      <p>$162.99</p>
                  </div>
                  <div>
                      <img src="/storage/img/checkout/icon-options.png" alt="opciones" class="icon-options">
                  </div>
                  <div class="detail-botones">
                      <img src="/storage/img/checkout/icon-minus.png" alt="minus">
                      <p>1</p>
                      <img src="/storage/img/checkout/icon-add.png" alt="añadir">
                  </div>
              </div>
          </article>
          <hr>
      </nav>
      <section class="formulario">
          <h2>Shipping information</h2>
          <form action="">
              <img src="/storage/img/checkout/visa.png" alt="visa">
              <p>**** **** **** 1238</p>
              <img src="/storage/img/checkout/icon-arrow-down.png" alt="flecha hacia abajo">
          </form>
          <!-- esto es un delsplegable, toca editarlo -->
          <!-- Para esto se puede usar una etiqueta detail -->
          <dialog></dialog>
          <!-- usar esta etiqueta tambien      -->
      </section>
      <section>
          <p class="information-left">Total(9 items)</p>
          <p class="information-right">$1,014.95</p>
          <p class="information-left">Shipping Fee</p>
          <p class="information-right">$0.00</p>
          <p class="information-left">Discunt</p>
          <p class="information-right">$0.00</p>
          <hr>
          <p class="information-left">Sub Total</p>
          <p class="information-right">$1,014.95</p>
      </section>
      <footer>
          <a href="https://google.com" target="_blank">
              <button>Pay</button>
          </a>
      </footer>
    </section>
    `
  }

  render() {
    this.innerHTML = /* html */ `
      <style rel="stylesheet">
        @import "./App/Components/contacto/contactoStyle.css";
      </style>
    `;
  }
}

customElements.define("app-Nombre", AppNombre);