import Vue from 'vue';

class AnimateOnScrollObserver {
  constructor() {
    this.observer = null;
  }

  defineObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-enter-to');
          entry.target.classList.remove('aos-enter');
          observer.unobserve(entry.target);
        }
      });
    });
  }

  observe(el) {
    if (!this.observer) {
      this.defineObserver();
    }

    this.observer.observe(el);
  }
}

const animateOnScrollObserver = new AnimateOnScrollObserver();

Vue.directive('scrollanimation', {
  bind(el) {
    el.classList.add('aos-enter');
    animateOnScrollObserver.observe(el);
  },
});
