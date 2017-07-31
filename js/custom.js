$().ready(function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var dates = today.getDate();
    $(".cy-today").html(year + "年" + month+"月"+dates+"日");
});