class HeaderElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const header_template = /*HTML*/`
      <style>
        .header-profile {
          padding: 1rem;
        }

        .customer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          position: relative;
        }

        .customer-text h1 {
          color: var(--color-beige-raro);
          font-size: 1rem;
          font-weight: 500;
        }

        .customer-text p {
          font-weight: bolder;
          font-size: larger;
          color: var(--color-negro-profundo);
        }

        .profile-picture img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-borde);
          cursor: pointer;
        }
      </style>

      <header class="header-profile">
        <div class="customer">
          <div class="customer-text">
            <h1>Hello, Welcome 👋</h1>
            <p class="name">Cargando nombre...</p>
          </div>
          <div class="profile-picture">
            <img src="/assets/profile.svg" alt="Profile picture of user" class="profile">
          </div>
        </div>
      </header>
    `;

    this.shadowRoot.innerHTML = header_template;
  }

  connectedCallback() {
    const filtro = this.getAttribute("filtro");
    fetch('http://localhost:3000/header_element')  // <- corregido
      .then(res => res.json())
      .then(data => {
        const header_data = data[0];
        if (header_data && header_data[filtro]) {
          const [info] = header_data[filtro];
          this.data = info;
        } else {
          this.shadowRoot.querySelector('.name').textContent = "Nombre no encontrado";
          this.shadowRoot.querySelector('.profile').src = "/assets/default-profile.svg";
        }
      })
      .catch(err => {
        console.error("Error al cargar los datos:", err);
        this.shadowRoot.querySelector('.name').textContent = "Error al cargar nombre";
        this.shadowRoot.querySelector('.profile').src = "/assets/default-profile.svg";
      });
  }

  set data(d) {
    this.shadowRoot.querySelector('.name').textContent = d.name || "Usuario";
    this.shadowRoot.querySelector('.profile').src = d.image || "/assets/default-profile.svg";
  }
}

customElements.define("header-element-cart", HeaderElement);




class CartElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const header_template = /*HTML*/`
      <style>
        .header-profile {
          padding: 1rem;
        }

        .customer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          position: relative;
        }

        .customer-text h1 {
          color: var(--color-beige-raro);
          font-size: 1rem;
          font-weight: 500;
        }

        .customer-text p {
          font-weight: bolder;
          font-size: larger;
          color: var(--color-negro-profundo);
        }

        .profile-picture img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-borde);
          cursor: pointer;
        }
      </style>

      
    `;

    this.shadowRoot.innerHTML = header_template;
  }

  connectedCallback() {
    const filtro = this.getAttribute("filtro");
    fetch('http://localhost:3000/header_element')  // <- corregido
      .then(res => res.json())
      .then(data => {
        const header_data = data[0];
        if (header_data && header_data[filtro]) {
          const [info] = header_data[filtro];
          this.data = info;
        } else {
          this.shadowRoot.querySelector('.name').textContent = "Nombre no encontrado";
          this.shadowRoot.querySelector('.profile').src = "/assets/default-profile.svg";
        }
      })
      .catch(err => {
        console.error("Error al cargar los datos:", err);
        this.shadowRoot.querySelector('.name').textContent = "Error al cargar nombre";
        this.shadowRoot.querySelector('.profile').src = "/assets/default-profile.svg";
      });
  }

  set data(d) {
    this.shadowRoot.querySelector('.name').textContent = d.name || "Usuario";
    this.shadowRoot.querySelector('.profile').src = d.image || "/assets/default-profile.svg";
  }
}

customElements.define("cart-element", CartElement);