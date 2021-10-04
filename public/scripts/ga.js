window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
});

dataLayer.push({
  event: 'default_consent',
});

gtag('config', document.currentScript.getAttribute('data-ga'));
