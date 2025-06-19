function OpenloginInfoMenu() {
    var menu = document.getElementsByClassName('login-info-menu')[0];
    var barMenu = document.getElementsByClassName('fa-bars')[0];
    var Sc_width = menu.style.left;
    if (Sc_width === '-250px') {
        menu.style.left = '0px';
        barMenu.style.color = 'gray';
        document.getElementsByClassName('filter-container')[0].style.right = '-250px';
        document.getElementsByClassName('fa-filter')[0].style.color = '#008cff';
    } else {
        menu.style.left = '-250px';
        barMenu.style.color = '#008cff';
    }
}
function OpenFilter() {
    var menu = document.getElementsByClassName('filter-container')[0];
    var barMenu = document.getElementsByClassName('fa-filter')[0];
    var Sc_width = menu.style.right;
    if (Sc_width === '-250px') {
        menu.style.right = '0px';
        document.getElementsByClassName('login-info-menu')[0].style.left = '-250px';
        document.getElementsByClassName('fa-bars')[0].style.color = '#008cff';
        barMenu.style.color = 'gray';
    } else {
        menu.style.right = '-250px';
        barMenu.style.color = '#008cff';
    }
}
function FetchData() {
    const icon = document.getElementsByClassName('fa-rotate')[0];
    if (!icon) return;

    icon.style.transition = 'transform 0.5s linear';
    let angle = 0;

    const rotateInterval = setInterval(() => {
        angle += 45;
        icon.style.transform = `rotate(${angle}deg)`;
    }, 100);

    setTimeout(() => {
        clearInterval(rotateInterval);
        icon.style.transform = '';
    }, 5000);
}

function NavPages(page) {
    var planning = document.getElementById('planning-page');
    var history = document.getElementById('history-page');
    planning.style.display = 'none';
    history.style.display = 'none';

    var planing_menu = document.getElementById('planning-page_menu_nav');
    var history_menu = document.getElementById('history-page_menu_nav');
    planing_menu.classList.remove('active');
    history_menu.classList.remove('active');

    var planning_filter = document.getElementById('planning-page-filter');
    var history_filter = document.getElementById('history-page-filter');
    planning_filter.style.display = 'none';
    history_filter.style.display = 'none';

    document.getElementsByClassName('login-info-menu')[0].style.left = '-250px';
    document.getElementsByClassName('fa-bars')[0].style.color = '#008cff';
    document.getElementsByClassName('filter-container')[0].style.right = '-250px';
    document.getElementsByClassName('fa-filter')[0].style.color = '#008cff';

    document.getElementById(page).style.display = '';
    document.getElementById(page + '_menu_nav').classList.add('active');
    document.getElementById(page + '-filter').style.display = '';
    if (page == "planning-page") {
        var name = 'Planning Report'
    } else {
        var name = 'History Report'
    }
    document.getElementById('pageName').innerHTML = name;
}
function closeModal() {
    document.getElementsByClassName('modal-Box')[0].style.left = '-100dvh';
    document.getElementsByClassName('modal-Box')[1].style.left = '-100dvh';
}
function openModalPendinginfo(partyName) {
    document.getElementsByClassName('modal-Box')[0].style.left = '0';
}
function updateForm(trackingId) {
    document.getElementsByClassName('modal-Box')[1].style.left = '0';
}


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var userID = document.getElementById('userID').value;
    var password = document.getElementById('password').value;
    if (userID == '10069' && password == '1242') {
        document.getElementsByClassName('login-Container')[0].style.display = 'none'
        document.getElementsByTagName('main')[0].style.display = '';
        NavPages('planning-page');
    } else {
        document.getElementById('login-Message').style.display = '';
    }
})
