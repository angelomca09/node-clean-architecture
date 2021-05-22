module.exports = (RepoUsuario) => {

    async function Execute() {
        return RepoUsuario.getAll();
    }

    return {
        Execute
    };
};
