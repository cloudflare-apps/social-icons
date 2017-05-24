window.INSTALL_SCOPE.services['rss'] = {
  icon: color => `
  <svg data-icon="rss" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#ff6600' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M13.31 73.333c-7.343 0-13.31 5.99-13.31 13.289 0 7.339 5.967 13.262 13.31 13.262 7.37 0 13.329-5.923 13.329-13.262-0-7.299-5.959-13.289-13.329-13.289zM0.015 33.978v19.166c12.479 0 24.215 4.88 33.053 13.722 8.827 8.82 13.699 20.609 13.699 33.135h19.25c-0-36.408-29.617-66.022-66.002-66.022zM0.038 0v19.175c44.51 0 80.738 36.263 80.738 80.825h19.224c0-55.124-44.849-100-99.962-100z" />
  </svg>`,
  url: username => username
}
