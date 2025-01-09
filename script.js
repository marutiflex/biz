function showStockListPage() {
    document.getElementById('stock-list-page').style.display = "block";
    document.getElementById('collection-page').style.display = "none";
    CloseMenu();
}

function showCollectionPage() {
    document.getElementById('stock-list-page').style.display = "none";
    document.getElementById('collection-page').style.display = "block";
    CloseMenu();
    var CollectionData = [
        ["LoginAccess", "Party Name", "Group Name", "Sales Executive", "Total due", "Serious Overdue", "Overdue", "This Week due", "Next week Due", "Upcoming Due", "Mobile Number", "Target of the Week", "Collection Against Target", "Collection without target", "Achieved %"],
        ["10069", "ABC Printer & Designer", "Retail", "Rajesh Sharma", 15000, 5000, 3000, 4000, 2000, 1000, 9876543210, 5000, 3000, 2000, "20%"],
        ["10436", "XYZ Enterprise", "Wholesale", "Pooja Verma", 30000, 10000, 5000, 7000, 4000, 3000, 9123456789, 7000, 5000, 3000, "71%"],
        ["10069,10436", "Sunrise Solutions", "Corporate", "Arjun Mehta", 45000, 15000, 10000, 12000, 5000, 3000, 9812345678, 10000, 7000, 5000, "70%"],
        ["10069", "Global Ventures", "SME", "Kavita Das", 20000, 8000, 4000, 5000, 2000, 1000, 9123456700, 6000, 4000, 2000, "66%"],
        ["10436", "Metro Suppliers", "Distributor", "Suman Ghosh", 50000, 20000, 10000, 12000, 5000, 3000, 9012345678, 15000, 10000, 5000, "15%"],
        ["10069,10436", "Alpha Tech", "Retail", "Manish Thakur", 10000, 2000, 2000, 3000, 2000, 1000, 9321456789, 4000, 3000, 1000, "75%"],
        ["10069,10436", "Bright Future", "Wholesale", "Priya Sen", 25000, 5000, 7000, 6000, 5000, 2000, 9876543200, 7000, 5000, 2000, "10%"],
        ["10436", "Apex Systems", "Corporate", "Vikash Gupta", 40000, 12000, 10000, 10000, 5000, 3000, 9123456701, 8000, 6000, 2000, "75%"],
        ["10069,10436", "Zenith Industries", "SME", "Megha Jain", 35000, 10000, 9000, 9000, 4000, 2000, 9812345671, 10000, 8000, 2000, "80%"],
        ["10436", "Nova Traders", "Distributor", "Sunil Malhotra", 30000, 8000, 7000, 8000, 4000, 3000, 9321456701, 9000, 6000, 3000, "66%"],
        ["10069,10436", "Infinity Group", "Retail", "Rohit Singh", 15000, 3000, 2000, 4000, 4000, 2000, 9876543222, 5000, 3000, 2000, "10%"],
        ["10069,10436", "Stellar Enterprises", "Wholesale", "Sneha Roy", 45000, 10000, 10000, 12000, 7000, 6000, 9123456723, 10000, 8000, 2000, "80%"],
        ["10436", "Horizon Limited", "Corporate", "Ajay Reddy", 55000, 20000, 15000, 10000, 6000, 4000, 9812346724, 12000, 9000, 3000, "75%"],
        ["10436", "Atlas Co.", "SME", "Rahul Kapoor", 20000, 6000, 5000, 6000, 3000, 2000, 9012345677, 7000, 5000, 2000, "71%"],
        ["10436", "Ace Corporation", "Distributor", "Nidhi Sharma", 30000, 8000, 7000, 8000, 5000, 4000, 9321456710, 9000, 6000, 3000, "66%"],
        ["10069,10436", "Titan Solutions", "Retail", "Ramesh Bansal", 25000, 5000, 6000, 8000, 4000, 2000, 9876543255, 8000, 6000, 2000, "75%"],
        ["10069,10436", "Prime Ventures", "Wholesale", "Kavita Singh", 30000, 9000, 8000, 9000, 5000, 3000, 9123456744, 9000, 7000, 2000, "77%"],
        ["10069,10436", "Orbit Enterprises", "Corporate", "Kunal Aggarwal", 40000, 12000, 11000, 10000, 6000, 4000, 9812346788, 11000, 9000, 2000, "82%"],
        ["10436", "Phoenix Inc.", "SME", "Preeti Joshi", 20000, 6000, 7000, 5000, 3000, 2000, 9012345676, 6000, 4000, 2000, "66%"],
        ["10436", "Apex Global", "Distributor", "Sanjay Verma", 15000, 3000, 4000, 5000, 2000, 1000, 9321456788, 5000, 3000, 2000, "60%"]
    ];
    var userAccess = document.getElementById('loginidStore').innerHTML;
    var CollectionDataUserfiltered = CollectionData.filter(function (r) {
        return r[0].includes(userAccess);
    });
    var collectiontabs = document.getElementById('collection-tabs');
    var collectiontable = document.getElementById('collection-table');
    collectiontable.innerHTML = "";
    collectiontabs.innerHTML = "";
    for (let cd = 0; cd < CollectionDataUserfiltered.length; cd++) {
        var div = document.createElement('div');
        div.classList.add('tab');
        var h3 = '<h3 onclick="showCollectionofParty()" >' + CollectionDataUserfiltered[cd][1] + ' </h3>';
        var p1 = '<p>' + "Sales Executive : " + CollectionDataUserfiltered[cd][3] + ' </p>'
        var p2 = '<p>' + "Total Due : " + CollectionDataUserfiltered[cd][4] + ' </p>'
        var p3 = '<p>' + "This Week target : " + CollectionDataUserfiltered[cd][11] + ' </p>'
        var p4 = '<p>' + "Ach % : " + CollectionDataUserfiltered[cd][14] + ' </p>'
        var p5 = '<p>' + "Over Due : " + CollectionDataUserfiltered[cd][6] + ' </p>'
        var contentdiv = h3 + p1 + p2 + p3 + p4 + p5
        div.innerHTML = contentdiv;
        collectiontabs.appendChild(div);
        var tr = document.createElement('tr');
        if (cd == 0 || cd == 4 || cd == 6) {
            tr.classList.add('highlights')
        }
        var td1 = `<td onclick="showCollectionofParty('${CollectionDataUserfiltered[cd][1]}')">${CollectionDataUserfiltered[cd][1]}</td>`;
        var td2 = `<td>${CollectionDataUserfiltered[cd][3]}</td>`;
        var td3 = `<td>${CollectionDataUserfiltered[cd][4]}</td>`;
        var td4 = `<td>${CollectionDataUserfiltered[cd][11]}</td>`;
        var td5 = `<td>${CollectionDataUserfiltered[cd][14]}</td>`;
        var td6 = `<td>${CollectionDataUserfiltered[cd][6]}</td>`;
        var contentTr = td1 + td2 + td3 + td4 + td5 + td6;
        tr.innerHTML = contentTr;
        collectiontable.appendChild(tr);
    }
}

