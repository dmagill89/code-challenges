class DataBinder {

  constructor(element, val) {
    this.el = element;
    this.value = val;

    element.value = val;
    element.addEventListener('change', this, false);
  }

  changeEvent(value) {
    this.data = value;
  }

  handleEvent(event) {
    switch (event.type) {
      case 'change':
        this.changeEvent(event.target.value);
    }
  }

  getValue() {
    return this.value;
  }
}

let dataBound = new DataBinder(document.getElementById('in'), 'start');