var getListItems = document.getElementsByClassName('list-items');
var getListItemsDiv = document.getElementsByClassName('list-items--js');
var getMenuItemDropDown = document.getElementsByClassName('menu-items--js');

for(var i = 0; i < getListItemsDiv.length; i++){
    (function(index){
        getListItemsDiv[index].addEventListener('click', function(e){
            if(getMenuItemDropDown[index].style.display != 'block'){
                getMenuItemDropDown[index].style.display = 'block';
            } else {
                getMenuItemDropDown[index].style.display = 'none';
            }
        })
    }(i))
}

/* Menu Cấp 2 */
var getDashboardItemsTitle = document.getElementsByClassName('dashboard-items-title');
var getMenuItems2 = document.getElementsByClassName('menu-items-2--js');

for(var i = 0; i < getDashboardItemsTitle.length; i++){
    (function(index){
        getDashboardItemsTitle[index].addEventListener('click', function(e){
            if(getMenuItems2[index].style.display != 'block'){
                getMenuItems2[index].style.display = 'block'
            } else {
                getMenuItems2[index].style.display = 'none'
            }
        })
    }(i))
}