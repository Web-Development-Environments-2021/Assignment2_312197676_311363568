function registerValidation(username,password,fullname,email,birthday) {
    rules = {
        password_rule1: /[a-zA-Z]/,
        password_rule2: /\d/,
        password_length: 6,
        fullname: /\d/
    };
    var username = $(username).val();
    var password = $(password).val();
    var fullname = $(fullname).val();
    var email = $(email).val();
    var birthday = $(birthday).val();

    if (username == '' || password == '' || fullname == '' || email == '' || birthday == ''){
        alert("All field are required.");
        return false;
    }

    if (!(this.rules.password_rule1.test(password) && this.rules.password_rule2.test(password))) {
        alert("Password should include at least 1 char and 1 digit.")
        return false;
    }
    if(password.length < this.rules.password_length) {
        alert("Password should include at least 6 chars.")
        return false;
    }
    if(this.rules.fullname.test(fullname)){
        alert("Fullname shouldn't include numbers.")
        return false
    }

    if(!(email.includes("@") && email.includes("."))) {
        alert('Invalid email');
        return false
    }
    return true
}

function addUser(username,password,fullname,email,birthday){
    var username = $(username).val();
    var password = $(password).val();
    var fullname = $(fullname).val();
    var email = $(email).val();
    var birthday = $(birthday).val();

    if (username in user_dic){
        alert("Username already exists in the system.")
        return false
    }

    user_dic[username] = [password, fullname, email, birthday];
    alert("Registration succeeded.");
    return null;
}

function register(){
    var register_div = document.createElement("DIV");
    register_div.id = "register";
    active_divs.push(register_div);

    var register_form_ul = document.createElement("UL");
    register_form_ul.id= "register_form_ul";

    register_div.appendChild(register_form_ul);

    document.getElementById("content").appendChild(register_div);

    var username_label = document.createElement("LABEL");
    username_label.for = "username"
    username_label.textContent = "Username:"

    var password_label = document.createElement("LABEL");
    password_label.for = "password"
    password_label.textContent = "Password:"

    var name_label = document.createElement("LABEL");
    name_label.for = "fullname"
    name_label.textContent = "FullName:"

    var email_label = document.createElement("LABEL");
    email_label.for = "email"
    email_label.textContent = "Email:"

    var birthday_label = document.createElement("LABEL");
    birthday_label.for = "birthday"
    birthday_label.textContent = "Birthday:"

    var username_input = document.createElement("INPUT");
    username_input.id = "username";
    username_input.name = "username";
    username_input.placeholder = "Your username.."
    username_input.type = "text";

    var password_input = document.createElement("INPUT");
    password_input.id = "password";
    password_input.name = "password";
    password_input.placeholder = "Your password.."
    password_input.type = "password";

    var name_input = document.createElement("INPUT");
    name_input.id = "fullname";
    name_input.name = "fullname";
    name_input.placeholder = "Your full name.."
    name_input.type = "text";

    var email_input = document.createElement("INPUT");
    email_input.id = "email";
    email_input.name = "email";
    email_input.placeholder = "Your email.."
    email_input.type = "text";

    var birthday_input = document.createElement("INPUT");
    birthday_input.id = "birthday";
    birthday_input.name = "birthday";
    birthday_input.type = "date";

    var confirm = document.createElement("button");
    confirm.innerHTML = "Confirm";
    confirm.addEventListener("click",function(){
        var valid = registerValidation('#username','#password','#fullname','#email','#birthday');
        if (valid){
            addUser('#username','#password','#fullname','#email','#birthday');
            clearPage();
            wellcome();
        }
    })

    var username_li = document.createElement("LI");
    username_li.appendChild(username_label);
    username_li.appendChild(username_input);

    var password_li = document.createElement("LI");
    password_li.appendChild(password_label);
    password_li.appendChild(password_input);

    var name_li = document.createElement("LI");
    name_li.appendChild(name_label);
    name_li.appendChild(name_input);

    var email_li = document.createElement("LI");
    email_li.appendChild(email_label);
    email_li.appendChild(email_input);

    var birthday_li = document.createElement("LI");
    birthday_li.appendChild(birthday_label);
    birthday_li.appendChild(birthday_input);

    var confirm_li = document.createElement("LI");
    confirm_li.appendChild(confirm)

    document.getElementById("register_form_ul").appendChild(username_li);
    document.getElementById("register_form_ul").appendChild(password_li);
    document.getElementById("register_form_ul").appendChild(name_li);
    document.getElementById("register_form_ul").appendChild(email_li);
    document.getElementById("register_form_ul").appendChild(birthday_li);
    document.getElementById("register_form_ul").appendChild(confirm_li);


    var back_button_li = document.createElement('LI');
    var back_button = document.createElement("button");
    back_button.innerHTML = "Back";
    back_button.addEventListener ("click", function() {
        document.getElementById("register_form_ul").remove();
        active_divs = [];
        wellcome();
    });

    back_button_li.appendChild(back_button);
    document.getElementById("register_form_ul").appendChild(back_button_li);
}