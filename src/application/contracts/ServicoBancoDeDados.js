module.exports = class ServicoBancoDeDados {
    constructor() {
        this.userRepository = null;
        this.livroRepository = null;
    }

    initDatabase(){
        return Promise.reject(new Error("Nao implementado"))
    }
}