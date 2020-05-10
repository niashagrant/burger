$(function () {
  $("#inputDessert").on("submit", function (event) {
    event.preventDefault();

    var newDessert = {
      dessertName: $("#newDessert").val().trim(),
      completed: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newDessert,
    }).then(function () {
      console.log("Added new dessert");
      location.reload();
    });
  });

  $(".eatDessert").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var completedState = {
      completed: 1,
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: completedState,
    }).then(function () {
      console.log("dessert eaten");
      location.reload();
    });
  });
});
