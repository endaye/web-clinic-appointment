$().ready(function () {
    (function updateDate() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var dates = today.getDate();
        $(".cy-today").html(year + "年" + month+"月"+dates+"日");
        $(".cy-year").html(year);
    })();

    function getAllDoctors() {
        console.log("Sending Request...");

        $.ajax({
            url: 'http://vws-balancer.centaurstech.com:9006/api/getAll',
            crossDomain: true,
            success: ajaxOnSuccess,
            beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
            error: function () {
                // $("#log-result-header").html('没有找到相关会话列表。');
                // $('#log-alert-1').show();
                // $('#log-alert-2').show();
            }
        });
    }

    function ajaxOnSuccess(obj) {
        console.log("Got Respond.");
        console.log(obj);
        /*
        var sessions = obj.sessions;
        if (sessions.length === 0) {
            $("#log-result-context").html('<li class="list-group-item">没有找到相关日志列表。</li>')
            console.log("没有找到相关日志列表");
            return;
        }
        $("#log-result-header").html("第" + (pageNum + 1) + "页，本页" + sessions.length + "条会话");
        $("#log-result-context").html("");
        var tempListHtmlAsk = $('#log-list-result').html()
        var resObj = {};
        // var width = Math.ceil(Math.log10(sessions.length));
        var width = 2;
        console.log("width: " + width);
        for (var i = 0; i < sessions.length; ++i) {
            if (i === sessions.length - 1) {
                timeReq[pageNum + 1] = sessions[i].timestamp - 1;
            }
            resObj.id = zeroFill(i + 1, width);
            resObj.timestamp = parseDateTime(sessions[i].timestamp);
            resObj.app = sessions[i].app;
            resObj.nickname = (sessions[i].nickname).trim();
            resObj.uid = sessions[i].uid;
            resObj.cid = sessions[i].cid;
            var resHtml = tempListHtmlAsk.temp(resObj);
            $("#log-result-context").append(resHtml);
        }

        buttonsChecker(sessions.length);
        addItemBg();
        */
    }


    getAllDoctors()

});