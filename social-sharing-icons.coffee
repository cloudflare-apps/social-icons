extend = (out) ->
  out = out or {}
  i = 1

  while i < arguments.length
    continue unless arguments[i]
    for key of arguments[i]
      out[key] = arguments[i][key]  if arguments[i].hasOwnProperty(key)
    i++
  out

defaults =
  icons: ['facebook', 'twitter']
  color: 'auto'
  size: '3em'

SVG =
  facebook: (color) -> """
      <svg style="width: 100%; height: 100%; display: block" xmlns="http://www.w3.org/2000/svg" class="facebook-icon" fill="white" viewBox="10 10 40 40" role="img">
         <path fill="#{ if color is 'auto' then '#3b5998' else color }" d="M30,12.218c-9.82,0-17.781,7.962-17.781,17.782c0,9.822,7.961,17.782,17.781,17.782 S47.781,39.822,47.781,30C47.781,20.18,39.82,12.218,30,12.218z M33.809,30.006h-2.49c0,3.981,0,8.885,0,8.885h-3.693 c0,0,0-4.854,0-8.885h-1.756v-3.138h1.756v-2.032c0-1.455,0.691-3.727,3.727-3.727l2.734,0.01v3.049c0,0-1.662,0-1.984,0 c-0.324,0-0.783,0.16-0.783,0.854v1.846h2.814L33.809,30.006z" role="presentation" />
      </svg>
    """

  twitter: (color) -> """
      <svg style="width: 100%; height: 100%; display: block" xmlns="http://www.w3.org/2000/svg" class="twitter-icon" viewBox="10 10 40 40" role="img">
         <path fill="#{ if color is 'auto' then '#00aced' else color }" d="M30,12.218c-9.82,0-17.781,7.961-17.781,17.781c0,9.822,7.961,17.783,17.781,17.783 s17.781-7.961,17.781-17.783C47.781,20.179,39.82,12.218,30,12.218z M37.07,26.374c0.008,0.156,0.012,0.312,0.012,0.473 c0,4.82-3.67,10.379-10.381,10.379c-2.061,0-3.977-0.604-5.592-1.639c0.287,0.033,0.576,0.051,0.869,0.051 c1.711,0,3.283-0.582,4.531-1.562c-1.596-0.029-2.943-1.084-3.406-2.533c0.221,0.041,0.449,0.066,0.686,0.066 c0.332,0,0.654-0.047,0.961-0.129c-1.668-0.336-2.928-1.811-2.928-3.576c0-0.016,0-0.031,0-0.047 c0.494,0.273,1.057,0.438,1.654,0.457c-0.979-0.654-1.623-1.771-1.623-3.037c0-0.668,0.18-1.297,0.494-1.834 c1.799,2.207,4.488,3.66,7.52,3.811c-0.062-0.266-0.096-0.543-0.096-0.83c0-2.016,1.635-3.646,3.648-3.646 c1.049,0,1.998,0.441,2.664,1.15c0.83-0.164,1.611-0.467,2.316-0.887c-0.273,0.854-0.852,1.568-1.605,2.02 c0.74-0.088,1.443-0.285,2.096-0.572C38.402,25.218,37.783,25.86,37.07,26.374z" role="presentation" />
      </svg>
  """

window.SocialSharingIcons =
  init: (element, options) ->
    return unless element

    options = extend {}, defaults, options

    htmlString = ''

    for icon in options.icons
      htmlString += """
        <a href="http://#{ icon.account }.com/#{ icon.username }" target="_blank" style="display: inline-block; width: #{ options.size }; height: #{ options.size }">
          #{ SVG[icon.account](options.color) }
        </a>
      """

    element.innerHTML = htmlString
