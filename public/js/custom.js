$(document).ready(function() {
    $('#productTable').dataTable({
        sFilter: false,
        bFilter: false,
        bLengthChange: false
    });

    $('#change-theme').on('click', function() {
console.log($(this).attr('data-sa-value'));
    });

    // company delete form submit
    $('#delete').on('click', function(e) {
        e.preventDefault();
        $('#company').submit();
    });

    // admin logout form submit
    $('#logout').on('click', function(e) {
        e.preventDefault();
        $('#admin').submit();
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.img').attr('src', e.target.result);
            $('#frame').removeClass('not-shown').addClass('img-frame');
        };
        reader.readAsDataURL(input.files[0]);
    }
}