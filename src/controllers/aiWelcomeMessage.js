export function aiWelcomeMessage(req, res) {
  const messages = [
    {message: "Seja Bem Vindo!", id:2},
    {message: "Sou o assistente virtual da escola, e estou aqui para te ajudar com informações sobre o curso de Análise e Desenvolvimento de Sistemas. Pode perguntar! 😉", id:2}
  ]

  return res.json({
    response: messages
  })
}