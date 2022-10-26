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
class AssignEvent {
  identifier;
  eventType;
  actionType;
  addedClass = "active";
  target = "self";
  /**
   * ID or class of an HTML element
   * @param {string} identifier
   * Event type on which action is executed
   * @param {string} eventType
   * Type of action
   * @param {"add" | "remove" | "toggle"} actionType
   * Added classname
   * @param {string} addedClass
   * Target element identifier
   * @param {string} target
   *
   */
  constructor(identifier, eventType, actionType, addedClass, target) {
    this.identifier = identifier;
    this.eventType = eventType;
    this.actionType = actionType;
    this.addedClass = addedClass;
    this.target = target;
  }

  listen() {
    const element = new Select(this.identifier).getElement();
    let target;
    if (this.target === "self") {
      target = element;
    } else {
      target = new Select(this.target).getElement();
    }
    element.addEventListener(this.eventType, () => {
      switch (this.actionType) {
        case "add":
          target.classList.add(this.addedClass);
          break;
        case "remove":
          target.classList.remove(this.addedClass);
          break;
        case "toggle":
          target.classList.toggle(this.addedClass);
          break;
        default:
          throw new Error("Bad action type!");
      }
    });
    return [element, target];
  }
}

const displayedYear = new AssignYear("#year").assign();
const dropdownPair = new AssignEvent(
  ".nav-dropdown-wrapper",
  "click",
  "toggle",
  "active",
  ".nav-dropdown"
).listen();

const burgerPair = new AssignEvent(
  ".nav-burger",
  "click",
  "add",
  "active",
  ".burger-wrapper"
).listen();

const burgerClosePair = new AssignEvent(
  ".burger-outer",
  "click",
  "remove",
  "active",
  ".burger-wrapper"
).listen();
