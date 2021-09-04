# Cadastrar novo usuário

> ## Caso de sucesso
1. Usuário deseja se cadastrar
2. Usuário fornece os seguintes campos -> username; email; password; passwordConfirm
3. Se tudo estiver de acordo com o sistema, o usuário é cadastrado

> ## Exceção - Usuário digitou algum campo errado
1. Sistema verifica os campos
2. Se houver algum erro, retornar o status code do erro

> ## Exceção - Usuário existe
1. Sistema verifica se o email existe na base de dados
2. Se o email existe, retorna o status code com uma mensagem informando que aquele email já esta em uso
