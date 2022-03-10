// making classes

class User {
  username = "admin";
  mail = "admin.cc";
  avatar = "img_avatar.png";

  constructor(role) {
    this.role = role;
  }

  loggedIn() {
    if ((this.role = "admin")) {
      return true;
    }
    return false;
  }
}

// extend class
class Admin extends User {
  constructor(role) {
    super(role);
  }

  isAdmin() {
    if (super.loggedIn()) {
      return "Hello admin";
    }
    return " Hello user";
  }
}
 let usery = new User('admin');
 console.log(usery);
let adm = new Admin("moderator");
console.log(adm.isAdmin());

let first = document.querySelector('.firstinp');
let second = document.querySelector('.secinp');
let rowy = document.querySelector('.rowy');
let butty = document.querySelector('.btn-warning');
let img = document.querySelector('.sur');
let par = document.querySelector('.par');

console.log(first.value);
console.log(usery.avatar);

butty.addEventListener('click', function(){
     if(first.value == usery.username && second.value == usery.mail){
         rowy.classList.remove('rowy');
         rowy.classList.add('lish');
         img.classList.add('show');
         img.setAttribute("src", usery.avatar);
         par.textContent = adm.isAdmin();
    }
    
})