function decodeHTML(html) {
    var textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
}

function showCollectionofParty(res) {
    try {

        if (res == undefined) {
            var partyname = document.getElementById('collection-search').value;
        } else {
            var partyname = res;
        }

        var CollectionData = [
            ["LoginAccess", "Party Name", "Group Name", "Sales Executive", "Total due", "Serious Overdue", "Overdue", "This Week due", "Next week Due", "Upcoming Due", "Mobile Number", "Target of the Week", "Collection Against Target", "Collection without target", "Achieved %"],
            ["10069", "ABC Printer & Designer", "Retail", "Rajesh Sharma", 15000, 5000, 3000, 4000, 2000, 1000, 9876543210, 5000, 1000, 2000, "20%"],
            ["10436", "XYZ Enterprise", "Wholesale", "Pooja Verma", 30000, 10000, 5000, 7000, 4000, 3000, 9123456789, 7000, 5000, 3000, "71.43%"],
            ["10069,10436", "Sunrise Solutions", "Corporate", "Arjun Mehta", 45000, 15000, 10000, 12000, 5000, 3000, 9812345678, 10000, 7000, 5000, "70%"],
            ["10069", "Global Ventures", "SME", "Kavita Das", 20000, 8000, 4000, 5000, 2000, 1000, 9123456700, 6000, 4000, 2000, "66.67%"],
            ["10436", "Metro Suppliers", "Distributor", "Suman Ghosh", 50000, 20000, 10000, 12000, 5000, 3000, 9012345678, 15000, 10000, 5000, "66.67%"],
            ["10069,10436", "Alpha Tech", "Retail", "Manish Thakur", 10000, 2000, 2000, 3000, 2000, 1000, 9321456789, 4000, 3000, 1000, "75%"],
            ["10069,10436", "Bright Future", "Wholesale", "Priya Sen", 25000, 5000, 7000, 6000, 5000, 2000, 9876543200, 7000, 700, 2000, "10%"],
            ["10436", "Apex Systems", "Corporate", "Vikash Gupta", 40000, 12000, 10000, 10000, 5000, 3000, 9123456701, 8000, 6000, 2000, "75%"],
            ["10069,10436", "Zenith Industries", "SME", "Megha Jain", 35000, 10000, 9000, 9000, 4000, 2000, 9812345671, 10000, 8000, 2000, "80%"],
            ["10436", "Nova Traders", "Distributor", "Sunil Malhotra", 30000, 8000, 7000, 8000, 4000, 3000, 9321456701, 9000, 6000, 3000, "66.67%"],
            ["10069,10436", "Infinity Group", "Retail", "Rohit Singh", 15000, 3000, 2000, 4000, 4000, 2000, 9876543222, 5000, 500, 2000, "10%"],
            ["10069,10436", "Stellar Enterprises", "Wholesale", "Sneha Roy", 45000, 10000, 10000, 12000, 7000, 6000, 9123456723, 10000, 8000, 2000, "80%"],
            ["10436", "Horizon Limited", "Corporate", "Ajay Reddy", 55000, 20000, 15000, 10000, 6000, 4000, 9812346724, 12000, 9000, 3000, "75%"],
            ["10436", "Atlas Co.", "SME", "Rahul Kapoor", 20000, 6000, 5000, 6000, 3000, 2000, 9012345677, 7000, 5000, 2000, "71.43%"],
            ["10436", "Ace Corporation", "Distributor", "Nidhi Sharma", 30000, 8000, 7000, 8000, 5000, 4000, 9321456710, 9000, 6000, 3000, "66.67%"],
            ["10069,10436", "Titan Solutions", "Retail", "Ramesh Bansal", 25000, 5000, 6000, 8000, 4000, 2000, 9876543255, 8000, 6000, 2000, "75%"],
            ["10069,10436", "Prime Ventures", "Wholesale", "Kavita Singh", 30000, 9000, 8000, 9000, 5000, 3000, 9123456744, 9000, 7000, 2000, "77.78%"],
            ["10069,10436", "Orbit Enterprises", "Corporate", "Kunal Aggarwal", 40000, 12000, 11000, 10000, 6000, 4000, 9812346788, 11000, 9000, 2000, "81.82%"],
            ["10436", "Phoenix Inc.", "SME", "Preeti Joshi", 20000, 6000, 7000, 5000, 3000, 2000, 9012345676, 6000, 4000, 2000, "66.67%"],
            ["10436", "Apex Global", "Distributor", "Sanjay Verma", 15000, 3000, 4000, 5000, 2000, 1000, 9321456788, 5000, 3000, 2000, "60%"]
        ];
        var partyData = CollectionData.filter(function (r) {
            return r[1].toLowerCase().trim() == partyname.toLowerCase().trim();
        })
        document.getElementById('modal-party-name').innerHTML = partyData[0][1];
        document.getElementById('modal-total-due').innerHTML = "Total Due : " + partyData[0][4];
        document.getElementById('modal-serious-overdue').innerHTML = "Serious Overdue : " + partyData[0][5];
        document.getElementById('modal-overdue').innerHTML = "Overdue : " + partyData[0][6];
        document.getElementById('modal-due-this-period').innerHTML = "Due this Period : " + partyData[0][7];
        document.getElementById('modal-due-next-week').innerHTML = "Due Next Week :" + partyData[0][8];
        document.getElementById('modal-upcoming').innerHTML = "Upcoming due : " + partyData[0][9];
        document.getElementById('modal-mobile-number').innerHTML = "Mobile Number : " + partyData[0][10];
        document.getElementById('modal-target-of-the-week').innerHTML = " Target of the Week : " + partyData[0][11];
        document.getElementById('modal-collection-against-target').innerHTML = "Collection Against Target : " + partyData[0][12];
        document.getElementById('modal-collection-without-target').innerHTML = "Collection Without target : " + partyData[0][13];
        document.getElementById('modal-Ach').innerHTML = " Ach % : " + partyData[0][14];
        var anchortag = `<a href="#" class="invoice-details" onclick="showInvoiceTable('${partyname.toLowerCase().trim()}')">See Inoice Wise details</a>`;
        document.getElementById('invoiceDetails').innerHTML = anchortag;
        document.getElementById('info-modal').classList.remove('hidden');
    }
    catch {
    }
}
document.getElementById('category-dropdown').addEventListener('input', function () {
    filterStockList();
});

