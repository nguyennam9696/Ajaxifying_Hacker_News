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

// <div class='post-container'>
//   <article id="<%= post.id %>">
//     <a href='/posts/<%= post.id %>/vote' class="fa fa-sort-desc vote-button"></a>
//     <h2><a href='/posts/<%= post.id %>'><%= post.title %></a></h2>
//     <p>
//       <span class='points'><%= post.points %></span>
//       <span class='username'><%= post.username %></span>
//       <span class='timestamp'><%= post.time_since_creation %></span>
//       <span class='comment-count'><%= post.comment_count %></span>
//     <a class="delete" href='/posts/<%= post.id %>'></a>
//     </p>
//   </article>

// </div>
