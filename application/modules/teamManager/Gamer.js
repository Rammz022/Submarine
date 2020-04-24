class Gamer {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.position = {
            x: 0,
            y: 0
        };
    }
}

module.exports = Gamer;