module.exports = (RepoLivro) => {

    async function Execute() {
        return RepoLivro.getAll();
    }

    return {
        Execute
    };
};
