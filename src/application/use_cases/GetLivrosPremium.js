module.exports = (RepoLivro) => {

    async function Execute() {
        return RepoLivro.getLivrosPremium();
    }

    return {
        Execute
    };
};
