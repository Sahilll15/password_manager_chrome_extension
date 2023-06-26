document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('passwordForm');
    form.addEventListener('submit', savePassword);
    displayPasswords();
});

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
        const passwordInput = document.getElementById('password')
        if (checkbox.checked) {
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordInput.setAttribute('type', 'password');
        }

    })
});


function savePassword(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Save the password using Chrome storage API
    localStorage.getItem('passwords', function (data) {
        var passwords = data.passwords || [];
        passwords.push({ username: username, password: password });
        localStorage.setItem({ passwords: passwords }, function () {
            displayPasswords();
            clearForm();
        });
    });
}

function displayPasswords() {
    var passwordList = document.getElementById('passwordList');


    localStorage.getItem('passwords', function (data) {
        var passwords = data.passwords || [];
        passwordList.innerHTML = '';

        for (var i = 0; i < passwords.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Username: ' + passwords[i].username + ', Password: ' + passwords[i].password;
            passwordList.appendChild(listItem);
        }
    });
}




function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
