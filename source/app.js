import * as socialMedia from './social-media'

(function () {
  if (!document.addEventListener) return

  let element
  let options = INSTALL_OPTIONS

  function updateElement () {
    element = INSTALL.createElement(options.container, element)
    element.setAttribute('app', 'social-icons')
    element.setAttribute('data-position', options.position)

    let htmlString = ''
    const size = `${options.size}em`

    Object
      .keys(options.services)
      .filter(id => options.services[id].enabled)
      .forEach(id => {
        const service = options.services[id]

        htmlString += `
          <a href="${socialMedia[id].url(service.username)}" style="height: ${size}; width: ${size};" target="_blank">
            ${socialMedia[id].icon(options.color || 'auto')}
          </a>
        `
      })

    element.innerHTML = htmlString
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    },
    setSize (nextOptions) {
      options = nextOptions
      const links = [...element.querySelectorAll('a')]

      links.forEach(link => {
        link.style.height = `${options.size}em`
        link.style.width = `${options.size}em`
      })
    }
  }
}())
