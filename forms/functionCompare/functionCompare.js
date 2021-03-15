function compare(pass1, pass2) {
  return pass1.localeCompare(pass2) // This will return a -1, 0 or 1
}
  
let password = prompt("Enter your password")
let confirm = prompt("Confirm your password")

let binaryResult = compare(password, confirm)

if (binaryResult == 0)
  console.log('The passwords are the same.')
else
  console.log('The passwords are not the same.')