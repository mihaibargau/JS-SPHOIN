function forgotPassword()
{
    var email = document.getElementById("email").value;
    var xhr = new XMLHttpRequest();
    var method = 'GET';
    var url = 'https://cors.io/?http://54.211.9.51:8000';
    xhr.open(method, url + '/' + 'user_forgot' + '/' + email + '/');
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.status == 'email_pass_recovery_sent')
            alert("Recovery password sent");
            else
            alert("User was not found");
            
        }
    };
}