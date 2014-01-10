//= require jquery-2.0.3.min
//= require rails
//= require turbolinks
//= require nprogress

$(document).on('input', '#new_post_name', function() {
  var name = $('#new_post_name').val();
  $('#new_post_link').attr('href', 'my-blog://new?name=' + name);
});

$(document).on('page:fetch',   function() {
  NProgress.start();
});

$(document).on('page:change',  function() {
  NProgress.done();

  if (window._gaq) {
    _gaq.push(['_trackPageview']);
  }
});

$(document).on('page:restore', function() {
  NProgress.remove();
});
