const tabsBtn = document.querySelectorAll('.section__nav-btn');
const tabsItems = document.querySelectorAll('.section__block')
tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tubId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tubId);
        console.log(tubId);

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        })

        tabsItems.forEach(function(item){
            item.classList.remove('active');
        })
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
});
    
