function init() {
  $('#search-field').on("input", function() {
    var dInput = this.value;
    console.log(dInput);
    $("#suggestion-list").text(this.value);
  });
}

(function() {
  init();
}());
