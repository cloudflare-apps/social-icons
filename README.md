## Social Icons
> SVG social icons for your website

### Eager app store
[Install Social Icons](https://eager.io/app/social-icons/install) on the [Eager App Store](http://eager.io).


### Manual include
```HTML
<script src="social-icons.min.js"></script>
```

### Example usage

```javascript
SocialIcons.init({
  element: document.querySelector('.social-icons'),
  icons: {
    facebook: {
      enabled: true,
      username: "adam.flynn.schwartz"
    },
    twitter: {
      enabled: true,
      username: "adamfschwartz"
    },
    github: {
      enabled: true,
      username: "adamschwartz"
    }
  },
  color: '#70c2b5'
});
```

__[Demo](https://rawgit.com/EagerIO/SocialIcons/master/example.html)__
