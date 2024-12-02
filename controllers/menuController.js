const menu = [];
const categories = ['Starter', 'Main Course', 'Dessert', 'Beverages'];

const addMenuItem = (req, res) => {
    const { name, price, category } = req.body;
    if (!name || price <= 0 || !categories.includes(category)) {
        return res.status(400).json({ error: 'Invalid menu item details' });
    }
    const newItem = { id: menu.length + 1, name, price, category };
    menu.push(newItem);
    res.status(201).json(newItem);
};

const getMenu = (req, res) => {
    res.status(200).json(menu);
};

module.exports = { addMenuItem, getMenu };
