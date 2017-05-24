window.INSTALL_SCOPE.services['flickr'] = {
  icon: color => `
  <svg data-icon="flickr" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#212124' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M0 53.125c0-12.081 9.794-21.875 21.875-21.875s21.875 9.794 21.875 21.875c0 12.081-9.794 21.875-21.875 21.875-12.081 0-21.875-9.794-21.875-21.875zM56.25 53.125c0-12.081 9.794-21.875 21.875-21.875s21.875 9.794 21.875 21.875c0 12.081-9.794 21.875-21.875 21.875-12.081 0-21.875-9.794-21.875-21.875z" />
  </svg>`,
  url: username => `https://www.flickr.com/photos/${username}`
}
