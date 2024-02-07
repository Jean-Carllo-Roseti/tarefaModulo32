class Contato {
  nome: string
  email: string
  numero: string
  id: number

  constructor(nome: string, email: string, numero: string, id: number) {
    this.id = id
    this.nome = nome
    this.email = email
    this.numero = numero
  }
}

export default Contato
