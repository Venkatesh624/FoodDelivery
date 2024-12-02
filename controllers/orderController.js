const orders = [];
let orderIdCounter = 1;

const placeOrder = (req, res) => {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'Invalid order details' });
    }

    const newOrder = {
        id: orderIdCounter++,
        items,
        status: 'Preparing',
        createdAt: new Date(),
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
};

const getOrder = (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id));
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
};

module.exports = { placeOrder, getOrder };
