var odometer = new Odometer({ 
  el: $('.odometer')[0], 
  value: 4444, 
  theme: 'minimal',
  duration: 3000
});
odometer.render();

$('.odometer').text(5445);

// TODO: To increase all numbers independently
// TODO: Randomize fadeIn of different digits