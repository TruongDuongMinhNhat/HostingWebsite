var getNoticeMenu = document.getElementsByClassName('notice-menu')[0];
var getNoticeDropdown = document.getElementsByClassName('notice-dropdown')[0];

var getLinkMenu = document.getElementsByClassName('link-menu')[0];
var getLinkDropdown = document.getElementsByClassName('link-dropdown')[0];

var getAccountMenu = document.getElementsByClassName('account-menu')[0];
var getAccountDropdown = document.getElementsByClassName('account-dropdown')[0];

getNoticeMenu.addEventListener('click', function(e) {
    if(getNoticeDropdown.style.display != 'block'){
        getNoticeDropdown.style.display = 'block';
        getLinkDropdown.style.display = 'none';
        getAccountDropdown.style.display = 'none';
    } else {
        getNoticeDropdown.style.display = 'none'
    }
})

getLinkMenu.addEventListener('click', function(e) {
    if(getLinkDropdown.style.display != 'block'){
        getNoticeDropdown.style.display = 'none';
        getLinkDropdown.style.display = 'block';
        getAccountDropdown.style.display = 'none';
    } else {
        getLinkDropdown.style.display = 'none';
    }
})

getAccountMenu.addEventListener('click', function(e) {
    if(getAccountDropdown.style.display != 'block'){
        getNoticeDropdown.style.display = 'none';
        getLinkDropdown.style.display = 'none';
        getAccountDropdown.style.display = 'block';
    } else {
        getAccountDropdown.style.display = 'none'
    }
})