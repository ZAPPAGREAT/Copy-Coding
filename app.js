(function () {
    function initGoogleAnalytics() {
        if (document.getElementById('ga-script')) {
            return;
        }

        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () {
            window.dataLayer.push(arguments);
        };

        window.gtag('js', new Date());
        window.gtag('config', 'UA-106915156-1');

        var gaScript = document.createElement('script');
        gaScript.id = 'ga-script';
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-106915156-1';
        document.head.appendChild(gaScript);
    }

    function initFacebookSdk() {
        if (document.getElementById('facebook-jssdk')) {
            return;
        }

        var facebookScript = document.createElement('script');
        facebookScript.id = 'facebook-jssdk';
        facebookScript.src = '//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.10&appId=1811646229085324';
        document.body.appendChild(facebookScript);
    }

    function initTwitterWidget() {
        if (document.getElementById('twitter-wjs')) {
            return;
        }

        var twitterScript = document.createElement('script');
        twitterScript.id = 'twitter-wjs';
        twitterScript.src = 'https://platform.twitter.com/widgets.js';
        document.body.appendChild(twitterScript);
    }

    document.addEventListener('DOMContentLoaded', function () {
        initGoogleAnalytics();
        initFacebookSdk();
        initTwitterWidget();
    });
})();
