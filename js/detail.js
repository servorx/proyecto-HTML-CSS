class ProductDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        main, section, footer {
          padding: 1rem;
        }

        figure {
          position: relative;
        }

        .image-preview {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
        }

        .image-preview img {
          width: 100%;
          display: block;
        }

        .heart, .back {
          position: absolute;
          background: white;
          border-radius: 50%;
          padding: 0.3rem;
        }

        .heart {
          top: 1rem;
          right: 1rem;
        }

        .back {
          top: 1rem;
          left: 1rem;
        }

        .card {
          margin-top: 1rem;
        }

        .card h2 {
          font-size: 1.5rem;
          color: #121111;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
        }

        .rating img {
          width: 1rem;
        }

        .rating a {
          text-decoration: none;
          color: #787676;
          font-size: 0.9rem;
        }

        .description {
          color: #292526;
          font-size: 1rem;
        }

        .bold {
          font-weight: bold;
        }

        .options {
          margin-top: 2rem;
        }

        .size span {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin: 0.3rem;
          border: 1px solid #A3A1A2;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        .size .selected {
          background-color: #292526;
          color: white;
        }

        .color {
          margin-top: 1rem;
        }

        .color h3 {
          margin-bottom: 0.5rem;
        }

        .color div {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          margin-right: 0.5rem;
          border-radius: 50%;
          background-color: #A3A1A2;
          border: 2px solid transparent;
        }

        .color .selected {
          border-color: #292526;
        }

        footer {
          margin-top: 2rem;
        }

        footer button {
          width: 100%;
          background-color: #121111;
          color: white;
          padding: 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        footer button p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        footer button img {
          width: 1.2rem;
        }

        footer s {
          font-size: 0.8rem;
          color: #A3A1A2;
          margin-left: 0.5rem;
        }
      </style>

      <main>
        <article>
          <figure>
            <div class="image-preview">
              <img src="/assets/img/detail/product2.png" alt="preview">
              <div class="heart">
                <img src="/assets/img/detail/icon-heart-fully.png" alt="heart icon">
              </div>
              <div class="back">
                <a href="../index.html">
                  <img src="/assets/img/detail/icon-main.png" alt="back icon">
                </a>
              </div>
            </div>
          </figure>
          <div class="card">
            <h2>Light Dress Bless</h2>
            <div class="rating">
              <img src="/assets/img/detail/icon-star.png" alt="star icon">5.0
              <a href="https://google.com">(7,932 reviews)</a>
            </div>
            <p class="description">Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothes <span class="bold">Read More...</span></p>
          </div>
          <div class="add-item">
            <!-- Add item section (puede personalizarse luego) -->
          </div>
        </article>
      </main>
      <hr>
      <section>
        <div class="options">
          <h3>Choose size</h3>
          <div class="size">
            <span>S</span>
            <span>M</span>
            <span class="selected">L</span>
            <span>XL</span>
          </div>
          <div class="color">
            <h3>Color</h3>
            <div></div>
            <div></div>
            <div class="selected"></div>
          </div>
        </div>
      </section>
      <footer>
        <button>
          <p>
            <img src="/assets/img/detail/shopping-cart.png" alt="shopping cart">
            Add to cart | $162.99 <s>$169.99</s>
          </p>
        </button>
      </footer>
    `;
  }
}

customElements.define('product-detail', ProductDetail);
