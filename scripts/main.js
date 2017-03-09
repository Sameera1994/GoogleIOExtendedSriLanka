var countDown = new IOWA.CountdownTimer.Core(
  new Date("17 May, 2017 18:00:00"),
  document.querySelector('countdown-timer')
);
countDown.setUp(false);
countDown.attachEvents();
countDown.play(false);