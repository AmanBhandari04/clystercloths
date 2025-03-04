import mongoose from "mongoose"


const Db_connect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.DB_URL}/clystercloth`)
        console.log(`This server connect on mongodb dta base `)
    } catch (error) {
        console.log(error)
    }
}

export default Db_connect;