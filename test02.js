(function($,window){
    $(function(){

        $('h2').remove();

        var list = $('#index').text();
        alert(list);

        var list = $('#index').html();
        alert(list);

    $('#index').find('li').each(function(){
        alert($(this).text().length);
    });


    $("#button").click(function(){
        $("#index").append("<li>メソッド</li>");
    });

    $('#index').find('li').eq(0).each(function(){
        $(this).text($(this).text()+'['+'11文字'+']');
    });
    $('#index').find('li').eq(1).each(function(){
        $(this).text($(this).text()+'['+'4文字'+']');
    });
    $('#index').find('li').eq(2).each(function(){
        $(this).text($(this).text()+'['+'3文字'+']');
    });
    
    });
})(jQuery, window);





