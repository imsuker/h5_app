(function(doc, win) {
    //设计图的宽度
    var viewBase = 750;
    var fontBase = 32; //css文件中font-base ，基于该值计算rem值
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        docEl.style.fontSize = fontBase * (clientWidth / viewBase) + 'px';
    };
    recalc();
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
