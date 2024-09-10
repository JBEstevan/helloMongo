const mongoose = require ("mongoose")

const mongoDB = "mongodb+srv://jbeestevan:<db_password>@cluster0.28ovm.mongodb.net/"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(res => console.log("Conectado com sucesso!"))
    .catch(err => console.log(err))

module.exports = mongoose;