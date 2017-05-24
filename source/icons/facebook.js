window.INSTALL_SCOPE.services['facebook'] = {
  icon: color => `
  <svg data-icon="facebook" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#3b5998' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M83.334 0h-66.666c-9.167 0-16.668 7.501-16.668 16.669v66.663c0 9.174 7.501 16.669 16.668 16.669l66.666-0c9.168 0 16.666-7.495 16.666-16.669v-66.662c0-9.167-7.498-16.669-16.666-16.669zM85.019 50h-16.269v43.75h-18.75v-43.75h-9.036v-14.313h9.036v-9.296c0-12.631 5.448-20.142 20.3-20.142h17.114v15.485h-13.978c-4.149-0.007-4.663 2.163-4.663 6.202l-0.023 7.749h18.75l-2.481 14.313z" />
  </svg>`,
  url: username => `https://facebook.com/${username}`
}
