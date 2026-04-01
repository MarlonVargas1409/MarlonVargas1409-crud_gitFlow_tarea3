const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ DB Supermercado Online');
    } catch (error) { console.log(error); throw new Error('Error DB'); }
};
module.exports = { dbConnection };