var button = document.getElementById('mainButton');

var openForm = function () {
    button.className = 'active';
};

var closeForm = function () {
    button.className = '';
};

document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27 || e.keyCode == 13) {
        closeForm();
    }
});