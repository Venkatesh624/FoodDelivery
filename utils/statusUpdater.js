const orders = require('../controllers/orderController').orders;

const updateOrderStatus = () => {
    orders.forEach(order => {
        if (order.status === 'Preparing') {
            order.status = 'Out for Delivery';
        } else if (order.status === 'Out for Delivery') {
            order.status = 'Delivered';
        }
    });
    console.log('Order statuses updated.');
};

module.exports = { updateOrderStatus };