document.getElementById('stock-search').addEventListener('input', function () {
    filterStockList();
});

function filterStockList() {
    const category = document.getElementById('category-dropdown').value.toLowerCase();
    const searchText = document.getElementById('stock-search').value.toLowerCase();
    const tableRows = document.querySelectorAll('#stock-list-table tr');

    tableRows.forEach(function (row) {
        const categoryCell = row.cells[0].textContent.toLowerCase();
        const descriptionCell = row.cells[1].textContent.toLowerCase();

        if ((category === 'all' || categoryCell.includes(category)) && descriptionCell.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
document.getElementById('collection-search').addEventListener('input', function () {
    filterCollection();
});

function filterCollection() {
    const searchText = document.getElementById('collection-search').value.toLowerCase();
    const tableRows = document.querySelectorAll('#collection-table tr');
    tableRows.forEach(function (row) {
        const partyNameCell = row.cells[0].textContent.toLowerCase();
        if (partyNameCell.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    const tabs = document.querySelectorAll('#collection-tabs .tab');
    tabs.forEach(function (tab) {
        const partyName = tab.querySelector('h3').textContent.toLowerCase();
        if (partyName.includes(searchText)) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

function loginPage() {
    var login = document.getElementById('login-id').value;
    var pass = document.getElementById('password').value;

    if (login === '10069' && pass === '1242') {
        document.getElementById('loginidStore').innerHTML = login;
        document.getElementsByClassName('collection-details-modal-box')[0].style.display = 'block';
        var loginPage = document.getElementById('login-page');
        loginPage.style.display = 'none';

        var head = document.getElementById('header');
        head.classList.remove('hidden')

        var page = document.getElementById('container');
        page.removeAttribute('hidden');

        var table = document.getElementById('stock-list-page');
        if (table.style.display === 'block') {
            table.style.display = 'none';
        } else {
            table.style.display = 'block';
        }
    } else {
        alert('error')
    }

}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
})

function closeModal() {
    document.getElementById('info-modal').classList.add('hidden')
}

// ---------------------- Show bill wise tablle -----------------------
function showInvoiceTable(partyName) {
    console.log(partyName);
    var invoicewiseTable = document.getElementsByClassName('bill-wise-details-modal')[0];
    invoicewiseTable.style.display = 'block';
    var datainvwise = [
        ['Emp ID', 'Sales Executive', 'Date', 'Invoice No', 'Party Name', 'Group Name', 'Invoice Value', 'Receipt', 'Pending Value'],
        ['101', 'Alice Johnson', '2023-12-01', 'INV001', 'Titan Solutions', 'Group X', 1200, 1000, 200],
        ['102', 'Bob Smith', '2023-12-02', 'INV002', 'Titan Solutions', 'Group Y', 1500, 0, 1500],
        ['103', 'Charlie Brown', '2023-12-03', 'INV003', 'Titan Solutions', 'Group Z', 1800, 0, 1800],
        ['104', 'Diana Prince', '2023-12-04', 'INV004', 'Titan Solutions', 'Group X', 2200, 0, 2200],
        ['105', 'Ethan Hunt', '2023-12-05', 'INV005', 'XYZ Ltd.', 'Group Y', 1300, 1200, 100],
        ['106', 'Fiona Clark', '2023-12-06', 'INV006', 'XYZ Ltd.', 'Group Z', 1900, 1800, 100],
        ['107', 'George Miller', '2023-12-07', 'INV007', 'XYZ Ltd.', 'Group X', 2100, 2000, 100],
        ['108', 'Hannah Davis', '2023-12-08', 'INV008', 'XYZ Ltd.', 'Group Y', 1700, 1600, 100],
        ['109', 'Ian Carter', '2023-12-09', 'INV009', 'LMN Enterprises', 'Group Z', 2400, 2300, 100],
        ['110', 'Jack Wilson', '2023-12-10', 'INV010', 'LMN Enterprises', 'Group X', 1500, 1400, 100],
        ['111', 'Karen Lee', '2023-12-11', 'INV011', 'LMN Enterprises', 'Group Y', 2000, 1800, 200],
        ['112', 'Liam Scott', '2023-12-12', 'INV012', 'LMN Enterprises', 'Group Z', 1800, 1700, 100],
        ['113', 'Mia Taylor', '2023-12-13', 'INV013', 'PQR Group', 'Group X', 2100, 1900, 200],
        ['114', 'Nathan Moore', '2023-12-14', 'INV014', 'PQR Group', 'Group Y', 2500, 2400, 100],
        ['115', 'Olivia White', '2023-12-15', 'INV015', 'PQR Group', 'Group Z', 1600, 1500, 100],
        ['101', 'Alice Johnson', '2023-12-01', 'INV001', 'ABC Corporation', 'Group X', 1200, 0, 1200],
        ['102', 'Bob Smith', '2023-12-02', 'INV002', 'ABC Corporation', 'Group Y', 1500, 1400, 100],
        ['103', 'Charlie Brown', '2023-12-03', 'INV003', 'ABC Corporation', 'Group Z', 1800, 1700, 100],
        ['104', 'Diana Prince', '2023-12-04', 'INV004', 'ABC Corporation', 'Group X', 2200, 2000, 200],
        ['105', 'Ethan Hunt', '2023-12-05', 'INV005', 'XYZ Ltd.', 'Group Y', 1300, 1200, 100],
        ['106', 'Fiona Clark', '2023-12-06', 'INV006', 'XYZ Ltd.', 'Group Z', 1900, 1800, 100],
        ['107', 'George Miller', '2023-12-07', 'INV007', 'XYZ Ltd.', 'Group X', 2100, 2000, 100],
        ['108', 'Hannah Davis', '2023-12-08', 'INV008', 'XYZ Ltd.', 'Group Y', 1700, 1600, 100],
        ['109', 'Ian Carter', '2023-12-09', 'INV009', 'LMN Enterprises', 'Group Z', 2400, 2300, 100],
        ['110', 'Jack Wilson', '2023-12-10', 'INV010', 'LMN Enterprises', 'Group X', 1500, 1400, 100],
        ['111', 'Karen Lee', '2023-12-11', 'INV011', 'LMN Enterprises', 'Group Y', 2000, 1800, 200],
        ['112', 'Liam Scott', '2023-12-12', 'INV012', 'LMN Enterprises', 'Group Z', 1800, 1700, 100],
        ['113', 'Mia Taylor', '2023-12-13', 'INV013', 'PQR Group', 'Group X', 2100, 1900, 200],
        ['114', 'Nathan Moore', '2023-12-14', 'INV014', 'PQR Group', 'Group Y', 2500, 2400, 100],
        ['115', 'Olivia White', '2023-12-15', 'INV015', 'PQR Group', 'Group Z', 1600, 1500, 100]
    ]
    var filteredData = datainvwise.filter(function (r) {
        return r[4].toLowerCase().trim() == partyName.toLowerCase().trim();
    })
    console.log(filteredData);
    var tableBillwise = document.getElementsByClassName('bill-wise-data')[0].getElementsByTagName('tbody')[0];
    tableBillwise.innerHTML = '';
    for (let i = 0; i < filteredData.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');

        td1.innerHTML = filteredData[i][2];
        td2.innerHTML = filteredData[i][3];
        td3.innerHTML = filteredData[i][4];
        td4.innerHTML = filteredData[i][5];
        td5.innerHTML = filteredData[i][6];
        td6.innerHTML = filteredData[i][7];
        td7.innerHTML = filteredData[i][8];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        tableBillwise.appendChild(tr)

    }
};

function CloseInvoiceTable() {
    var invoicewiseTable = document.getElementsByClassName('bill-wise-details-modal')[0];
    invoicewiseTable.style.display = 'none'
};

function close_collection_details_modal() {
    document.getElementsByClassName('collection-details-modal-box')[0].style.display = 'none';
};

document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key.toLowerCase() === 'b') { // Check for Alt+F
        CloseMenu();
        OpenMenu();
    } else {
        if (event.altKey && event.key.toLowerCase() === 'a') {
            CloseMenu();
            OpenMenuAnalysisMenu();
        }
    }
    if (event.altKey && event.key.toLowerCase() === 'i') {
        var cccc = document.getElementById('category-dropdown');
        cccc.value = '';
        cccc.focus();
        filterStockList();
        CloseMenu();
    }
    if (event.altKey && event.key.toLowerCase() === 'd') {
        var cccc = document.getElementById('stock-search');
        cccc.value = '';
        cccc.focus();
        filterStockList();
        CloseMenu();
    }
    if (event.key === 'Escape') { // Check if the 'Esc' key is pressed
        document.getElementById('info-modal').classList.add('hidden');
        var invoicewiseTable = document.getElementsByClassName('bill-wise-details-modal')[0];
        invoicewiseTable.style.display = 'none';
        document.getElementsByClassName('collection-details-modal-box')[0].style.display = 'none';
        CloseMenu();
        LogoutRejected();
    }
    if (event.altKey && event.key.toLowerCase() === 's') { // Check for Alt+S
        document.getElementById('stock-list-page').style.display = '';
        document.getElementById('collection-page').style.display = 'none';
        CloseMenu();
    }
    if (event.altKey && event.key.toLowerCase() === 'l') {

        var StockStyle = window.getComputedStyle(document.getElementById('stock-list-page')).display;
        if (StockStyle !== "none") {
            var cccc = document.getElementById('stock-search');
            cccc.focus();
            cccc.value = '';
            filterStockList();
        }
        var collectionStyle = window.getComputedStyle(document.getElementById('collection-page')).display;
        if (collectionStyle !== "none") {
            document.getElementById('collection-search').focus();
            document.getElementById('collection-search').value = '';
            CloseMenu();
            filterCollection();
        }
    }
    if (event.altKey && event.key.toLowerCase() === 'c') { // Check for Alt+C
        showCollectionPage();
        CloseMenu();
    }
    if (event.altKey && event.key === "Delete") {
        lououtOption();
        CloseMenu();
    }

});

function CloseMenu() {
    document.getElementsByClassName('branches')[0].getElementsByTagName('ul')[0].style.top = '-110vh';
    document.getElementsByClassName('branches')[0].getElementsByTagName('ul')[1].style.top = '-110vh';
}
function OpenMenu() {
    var branches = document.getElementsByClassName('branches')[0].getElementsByTagName('ul')[0];
    branches.style.top = '-30px';
}
function OpenMenuAnalysisMenu() {
    var branches = document.getElementsByClassName('branches')[0].getElementsByTagName('ul')[1];
    branches.style.top = '-30px';
}
function migrateDatabase(branch) {
    document.getElementById('currentBranch').innerHTML = branch;
    CloseMenu();
}
function lououtOption() {
    var lououtPage = document.getElementById('louout-page');
    lououtPage.style.display = '';
}
function LogoutRejected() {
    var lououtPage = document.getElementById('louout-page');
    lououtPage.style.display = 'none';
}
function LogoutAggreed() {
    var lououtPage = document.getElementById('louout-page');
    lououtPage.style.display = 'none';

    document.getElementById('loginidStore').innerHTML = '';

    document.getElementsByClassName('collection-details-modal-box')[0].style.display = 'none';
    var loginPage = document.getElementById('login-page');
    loginPage.style.display = 'flex';

    var head = document.getElementById('header');
    head.classList.add('hidden')

    var page = document.getElementById('container');
    page.setAttribute('hidden', true);

    var table = document.getElementById('stock-list-page');
    if (table.style.display === 'block') {
        table.style.display = 'none';
    } else {
        table.style.display = 'block';
    }
}