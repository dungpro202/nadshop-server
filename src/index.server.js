const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const initialData = require('./routes/admin/initialData')
const pageRoutes = require('./routes/admin/page')
const addressRoutes = require('./routes/address')
const orderRoutes = require("./routes/order");
const orderadminRoutes = require("./routes/admin/order.routes");
const accountRoutes = require("./routes/admin/account.routes");
const supplierRoutes = require("./routes/admin/supplier");
const receiptRoutes = require("./routes/admin/receipt");

//bien moi truong
env.config();

// mongodb+srv://root:<password>@cluster-ecommerce.o4xgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//connect mongoose
mongoose.connect(
    // 'mongodb://localhost:27017/dbtest',
    'mongodb+srv://root:!23456@cluster-ecommerce.o4xgo.mongodb.net/WEBSITE-ECOMMERCE?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(() => {
    console.log('Database connected')
});


// phần mềm trung gian để hiểu post lên json
//cors knoi front end vs back end
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialData);
app.use('/api', pageRoutes);
app.use('/api', addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", orderadminRoutes);
app.use("/api", accountRoutes);
app.use("/api", supplierRoutes);
app.use("/api", receiptRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})