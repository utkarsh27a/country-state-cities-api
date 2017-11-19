var baseUrl = "/api";

var Location = {
  getCountries: function() {
    $.get(baseUrl+"/countries").done(function(response) {
      if (response.status == "success") {
        Location.fill(response.data, $("#country"));
      }
      else {
        alert(response.message);
      }
    })
  },
  getStates: function() {
    $.get(baseUrl+"/states").done(function(response) {
      if (response.status == "success") {
        Location.fill(response.data, $("#state"));
      }
      else {
        alert(response.message);
      }
    })
  },
  getCities: function() {
    $.get(baseUrl+"/cities")
  },
  fill: function(data, target) {
    var html = ['<option>Select</option>'];
    $(target).select2("destroy");
    $.each(data, function(i, element) {
        html.push('<option>'+element+'</option>');
    });
     $(target).html(html.join(''));
     $(target).select2();
  },
  init: function() {
     $('.select2').select2();
     Location.getCountries();
  }
}