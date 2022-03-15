/**
 *
 * @param {*} noInsertScript
 */

declare global {
    interface Window {
        fbAsyncInit: any;
        FB: any;
    }
}

const Page_Id = '109529988088868';

export function init() {
    var chatbox: any = document.getElementById('fb-customer-chat');
    chatbox.setAttribute('page_id', Page_Id);
    chatbox.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function () {
        window.FB.init({
            xfbml: true,
            version: 'v11.0'
        });
    };

    (function (d, s, id) {
        var js: any,
            fjs: any = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}

/**
 *
 */
export function cleanup() {
    (function (d, id) {
        var target: any = d.getElementById(id);
        if (target) {
            target.parentNode.removeChild(target);
        }
    })(document, 'facebook-jssdk');

    delete window.FB;
}
