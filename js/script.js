jQuery(function ($) {
    $(document).ready(function () {

        $('.show-user-dropdown').click( function(){
            if($('.dropdown-user').is(':visible')){
                $('.dropdown-user').fadeOut(300)
            }
            else {
                $('.dropdown-user').fadeIn(300)
            }
        });

        $('.toggle-sidebar').click( function(){
            $('.sidebar').toggleClass('hide');
            $('.header').toggleClass('full-width');
            $('.content').toggleClass('full-width');
        });

        $('.show-treeview-menu').click(function(){
            let treeMenu = $(this).parents('.treeview').find('.treeview-menu');
            $(this).parents('.treeview').toggleClass('hiddden-menu');
            if(treeMenu.is(":visible")) {
                treeMenu.fadeOut(300);
            }
            else {
                treeMenu.fadeIn(300);
            }
        });

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
    
        $('.scrollup').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        $('.page-content').on('input', '.form-add-message textarea', function(e){
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    
        $('.field-filter-item').find('.help-block').after('<div class="select-caret"></div>');

        $('input#reviewsearch-date').change(function () {
            $("#selector-filter").submit()
        });
    });

    $(document).ready(function () {
        $('.custom-select').select2({
            placeholder: "Выберите ответ",
            minimumResultsForSearch: Infinity
        });
    });
    $('.show-hidden').on('change', 'input', function(e){
        let inputs = $(this).parents('.show-hidden').find('input');
        for (let i = 0; i < inputs.length; i++) {
            if($(inputs[i]).attr('data-hidden')){
                if($(inputs[i]).is(':checked')){
                    $($(inputs[i]).attr('data-hidden')).fadeIn(300);   
                }
                else {
                    if($(this).attr('data-hidden') !== $(inputs[i]).attr('data-hidden')){
                        $($(inputs[i]).attr('data-hidden')).fadeOut(300);   
                    }
                }
            }
        }
    });
    $('.select-answer-template').change(function(e){
        let value = $(this).find('option:checked').val();
        if(templateArray.length > 0){
            let templateItem = templateArray.filter(obj => {return obj.value === value });
            if(templateItem.length !== 0){
                $('.answer-template').val(templateItem[0].template);
            } else {
                $('.answer-template').val("");
            }
        }
        $('.answer-template').parents('.input-item').fadeIn();
    });
    $('.show-expired').click(function(e){
        $(this).parents('.btn-work-cont').fadeOut(0);
        $('.expired-form').fadeIn(300);
    });
    $('.show-comment-form').click(function(e){
        $(this).parents('.btn-work-cont').fadeOut(0);
        $('.comment-form').fadeIn(300);
    });
    $('.type-process').change(function(e){
        let checked = $(this).find('option:checked');
        let agreement = checked.attr('data-agreement');
        let investigation = checked.attr('data-investigation');
        if(agreement === "true"){
            $('.for-agreement').fadeIn(0);
            $('.without-agreement').fadeOut(0);
            $('.send-to-agreement').fadeIn(0);
            $('.send-answer').fadeOut(0);
        } else {
            $('.for-agreement').fadeOut(0);
            $('.without-agreement').fadeIn(0);
            $('.send-to-agreement').fadeOut(0);
        }
        if(investigation === "true"){
            $('.for-investigation').fadeIn(0)
            
            $('.without-investigation').fadeOut(0);

            $('.send-to-investigation').fadeIn(0);
            $('.send-answer').fadeOut(0);
        } else {
            $('.for-investigation').fadeOut(0)
            $('.send-to-investigation').fadeOut(0);

            $('.without-investigation').fadeIn(0);
        }
        if(agreement === "true" && investigation === "true"){
            $('.send-to-agreement').fadeOut(0);
            $('.send-answer').fadeOut(0);
        }
        if(agreement === "false" && investigation === "false"){
            $('.send-to-agreement').fadeOut(0);
            $('.send-answer').fadeIn(0);
        }
        $('.hidden-anket').fadeIn(300);
    });
    $('.show-review-form').click(function(e){
        $(this).parents('.btn-work-cont').fadeOut(0);
        $('.review-form').fadeIn(300);
    });
    $('.content').on('change', '.select-show-hidden', function(e){
        if($(this).hasClass('select-type')){
            $('.category').fadeOut(0);
            $('.subcategory').fadeOut(0);
            $($(this).find('option:checked').attr('data-hidden')).fadeIn(300);
        } else if($(this).hasClass('select-category')) {
            $('.subcategory').fadeOut(0);
            $($(this).find('option:checked').attr('data-hidden')).fadeIn(300);
        } else {
            let options = $(this).find('option');
            let selected = $(this).find('option:selected');
            for (let i = 0; i < options.length; i++) {
                if($(options[i]).attr('data-hidden')){
                    if($(options[i]).is(':checked')){
                        $($(options[i]).attr('data-hidden')).fadeIn(300);   
                    }
                    else {
                        if($(selected).attr('data-hidden') !== $(options[i]).attr('data-hidden')){
                            $($(options[i]).attr('data-hidden')).fadeOut(300);
                        }
                    }
                }
            }
        }
        
    });

});