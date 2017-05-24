window.INSTALL_SCOPE.services['stackoverflow'] = {
  icon: color => `
  <svg data-icon="stackoverflow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#fafafb' : color}" stroke="${color === 'auto' ? '#ccc' : color}" stroke-width="4" cx="50" cy="50" r="48"></circle>
    <path fill="${color === 'auto' ? '#f48024' : color}" transform="translate(25,25) scale(0.5)" d="M100 62.5v37.5h-100v-37.5h12.5v25h75v-25zM18.75 68.75h62.5v12.5h-62.5zM20.23 55.221l2.705-12.204 61.019 13.525-2.705 12.204zM27.31 30.133l5.282-11.329 56.644 26.412-5.282 11.329zM96.848 35.3l-7.61 9.917-49.585-38.048 5.502-7.17h5.688z" />
  </svg>`,
  url: username => `https://stackoverflow.com/users/${username}`
}
