class Select {
  selectorValue;
  /**
   * ID or classname of an element
   * @param {string} selectorValue
   */
  constructor(selectorValue) {
    this.selectorValue = selectorValue;
  }
  /**
   *
   * @returns HTMLElement
   */
  getElement() {
    try {
      return document.querySelector(this.selectorValue);
    } catch {
      throw new Error("Bad selector!");
    }
  }
}

// Year
class AssignYear {
  element;
  /**
   * @param {string} id
   * ID of an element
   */
  constructor(id) {
    this.element = new Select(id).getElement();
  }
  /**
   * @returns `current year`
   */
  assign() {
    const year = new Date().getFullYear();
    this.element.innerText = year;
    return year;
  }
}

const displayedYear = new AssignYear("#year").assign();
