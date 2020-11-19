export interface Usuario {
  id: number,
  nomeCompleto: string,
  nomeUsuario: string,
  email: string,
  senha: string,
  jogosComprados: number[], //Array dos números dos IDs dos jogos
  admin: boolean
}