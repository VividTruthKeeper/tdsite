// Swiper
const partnerSwiper = new Swiper(".partnerSwiper", {
  slidesPerView: 4,
  // spaceBetween: 60,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,
  navigation: {
    prevEl: ".partner-prev",
    nextEl: ".partner-next",
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});

// Abstract class
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
