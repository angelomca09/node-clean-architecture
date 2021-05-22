module.exports = (RepoUsuario) => {

    async function Execute(IdUsuario) {
        return RepoUsuario.getById(IdUsuario);
    }

    return {
        Execute
    };
};
