let name = "supundi"
let email = "supu@gmail.com"
let password = "1234567"
let confirmPassword = "1234567"

if (!name) {
    console.log("name is invalid")
} else {
    console.log(name)

    if (!email) {
        console.log("email is invalid")
    } else {
        console.log(email)

        if (password.length < 8) {
            console.log("wrong password")
        } else {
            console.log("password is ok")

            if (password === confirmPassword) {
                console.log("YOU CAN GO IN")
            } else {
                console.log("wrong password")
            }
        }
    }
}