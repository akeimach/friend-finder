
$("#submit").on("click", function() {

    var complete = true;
    $('.chosen-select').each(function() {
        if ($(this).val() === "") {
            complete = false;
        }
    });
    if (complete) {
        createNewFriend();
    }

});


function createNewFriend() {
    var newFriend = {
        "name": $("#name").val(),
        "photo": $("#photo").val(),
        "scores": [$("#q1").val()]
    }
    console.log(newFriend);
    $.post("api/friends", newFriend, function(data) {
        console.log(data);
    })
}