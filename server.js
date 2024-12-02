const express = require('express');
const bodyParser = require('body-parser');
const nodeCron = require('node-cron');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const { updateOrderStatus } = require('./utils/statusUpdater');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Schedule status update
nodeCron.schedule('*/1 * * * *', updateOrderStatus);
