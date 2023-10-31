export class User {
    name: string;
    contact: string;

    constructor(name: string, contact: string) {
        this.name = name;
        this.contact = contact;
    }

    sendDirectMessage(message: string): void {
        console.log(`Message sent to ${this.name}: ${message}`);
    }
}
