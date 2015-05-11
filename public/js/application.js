$(document).ready(function() {

  function finalizePointArticle(response) {
    var selector = "#" + response.id;
    $(selector).find(".points").text(response.votes)
  }

  function addPointArticle(e) {
    e.preventDefault();
    var url = $(this).attr('href');

    $.ajax({
      type: "get",
      url: url,
      dataType: "json"
    })
    .done(finalizePointArticle);
  }

  function finalizeDeleteArticle(response) {
    var beGoneArticle = "#" + response.id;
    $(beGoneArticle).remove();
  }

  function deleteArticle(e) {
    e.preventDefault();
    var url = $(this).attr("href");

    $.ajax({
      type: "delete",
      url: url,
      dataType: "json"
    })
    .done(finalizeDeleteArticle);
  }

  $("div.post-container")
    .on("click", ".vote-button", addPointArticle)
    .on("click", ".delete", deleteArticle);

  // $('.vote-button').click(addPointArticle);
  // $('.delete').click(deleteArticle);

});

