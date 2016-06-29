/**
 * Created by haizhi on 16/6/29.
 */

$(document).ready(function () {
    $('#save').click(function () {
        localStorage.token = $('#token').val()
    })
})