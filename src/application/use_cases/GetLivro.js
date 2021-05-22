module.exports = (RepoLivro) => {

    async function Execute(IdLivro) {
        return RepoLivro.getById(IdLivro);
    }

    return {
        Execute
    };
};
