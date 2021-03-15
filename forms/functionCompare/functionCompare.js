function comparePassword(pass1, pass2) {
  if (pass1 == pass2) {
    console.log("The passwords are the same.")
  } else {
    console.log("The passwords are not the same.")
  }
}

let password = prompt("Enter your password")
let confirm = prompt("Confirm your password")
let passwordComparison = comparePassword(password, confirm)