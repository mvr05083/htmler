Template.registerHelper('randColor', function() {
  colors = ['primary', 'default', 'success', 'info', 'warning', 'danger'];
  return Random.choice(colors);
});

Template.registerHelper('tableStart', function() {
  return '<center><table style="max-width:600px; width:100%"><tbody>';
});
Template.registerHelper('tableEnd', function() {
  return '</tbody></table></center>';
});
