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
      .keys(options.icons)
      .filter(id => options.icons[id].enabled)
      .forEach(id => {
        const config = options.icons[id]
        const service = INSTALL_SCOPE.services[id]

        htmlString += `
          <a href="${service.url(config.username || '')}" style="height: ${size}; width: ${size};" target="_blank">
            ${service.icon(options.color || '#000')}
          </a>
        `
      })

    element.innerHTML = htmlString
  }

  window.INSTALL_SCOPE = {
    ...INSTALL_SCOPE,
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
