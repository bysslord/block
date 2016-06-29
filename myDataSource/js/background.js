/**
 * Created by Skywalker on 2016/6/29.
 */

function fetching() {
    let url = 'https://open.bdp.cn/api/ds/list?access_token=' + localStorage.token
    $.get(url, function (data) {
        // console.info(data)
        chrome.runtime.sendMessage(data)
    })
}

function timer() {
    fetching()
    setTimeout(timer, 2000)
}

setTimeout(timer, 2000)