(function() {
    // Check if the user is authenticated via sessionStorage
    const auth = sessionStorage.getItem('ironleaf_auth');
    
    // Get the current page name
    const currentPage = window.location.pathname.split('/').pop();
    
    // If not authenticated and not already on the login page, redirect to login.html
    if (auth !== 'true' && currentPage !== 'login.html') {
        window.location.href = 'login.html';
    }
})();
