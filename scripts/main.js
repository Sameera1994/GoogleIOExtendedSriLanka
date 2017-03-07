var countDown = new IOWA.CountdownTimer.Core(
  new Date(Date.now() + 10*24*60*60*1000),
  document.querySelector('countdown-timer')
);
countDown.setUp(false);
countDown.attachEvents();
countDown.play(false);
