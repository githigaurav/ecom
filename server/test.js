// dbFile will be determine where and which operation we are doing , 
// we will import 3 files from db userDB, SellerDB, Admin db 
// we will pass db file according requirement





const isExistsSomeone = (email) => {
    //    write a logic here to that we can find user from db and return true/false
}

const addSomeone = (info, dbFile) => {
    //    write a logic here so that we can add user in mongodb & return true/false from this function
}
const updateSomeone = (id) => {
    // write some logic here so that we can update mongodb using unique id which has been received from mongodb and return true/false
}
const deleteSomeone = (id) => {
    // write some logic here to delte user form mongodb and return true / false
}

// for checking  exits or not
isExistsSomeone("check@gmail.com")

// adding 
addSomeone({name:"Mario",email:"mario@quicksell.com",password:"notEncrypted"}, dbFile)

// updating 
updateSomeone({Object_id:"0125sdkjie155d"})

// delete 
deleteSomeone({Object_id:"0125sdkjie155d"})




