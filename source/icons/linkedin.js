window.INSTALL_SCOPE.services['linkedin'] = {
  icon: color => `
  <svg data-icon="linkedin" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#0073b2' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M83.203 0h-66.406c-9.238 0-16.797 7.559-16.797 16.797v66.406c0 9.238 7.559 16.797 16.797 16.797h66.406c9.238 0 16.797-7.559 16.797-16.797v-66.406c0-9.238-7.559-16.797-16.797-16.797zM37.5 81.25h-12.5v-43.75h12.5v43.75zM31.25 31.25c-3.452 0-6.25-2.798-6.25-6.25s2.798-6.25 6.25-6.25 6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25zM81.25 81.25h-12.5v-25c0-3.452-2.798-6.25-6.25-6.25s-6.25 2.798-6.25 6.25v25h-12.5v-43.75h12.5v7.761c2.578-3.541 6.519-7.761 10.938-7.761 7.767 0 14.063 6.996 14.063 15.625v28.125z" />
  </svg>`,
  url: username => `https://linkedin.com/${username}`
}
