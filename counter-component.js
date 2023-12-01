// Definición del componente
class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counterValue = 0;
  
      // Crear el shadow DOM
      this.attachShadow({ mode: 'open' });
  
      // Crear la interfaz del componente
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos opcionales */
          button {
            margin: 5px;
          }
        </style>
        <p>Contador: <span id="counterValue">${this._counterValue}</span></p>
        <button id="incrementButton">Incrementar</button>
        <button id="decrementButton">Decrementar</button>
      `;
  
      // Obtener referencias a los elementos de la interfaz
      this._counterDisplay = this.shadowRoot.getElementById('counterValue');
      this._incrementButton = this.shadowRoot.getElementById('incrementButton');
      this._decrementButton = this.shadowRoot.getElementById('decrementButton');
  
      // Asociar eventos a los botones
      this._incrementButton.addEventListener('click', () => this._increment());
      this._decrementButton.addEventListener('click', () => this._decrement());
    }
  
    // Método para incrementar el contador
    _increment() {
      this._counterValue++;
      this._updateCounterDisplay();
    }
  
    // Método para decrementar el contador
    _decrement() {
      this._counterValue--;
      this._updateCounterDisplay();
    }
  
    // Método para actualizar la interfaz con el valor actual del contador
    _updateCounterDisplay() {
      this._counterDisplay.textContent = this._counterValue;
    }
  
    // Getter y setter para el estado del contador (opcional)
    get counterValue() {
      return this._counterValue;
    }
  
    set counterValue(value) {
      this._counterValue = value;
      this._updateCounterDisplay();
    }
  
    // Método llamado cuando el componente es insertado en el DOM
    connectedCallback() {
      this._updateCounterDisplay();
    }
  }
  
  // Definir el nuevo elemento personalizado
  customElements.define('counter-component', CounterComponent);
  