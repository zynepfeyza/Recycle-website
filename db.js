import mongoose from "mongoose"

const conn = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName: "geriDonusum",
    }).then(() => {
        console.log('Veritabanı bağlantısı başarılı.')
    }).catch((err) =>{
        console.log('Veritabanı bağlantısı başarısız.' + err)
    });
};

export default conn;