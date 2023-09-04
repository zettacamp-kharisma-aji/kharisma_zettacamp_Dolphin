describe('Tes Web Order Coffe', () => {
  // Test untuk cek username
  it('Cek Nama', () => {
    function randomName(length) {
      let name = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      let counter = 0
      while (counter < length) {
        name += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
      }
      return name
    }
    let nama = randomName(10)
    let password = randomName(7)
    cy.visit('http://localhost:4200/')
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-name"]').type(nama)
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input password" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-password"]').type(password)
    cy.wait(700)
    // Cari button login dan click
    cy.get('[data-cy="btn-login"]').click()
    cy.wait(700)
    // Dapatkan username
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${nama}`)
  })
})
