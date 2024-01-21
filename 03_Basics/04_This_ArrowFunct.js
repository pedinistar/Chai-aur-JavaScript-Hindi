const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function(){
    console.log(this);
    console.log(`${this.username} welcome to website`);
  }
}

console.log(this);  // empty
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// jab bhi current context chiye tb this use kre