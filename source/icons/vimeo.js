window.INSTALL_SCOPE.services['vimeo'] = {
  icon: color => `
  <svg data-icon="vimeo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#0070ba' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M0 30.114l4.062 5.327c0 0 8.376-6.602 11.168-3.301 2.792 3.301 13.451 43.16 17.009 50.512 3.105 6.448 11.672 14.973 21.066 8.885 9.388-6.088 40.609-32.743 46.198-64.22 5.584-31.467-37.57-24.876-42.142 2.54 11.425-6.859 17.523 2.787 11.677 13.708-5.836 10.911-11.168 18.027-13.96 18.027-2.787 0-4.931-7.302-8.124-20.063-3.301-13.194-3.28-36.959-17.004-34.265-12.941 2.54-29.95 22.85-29.95 22.85z" />
  </svg>`,
  url: username => `https://vimeo.com/${username}`
}
