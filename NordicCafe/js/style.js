$("#search").on("search change keyup", function () {
  var text = this.value;
  $(.container).highlite({
      text: text
  });
});

