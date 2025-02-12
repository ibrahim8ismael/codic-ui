// just for preview purposes to show the dropdown
document.addEventListener('DOMContentLoaded', function() {
    const megaMenuButton = document.getElementById('mega-menu-button');
    const megaMenu = document.getElementById('mega-menu');
    
    // Show menu on hover
    megaMenuButton.addEventListener('mouseenter', () => {
        megaMenu.classList.remove('hidden');
    });
    
    // Create a parent container to handle mouse leave
    const menuContainer = megaMenuButton.parentElement;
    menuContainer.addEventListener('mouseleave', () => {
        megaMenu.classList.add('hidden');
    });
    
    // Also show menu when hovering over the menu itself
    megaMenu.addEventListener('mouseenter', () => {
        megaMenu.classList.remove('hidden');
    });
});