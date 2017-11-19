var Location = {
  getCountries: function() {

  },
  getStates: function() {

  },
  getCities: function() {

  },
  fill: function(data, target) {
    var html = [];
    $(target).select2("destroy");
    $.each(data, function(i, element) {
        html.push('<option>'+element+'</option>');
    });
     $(target).html(html.join(''));
     $(target).select2();
  },
  init: function() {
     $('.select2').select2();
  }
}