var baseUrl = "/api";

var Location = {
  getCountries: function() {
    $.get(baseUrl+"/countries").done(function(response) {
      if (response.status == "success") {
        Location.fill(response.data, $("#id-country"));
      }
      else {
        alert(response.message);
      }
    })
  },
  getStates: function(country) {
    if (country.length == 0) {
      return false;
    }
    $.get(baseUrl+"/states?country="+country).done(function(response) {
      if (response.status == "success") {
        Location.fill(response.data, $("#id-state"));
      }
      else {
        alert(response.message);
      }
    });
  },
  getCities: function(country, state) {
    if (country.length == 0 || state.length == 0) {
      return false;
    }
    $.get(baseUrl+"/cities?country="+country+"&state="+state).done(function(response) {
      if (response.status == "success") {
        Location.fill(response.data, $("#id-city"));
      }
      else {
        alert(response.message);
      }
    });
  },
  fill: function(data, target) {
    var html = ['<option>Select</option>'];
    // $(target).select2("destroy");
    $.each(data, function(i, element) {
        html.push('<option>'+element+'</option>');
    });
     $(target).html(html.join(''));
     // $(target).select2();
  },
  init: function() {
     $('.select2').select2();
     Location.getCountries();
  }
};

var Events = {
  loadOnChange: function() {
     $("#id-country").on("change", function(event) {
      Location.fill([], $("#id-state"));
      Location.getStates($("#id-country").val());
     });
     $("#id-state").on("change", function(event) {
      Location.fill([], $("#id-city"));
      Location.getCities($("#id-country").val(), $("#id-state").val());
     })
  },
  init: function() {
    Events.loadOnChange();
  }
}