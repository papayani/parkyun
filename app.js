function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '530%',
    triggerElement: '.sunny',
    triggerHook: 0.3
  })
  .setPin('.sunny')
  .addIndicators()
  .addTo(controller);
}

splitScroll();
