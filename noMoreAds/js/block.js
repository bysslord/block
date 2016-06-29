/**
 * Created by Skywalker on 2016/6/29.
 */

block = function () {
    let ads = $("div[id*='300'], div[id*='400']")
    for (let i of ads) {
        i.remove()
    }
}
block()