class StorageService {
    // User storage
    static USERS_KEY = 'users';
    
    // File storage
    static FILES_KEY = 'uploadedFiles';
    
    // User methods
    static getUsers() {
        return JSON.parse(localStorage.getItem(this.USERS_KEY)) || [];
    }
    
    static saveUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }
    
    static findUser(username, password) {
        const users = this.getUsers();
        return users.find(user => user.username === username && user.password === password);
    }
    
    static userExists(username) {
        const users = this.getUsers();
        return users.some(user => user.username === username);
    }
    
    static emailExists(email) {
        const users = this.getUsers();
        return users.some(user => user.email === email);
    }
    
    // File methods
    static getFiles() {
        return JSON.parse(localStorage.getItem(this.FILES_KEY)) || [];
    }
    
    static saveFile(fileData) {
        const files = this.getFiles();
        files.push(fileData);
        localStorage.setItem(this.FILES_KEY, JSON.stringify(files));
    }
    
    static deleteFile(fileName) {
        const files = this.getFiles();
        const updatedFiles = files.filter(file => file.name !== fileName);
        localStorage.setItem(this.FILES_KEY, JSON.stringify(updatedFiles));
    }
    
    static findFile(fileName) {
        const files = this.getFiles();
        return files.find(file => file.name === fileName);
    }
    
    // Clear all data (useful for testing)
    static clearAll() {
        localStorage.removeItem(this.USERS_KEY);
        localStorage.removeItem(this.FILES_KEY);
    }
} 