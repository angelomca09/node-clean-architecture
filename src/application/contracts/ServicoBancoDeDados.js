module.exports = class ServicoBancoDeDados {
    constructor() {
        this.userRepository = null;
    }

    initDatabase(){
        return Promise.reject(new Error("Nao implementado"))
    }
}