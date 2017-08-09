// ==UserScript==
// @name          Namuwiki board Captcha audio fix
// @namespace     http://lastorder.xyz
// @description	  Namuwiki board Captcha audio fix
// @author        Lastorder-DC
// @include       https://board.namu.wiki/*
// @run-at        document-idle
// @version       1.0.0
// ==/UserScript==
(function(document) {
    function setSoundTarget(audio,dummy) {
        unsafeWindow.captcha_audio.setAttribute("src",audio);
    }

    function removeSwfCaptcha(document) {
        var swf = document.getElementsByName("captcha_audio");
        if(typeof swf[0] !== 'undefined') {
            swf[0].remove();
            jQuery('<audio id="captcha_audio" src="" autoplay="autoplay" />').appendTo(document.body);

            unsafeWindow.captcha_audio.setSoundTarget = exportFunction(setSoundTarget, unsafeWindow);
        }
    }

    setTimeout(removeSwfCaptcha,1000,document);
})(document);
