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

        
        $('select.input-sm').change(function () {
            $("#selector-filter").submit();

            let attribute = $(this).data('attribute');

            setTimeout(function(){
                console.log(attribute);
                // updateFilter(attribute);
            }, 8000);
        });

        $('input#reviewsearch-date').change(function () {
            $("#selector-filter").submit()
        });

        let image1_upload = $('#image1_upload').val() ? '../runtime-image/' + $('#image1_upload').val() : '';
        let image2_upload = $('#image2_upload').val() ? '../runtime-image/' + $('#image2_upload').val() : '';
        let image3_upload = $('#image3_upload').val() ? '../runtime-image/' + $('#image3_upload').val() : '';
        let preloaded = [];
        if (image1_upload) {
            jQuery(function ($) {
                if (image1_upload) {
                    preloaded = [
                        {id: 1, src: image1_upload},
                    ];
                }
                if (image2_upload) {
                    preloaded = [
                        {id: 1, src: image1_upload},
                        {id: 2, src: image2_upload},
                    ];
                }
                if (image3_upload) {
                    preloaded = [
                        {id: 1, src: image1_upload},
                        {id: 2, src: image2_upload},
                        {id: 3, src: image3_upload},
                    ];
                }

                $('.input-images').imageUploader({
                    label: 'Перетащите картинку сюда',
                    preloaded: preloaded
                });
            });
        } else {
            jQuery(function ($) {
                let preloaded = [
                    {id: 1, src: '../img/picture-example.jpg'},
                    {id: 2, src: '../img/picture-example.jpg'},
                    {id: 3, src: '../img/picture-example.jpg'},
                ];
                $('.input-images').imageUploader({
                    label: 'Перетащите картинку сюда',
                    preloaded: preloaded
                });
            });
        }

        

        
    
    });

    $('select').change(function () {
        let attribute = $(this).data('attribute');
        // updateFilter(attribute);

        if (attribute == 'region' || attribute == 'city' || attribute == 'office'
            || attribute == 'branche' || attribute == 'franchisee' || attribute == 'senior_reg_consultant'
            || attribute == 'reg_consultant' || attribute == 'dev_manager'
        ) {
            // $('#upload').find("input[name='" + $(this).attr('name') + "']").val($(this).val());
        }

        
    });

    function updateFilter(attribute) {
        // var page = $(this).data('page');
        // if ($(this).attr('name') == 'AdresAnswerSearch[status]') {
        //     $('#selector-filter').find("input[name='AdresAnswerSearch[status1]']").val($(this).val());
        // }
   
        // if (attribute == 'region' || attribute == 'city' || attribute == 'office'
        //     || attribute == 'branche' || attribute == 'franchisee' || attribute == 'senior_reg_consultant'
        //     || attribute == 'reg_consultant' || attribute == 'dev_manager'
        // ) {
        //     jQuery.ajax({
        //         url: '/admin/summary-table-ajax/get-list-params-filter',
        //         type: 'GET',
        //         data: $('#selector-filter').serializeArray(),
        //         success: function (jsonData) {
        //             var jsonData = jQuery.parseJSON(jsonData);
        //             console.log(jsonData);
                    
        //             $.each(jsonData, function (index, value) {
        //                 $('.filter-franchisee').empty();
        //                 $('.filter-franchisee').append(value['franchisee']);
                        
        //                 $('.filter-region').empty();
        //                 $('.filter-region').append(value['region']);

        //                 $('.filter-city').empty();
        //                 $('.filter-city').append(value['city']);
    
        //                 $('.filter-office').empty();
        //                 $('.filter-office').append(value['office']);

        //             });
        //         }
        //     });
            
        // }
    
        // if ($(this).attr('name') == 'AdresAnswerSearch[status]') {
        //     set_cookie ( 'status', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[country1]') {
        //     set_cookie ( 'country1', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[region1]') {
        //     set_cookie ( 'region1', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[city1]') {
        //     set_cookie ( 'city1', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[location1]') {
        //     set_cookie ( 'location1', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[gender]') {
        //     set_cookie ( 'gender', $(this).val() );
        // }
        // if ( $("select[name='AdresAnswerSearch[age]']").val() && ($("select[name='AdresAnswerSearch[age]']").val() == 'Старше 35'
        //     || $("select[name='AdresAnswerSearch[age]']").val() == 'O35')) {
        //     set_cookie ( 'age', 'O35' );
        // }
        // if ( $("select[name='AdresAnswerSearch[age]']").val() && ($("select[name='AdresAnswerSearch[age]']").val() == 'До 35' 
        //     || $("select[name='AdresAnswerSearch[age]']").val() == 'U35') ) {
        //     set_cookie ( 'age', 'U35' );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[NPS]') {
        //     set_cookie ( 'NPS', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[type_send]') {
        //     set_cookie ( 'type_send', $(this).val() );
        // }
        // if ($(this).attr('name') == 'AdresAnswerSearch[position]') {
        //     set_cookie ( 'position', $(this).val() );
        // }
        // if ( $("input[name='AdresAnswerSearch[start_date]']").val() ) {
        //     set_cookie ( 'start_date', $("input[name='AdresAnswerSearch[start_date]']").val() );
        // }
        // if ( $("input[name='AdresAnswerSearch[end_date]']").val() ) {
        //     set_cookie ( 'end_date', $("input[name='AdresAnswerSearch[end_date]']").val() );
        // }
        // if ( $("input[name='kvdate2']").val() ) {
        //     set_cookie ( 'kvdate2', $("input[name='kvdate2']").val() );
        // }
        // if ( $("input[name='type']").val() ) {
        //     set_cookie ( 'type', $("input[name='type']").val() );
        // }
 
        // if (page == 'answers') {
        //     jQuery.ajax({
        //         url: '/admin/answers/ajax-get-block-answer',
        //         type: 'GET',
        //         data: $('#selector-filter').serializeArray(),
        //         success: function (data) {
        //             $('.ajax-block-past1').empty();
        //             $('.ajax-block-past1').append(data);
        //         }
        //     });
        // }
    
        // jQuery.ajax({
        //     url: '/admin/total/ajax-get-block-total',
        //     type: 'GET',
        //     data: $('#selector-filter').serializeArray(),
        //     success: function (data) {
        //         var t = '<iframe id="pecom-kabinet-iframe" allowtransparency="true" frameborder="0" width="100%" height="5750" scrolling="no" style="border: 0;" src="'+data+'" onload="setTimeout(function(){ if (this.contentWindow){ this.style.height=(this.contentWindow.document.body.scrollHeight+20)+\'px\';} }, 5000);">Not supported browser</iframe>';
        //         $('.ajax-block-past').empty();
        //         $('.ajax-block-past').append(t);
        //     }
        // });
    
        // let status = null;
        // if ($(this).attr('name') == 'AdresAnswerSearch[status]') {
        //     status = $(this).val();
    
        //     $('#selector-filter').find("input[name='AdresAnswerSearch[status1]']").val(status);
        // }
    
        // if (!status) {
        //     status = $('.filter-status').val();
        // }
    
        // ajaxGetBtnsInfo (status);
    
        // $('#upload').find("input[name='" + $(this).attr('name') + "']").val($(this).val());
    
        // let minAnswerID = null;
        // if ($(this).attr('name') == 'AdresAnswerSearch[min_answer_id]') {
        //     minAnswerID = $(this).val();
        //     let name_answer = $('div.field-filter-item').find('.select-styled').text();
    
        //     if (name_answer && name_answer != 'Результативные анкеты') {
        //         $('#upload').attr("action", "/admin/answers/downloadall");
        //         $('#upload').find("input[name='min_answer_id']").val(minAnswerID);
        //     } else {
        //         $('#upload').attr("action", "/admin/answers/download");
        //         $('#upload').find("input[name='min_answer_id']").val(minAnswerID);
        //     }
        // }
    
    }
    

    $(document).on('click', '.download-xls', function () {
        $("#upload").submit();
    });

    $('label.source-radio').on('click', function () {
        let add_name = $(this).find('span').text();
        let name = $("#import-name").val();

        updateImportName(add_name);
    });


    //backend\views\review\view-review

    $(document).ready(function () {
        $('.btn-file').click(function () {
            $('.hide-input-file').click();
        });
        $('.hide-input-file').change(function () {
            $('.text-file').text($('.hide-input-file')[0].files[0].name);
            $('.text-file').fadeIn(300);
        });
    });

    $('button#to-comment-button').click(function (event) {
        $('.chat-container').fadeIn();
        $('.about-user-opened-tab').hide();
        $('.tag-container').hide();

        $('.tab-element').css('border-bottom', '1px solid #ECECEC');
        $('.tab-element.chat-tab').css('border-bottom', '3px solid #009239');
        
        event.preventDefault(); // 1
        $('.answer-box').removeClass('hide');
        $('.answer-box').addClass('show');

        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1200);

        $('button#to-comment-button-tab').removeClass('show');
        $('button#to-comment-button-tab').addClass('hide');
    });

    $('button#to-comment-button-tab').click(function (event) {
        event.preventDefault(); // 1
        $('.answer-box').removeClass('hide');
        $('.answer-box').addClass('show');

        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1200);

        $('button#to-comment-button-tab').removeClass('show');
        $('button#to-comment-button-tab').addClass('hide');
    });

    $('button#to-work-button').click(function (event) {
        $("#to_work-review").submit();
        
        // event.preventDefault(); // 1
        // // event.stopImmediatePropagation(); // 2
        // $('#detail-info-box').removeClass('hide');
        // $('.answer-box').removeClass('hide');
        // $('#detail-info-box').addClass('show');
        // $('.answer-box').addClass('show');
        // $('#to-work-button').removeClass('show');
        // $('#to-work-button').addClass('hide');

        // var id_review = "<?= $model->id ?>";
        // let id_review = $('#id_review').val();

        // $.ajax({
        //     type: 'POST',
        //     // url: '/admin/review/view-review?id=' + id_review + '&to_work=1',
        //     url: '/admin/review/view-review?id=' + id_review,
        //     data: {
        //         id: id_review,
        //         to_work: 1
        //     },
        // }).done(function () {
        //     document.location.reload(true);
        // }).fail(function () {
        //     alert('Что-то пошло не так');
        // });
    });

    $(document).ready(function () {
        $('.js-example-basic-multiple').select2();
    });

    $(".js-example-placeholder-multiple").select2({
        placeholder: "Выберите причину",
        allowClear: true
    });

    $('.summary-data').on('click', function () {
        let action = $(this).data("action");
        $("#action_marker").val(action);
        $("#selector-filter").submit();
    });

    let any_source_type = $('input[name="Import[any_source_type]"]:checked').val();
    if (any_source_type == 1) {
        $('.field-import-id_source_type').hide();
    }

    $('input[name="Import[any_source_type]"]').change(function(){
        let any_source_type1 = $('input[name="Import[any_source_type]"]:checked').val();
        console.log(any_source_type1);
        if (any_source_type1 == 1) {
            $('.field-import-id_source_type').hide();

            updateImportName('Any');
        } else {
            $('.field-import-id_source_type').show();

            let add_name = $('input[name="Import[id_source_type]"]:checked').next('span').text();

            updateImportName(add_name);
        }
    });

    function updateImportName(sourse){
        let d = new Date();
        let day = d.getMonth() < 9 ? '0' + (d.getMonth()*1+1) : d.getMonth()*1+1;
        let minute = d.getMinutes() < 10 ? '0' + (d.getMinutes()*1) : d.getMinutes()*1;
        let second = d.getSeconds() < 10 ? '0' + (d.getSeconds()*1) : d.getSeconds()*1;

        let newdate = d.getFullYear() + '-' + day + '-' + d.getDate() + ' ' + d.getHours() + ':' + minute + ':' + second;

        $("#import-name").val(newdate + ' - ' + sourse);
    }


    /**
    * Set timer countdown in seconds with callback
    */
    let countdown_date = $('#countdown_date').val();

    $('#countdown-1').timeTo({
        timeTo: new Date(countdown_date * 1000)
    }, function(){
        let id_review = $('#id_review').val();

        jQuery.ajax({
            type: 'GET',
            url: '/admin/review/status-update',
            data: {
                id_review: id_review
            }/* ,
            success: function (data) {
                console.log(data);
            } */
        }).done(function () {
            // $('#countdown-1').removeClass('show');
            // $('#countdown-1').addClass('hide');
            // $('#countdown-span').removeClass('show');
            // $('#countdown-span').addClass('hide');

            // $('#tableColor').removeClass('hide');
            // $('#tableColor').addClass('show');

            // document.location.reload(true);
            location.href=location.href;
        }).fail(function () {
            console.log('Что-то пошло не так');
        });

        // alert('Строк прошел!');
    });
    // $('#reset-1').click(function() {
    //     $('#countdown-1').timeTo('reset');
    // });

    $('#arbitration-button-yes').on('click', function () {
        $("#arbitration_finale").val('1');
        $("#arbitration").submit();
    });
    $('#arbitration-button-no').on('click', function () {
        $("#arbitration_finale").val('2');
        $("#arbitration").submit();
    });
    
    $('button#arbitration-button').click(function (event) {
        $('.arbitration-container').fadeIn();
        $('.about-user-opened-tab').hide();
        $('.tag-container').hide();
        $('.chat-container').hide();

        $('.tab-element').css('border-bottom', '1px solid #ECECEC');
        $('.tab-element.arbitration-tab').css('border-bottom', '3px solid #009239');
        
        event.preventDefault(); // 1
        $('.arbitration-box').removeClass('hide');
        $('.arbitration-box').addClass('show');

        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1200);

        $('button#arbitration-button-tab').removeClass('show');
        $('button#arbitration-button-tab').addClass('hide');
    });

    $('button#arbitration-button-tab').click(function (event) {
        event.preventDefault(); // 1
        $('.arbitration-box').removeClass('hide');
        $('.arbitration-box').addClass('show');

        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1200);

        $('button#arbitration-button-tab').removeClass('show');
        $('button#arbitration-button-tab').addClass('hide');
    });


    $('.tab-label').on('click', function(){
        $('#tab_label').html('/ ' + $(this).text());
    });

    let pathname = window.location.pathname;
    let path_array = pathname.split('/');
    let href = path_array[2];

    switch(href) {
        case '':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#review').addClass('highlight');
          break;
        case 'review':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#review').addClass('highlight');
          break;
        case 'dashboard':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#dashboard').addClass('highlight');
          break;
        case 'branches':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#branches').addClass('highlight');
          break;
        case 'source-type':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#source_type').addClass('highlight');
          break;
        case 'user':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#user').addClass('highlight');
          break;
        case 'import':  
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#import').addClass('highlight');
          break;
        default:
            $('.treeview-menu').find('li').removeClass('highlight');
            $('li#review').addClass('highlight');
          break;
    }


    // $('.treeview-menu').find('li').on('click', function(){
    //     $('.treeview-menu').find('li').removeClass('highlight');
    //     $(this).addClass('highlight');
    // });

});