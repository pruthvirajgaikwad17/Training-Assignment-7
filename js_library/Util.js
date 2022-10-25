var index = 0;
export function createTab(tab_name, tab_content) {
  var tag = $("<button>");
  tag.text(tab_name);
  $(".tab").append(tag);
  tag.attr("name", index);
  index = index + 1;
  tag.attr("class", "links");

  tag.on("click", () => {
    //console.log($(".links").length);
    for (var i = 0; i < $(".links").length; i++) {
      $(".links").removeClass("active");
      $("#content").css("display", "block");
      $("#content").text(tab_content);
    }
    tag.addClass("active");
  });
}
