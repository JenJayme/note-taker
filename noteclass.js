
class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = lastID + 1;
    };

    getTitle () {
        return this.title
    }

    getText () {
        return this.text
    }

    assignId () {
        this.id = lastID + 1
        return this.id
    }

    getId () {
        return this.id
    }

    stringify () {
        JSON.stringify(this)
    }

}

// export default Employee;
module.exports = Employee