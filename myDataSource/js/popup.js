/**
 * Created by Skywalker on 2016/6/29.
 */

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    dataSource = JSON.parse(message).result.data_source
    chrome.browserAction.setBadgeText({text: dataSource.length.toString()})
    let main = $('#main')
    main.empty()
    for (let ds of dataSource) {
        element = "<div>" + ds.name + "</div>"
        main.append(element)
    }
})