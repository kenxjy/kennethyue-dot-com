const SCROLL_INTERVAL = 16.67; // ~60fps

const smoothScroll = {
  activeScrollInterval: null,
  activeScrollDestination: null,
  clearActiveScrollInterval() {
    window.clearInterval(smoothScroll.activeScrollInterval);
    smoothScroll.activeScrollInterval = null;
    smoothScroll.activeScrollDestination = null;
  },
};

export default {
  getActiveScrollPosition() {
    return smoothScroll.activeScrollDestination !== null
      ? smoothScroll.activeScrollDestination
      : window.pageYOffset;
  },
  scrollTo(yPosition, resetActiveScroll = true, ms = 750) {
    if (smoothScroll.activeScrollInterval) {
      if (resetActiveScroll) {
        smoothScroll.clearActiveScrollInterval();
      } else {
        return;
      }
    }

    const numOfSteps = Math.round(ms / SCROLL_INTERVAL);
    const currentPosition = window.pageYOffset;
    smoothScroll.activeScrollDestination = yPosition;
    const travelDistance =
      smoothScroll.activeScrollDestination - currentPosition;

    const distanceCurve = function (step) {
      return (
        (-travelDistance / (-numOfSteps * -numOfSteps)) *
          ((step - numOfSteps) * (step - numOfSteps)) +
        travelDistance
      );
    };

    let currentStep = 0;
    smoothScroll.activeScrollInterval = window.setInterval(() => {
      ++currentStep;
      window.scrollTo(0, currentPosition + distanceCurve(currentStep));

      if (currentStep >= numOfSteps) {
        smoothScroll.clearActiveScrollInterval();
        window.scrollTo(0, yPosition + (yPosition === 0 ? 0 : 1));
      }
    }, SCROLL_INTERVAL);
  },
};
