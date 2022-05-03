fetch('http://localhost:3000/menu')
  .then(resp => resp.json())
  .then(data => {
    window.homeUrlLocal = data.local.homeUrl
    window.checkoutUrlLocal = data.local.checkoutUrl
    window.searchUrlLocal = data.local.searchUrl

    window.homeUrlGithub = data.github.homeUrl
    window.checkoutUrlGithub = data.github.checkoutUrl
    window.searchUrlGithub = data.github.searchUrl

    window.homeUrlVercel = data.vercel.homeUrl
    window.checkoutUrlVercel = data.vercel.checkoutUrl
    window.searchUrlVercel = data.vercel.searchUrl

    import('./SearchPage')
  })
