## Social Icons
> SVG social icons for your website

### Cloudflare Apps
[Install Social Icons](https://cloudflareapps.com/apps/social-icons/install)

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
