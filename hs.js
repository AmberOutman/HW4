$(document).ready(function(){
    var keys = Object.keys(localStorage);
    var $highscores = $("#actual-hs");
    $.each(keys,function(index,key){
        var $row = $("<div>");
        $row.addClass("row");
        var $col1 = $("<div>");
        $col1.addClass("col-6");
        $col1.addClass("text-right");
        $col1.text(key);
        $row.append($col1);
        var $col2 = $("<div>");
        $col2.addClass("col-6");
        $col2.addClass("text-left");
        $col2.text(localStorage.getItem(key));
        $row.append($col2);
        $highscores.append($row);
    })
})