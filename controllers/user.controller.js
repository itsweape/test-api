const {v4: uuidv4} = require("uuid");

let users = [
    {
        id: uuidv4(), 
        name: 'Abi', 
        email: 'abi@example.com', 
        age: 23
    },
    {
        id: uuidv4(), 
        name: 'Bibi', 
        email: 'bibi@example.com', 
        age: 23
    },
];

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Succsess",
    });
});

// GET all user
exports.getUsers = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "List of users",
        data: users,
    });
};

// GET user by id
exports.getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id == id);

    if (!user) {
        return res.status(404).json({
        status: 404,
        message: "User not found",
        });
    }

    res.status(200).json({
        status: 200,
        message: "User found",
        data: user,
    });
};

// POST user
exports.createUser = (req, res) => {
    const {name, email, age} = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({
            status: 400,
            message: "Field name, email, dan age must be filled in",
        });
    }

    const newUser = {id: uuidv4(), name, email, age};
    users.push(newUser);

    res.status(201).json({
        status: 201,
        message: "User created",
        data: newUser,
    });
};

// PUT user
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const {name, email, age} = req.body;

    const index = users.findIndex((u) => u.id == id);
    if (index == -1) {
        return res.status(404).json({
            status: 404,
            message: "User not found",
        });
    }

    users[index] = { ...users[index], name, email, age };

    res.status(200).json({
        status: 200,
        message: "User updated",
        data: users[index],
    });
};

// DELETE user
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((u) => u.id == id);

    if (index == -1) {
        return res.status(404).json({
        status: 404,
        message: "User not found",
        });
    }

    const deletedUser = users.splice(index, 1);

    res.status(200).json({
        status: 200,
        message: "User deleted",
        data: deletedUser[0],
    });
};
