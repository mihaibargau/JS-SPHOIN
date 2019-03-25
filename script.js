function getInput()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    var method = 'GET';
    var url = 'https://cors.io/?http://54.211.9.51:8000';
    xhr.open(method, url + '/user_login' + '/' + user + '/' + pass + '/');
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.status == 'logged_in')
                alert("You are logged in");
            else 
                 alert("Invalid credentials");
            
        }
    };
}