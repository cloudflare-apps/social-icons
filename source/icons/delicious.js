window.INSTALL_SCOPE.services['delicious'] = {
  icon: color => `
  <svg data-icon="delicious" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#0076e8' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M83.337 0h-66.669c-9.168 0-16.669 7.502-16.669 16.669v66.663c0 9.173 7.501 16.668 16.669 16.668h66.669c9.167 0 16.663-7.495 16.663-16.668v-66.663c0-9.168-7.495-16.669-16.663-16.669zM93.75 83.332c0 2.767-1.088 5.379-3.063 7.355-1.975 1.975-4.585 3.063-7.349 3.063h-33.337v-43.75h-43.75v-33.331c0-2.764 1.089-5.376 3.066-7.353 1.977-1.977 4.588-3.066 7.353-3.066h33.331v43.75h43.75v33.332z" />
  </svg>`,
  url: username => `https://del.icio.us/${username}`
}
