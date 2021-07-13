//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    constructor() {
        this._balance = 0;
        this.isOpen = false;
    }

    open() {
        if (this.isOpen) throw new ValueError();
        this.isOpen = true;
        this._balance = 0;
    }

    close() {
        if (!this.isOpen) throw new ValueError();
        this.isOpen = false;
    }

    deposit(value) {
        if (this.isOpen && value > 0) {
            this._balance += value;
        } else throw new ValueError();
    }

    withdraw(value) {
        if (this.isOpen && value <= this._balance && value > 0) {
            this._balance -= value;
        } else throw new ValueError();
    }

    get balance() {
        if (!this.isOpen) throw new ValueError();
        return this._balance;
    }
}

export class ValueError extends Error {
    constructor() {
        super("Bank account error");
    }
}

// throw new ValueError()
