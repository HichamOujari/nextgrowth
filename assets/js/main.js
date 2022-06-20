let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]



function adduser() {
    let lastId = Math.max(...users.map(ele => parseInt(ele.id.toString())))
    let data = {
        id: lastId + 1,
        firstName: document.getElementById('firstNameId').value,
        lastName: document.getElementById('lastNameId').value,
        status: document.getElementById('statusId').value,
        username: document.getElementById('usernameId').value,
        createdDate: document.getElementById('createdDateId').value,
        registrationNumber: document.getElementById('registrationNumberId').value
    }

    for (const ele of Object.keys(data)) {
        if (data[ele].length == 0) {
            alert('Il faut remplir tous les champs')
            return null;
        }
    }
    users.push(data);
    playData();
    showForm(false)
}

function playData() {
    var tBody = document.getElementById('tBodyId');
    tBody.innerHTML = '';
    users.forEach(ele => {
        var tr = document.createElement('tr');

        var idTd = document.createElement('td');
        idTd.innerHTML = ele.id
        tr.appendChild(idTd);
        
        var createdDateTd = document.createElement('td');
        createdDateTd.innerHTML = (new Date(ele.createdDate)).toLocaleDateString('en-GB');
        tr.appendChild(createdDateTd);

        var statusTd = document.createElement('td');
        var text = document.createElement('p');
        text.innerHTML = ele.status;
        if(ele.status == 'En validation') text.className = 'on-validation';
        else if (ele.status == 'Validé') text.className = 'valide';
        else text.className = 'rejected';
        statusTd.appendChild(text)
        tr.appendChild(statusTd);

        var lastNameTd = document.createElement('td');
        lastNameTd.innerHTML = ele.lastName
        tr.appendChild(lastNameTd);

        var firstNameTd = document.createElement('td');
        firstNameTd.innerHTML = ele.firstName
        tr.appendChild(firstNameTd);
        

        var userNameTd = document.createElement('td');
        userNameTd.innerHTML = ele.userName
        tr.appendChild(userNameTd);
        
        var registrationNumberTd = document.createElement('td');
        registrationNumberTd.innerHTML = ele.registrationNumber
        tr.appendChild(registrationNumberTd);

        var deleteUserTd = document.createElement('td');
        deleteUserTd.innerHTML = '<i class="bi bi-trash"></i>'
        deleteUserTd.onclick = () => deleteUserById(ele.id);
        tr.appendChild(deleteUserTd);

        tBody.appendChild(tr);
    })
}

function deleteUserById(id) {
    users = users.filter(user => user.id != id);
    playData();
}

function showForm(etat) {
    if (etat == true) document.getElementById('addUserFormId').style.display = 'flex';
    else document.getElementById('addUserFormId').style.display = 'none';
}


playData();