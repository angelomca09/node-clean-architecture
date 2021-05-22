module.exports = (dependencies) => {

  const verificaAutorizacaoPremium = (req, res, next) => {
    const nivel_acesso = req.headers["x-nivel-acesso"];
    //Verifica se a requisição tem um nivel de acesso
    if (!nivel_acesso) return res.status(401).send("Autenticação necessária!");
    //Verifica se o usuario tem nivel de acesso Premium
    if (nivel_acesso < 2) return res.status(403).send("Usuário não tem permissão!");
    
    next();
};
  const verificaAutorizacaoVIP = (req, res, next) => {
    const nivel_acesso = req.headers["x-nivel-acesso"];
    //Verifica se a requisição tem um nivel de acesso
    if (!nivel_acesso) return res.status(401).send("Autenticação necessária!");
    //Verifica se o usuario tem nivel de acesso VIP
    if (nivel_acesso < 3) return res.status(403).send("Usuário não tem permissão!");
    
    next();
};

  return {
    verificaAutorizacaoPremium,
    verificaAutorizacaoVIP
  };
};
