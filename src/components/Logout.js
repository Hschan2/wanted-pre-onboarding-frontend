const handleLogout = (navigate) => {
    localStorage.removeItem('access_token');
    navigate('/');
    window.location.reload();
};

export default handleLogout;