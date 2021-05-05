var post_options = {
  "url": "/api",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  }
};
$("#save").click(function() {
  $("#save").html(`<div class="spinner-border text-light spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>`);
  post_options.data = JSON.stringify({
    "heading": $("#heading").text(),
    "body": $("#inputext").val(),
    "code": $("#is-code").is(":checked") ? true: false,
    "raw": $("#is-raw").is(":checked") ? true: false,
    "footer": $("#is-footer").is(":checked") ? true: false
  });
  $.ajax(post_options).done(function (response) {
    window.location.href = response;
  }).fail(function(request, status, error) {
    alert(`${request.status} ${status} - ${error}`);
    $("#save").html(`<img width="24" src="assets/images/save.png">`);
  });
});
$("#inputext").keyup(function() {
  if ($("#is-code").is(":checked")) {
    $("#body").show().html("<pre id='code'></pre>");
    $("#code").text($(this).val());
  } else {
    $("#body").show().html(marked($(this).val()));
  }
});