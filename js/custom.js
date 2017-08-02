$().ready(function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var dates = today.getDate();
    $(".cy-today").html(year + "年" + month+"月"+dates+"日");
    $(".cy-year").html(year);
    // $(".cy-dept-doctor-list").hide();
    /*
    $("#cy-dept-select").change(function () {
        var value = $("#cy-dept-select option:selected").val();
        var dept = "";
        switch(value) {
            case "dept-pediatrics":
                dept = "cy-pediatrics";
                break;
            case "dept-gynaecology":
                dept = "cy-gynaecology";
                break;
            default:
                dept = '';
        }

        if (dept != '') {
            $(".cy-dept-doctor-list").hide();
            $("#"+dept).show();
        }
    })
    */
});