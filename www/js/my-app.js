var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My Test App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/about/',
        url: './pages/about.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');