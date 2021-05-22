const RepoUsuario = require('../../../application/contracts/RepoUsuario');

module.exports = class RepoUsuarioEmMemoria extends RepoUsuario {

    constructor() {
        super();
        this.users = [];
        this.currentId = 0;
    }

    async add(InstanciaUsuario) {
        try {
            this.currentId = this.currentId + 1;
            InstanciaUsuario.id = this.currentId;
            this.users.push(InstanciaUsuario);
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }

        return InstanciaUsuario;
    }

    async update(InstanciaUsuario) {
        let usuario;
        try {
            usuario = this.users.find(x => x.id === InstanciaUsuario.id);
            if (usuario) {
                Object.assign(usuario, { InstanciaUsuario });
            }

        } catch (error) {
            throw new Error('Erro ao editar usuário');
        }

        return usuario;
    }

    async delete(IdUsuario) {
        try {
            const usuarioIndex = this.users.findIndex(x => x.id === IdUsuario);
            if (usuarioIndex !== -1) {
                this.users.splice(usuarioIndex, 1);
            }
        } catch (error) {
            throw new Error('Erro a deletar usuário');
        }

        return true;
    }

    async getById(IdUsuario) {
        let usuario;
        try {
            const id = parseInt(IdUsuario);
            usuario = this.users.find(x => x.id === id);
        } catch (err) {
            throw new Error('Erro ao buscar usuário por Id');
        }

        return usuario;
    }

    async getByLogin(login) {
        let usuario;
        try {
            usuario = this.users.find(x => x.login === login);
        } catch (err) {
            throw new Error('Erro ao buscar usuário por Login');
        }

        return usuario;
    }

    async getAll() {
        return this.users;
    }
};
