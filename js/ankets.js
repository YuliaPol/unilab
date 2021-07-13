jQuery(function ($) {
    $(document).ready(function () {
        $('.main-wrapper').on('click', '.answer-for-anket', function(e){
            $(this).fadeOut(300);
            $(this).parents('.anket-box').find('.anket-form').fadeIn(300);
            $(this).parents('.anket-box').find('.anket-form')[0].scrollIntoView({
                behavior: "smooth", // or "auto" or "instant"
                block: "center" // or "end"
            });
        });
        $('.main-wrapper').on('click', '.add-tag', function(e){
            $(this).fadeOut(300);
            $(this).parents('.anket-box').find('.tag-form').fadeIn(300);
        });
        
    });
});