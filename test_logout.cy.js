describe('Tes Web Order Coffe', () => {
  it('Tes Logout', () => {
    let nama = 'Kharisma'
    let password = 'DedeGemes'
    cy.visit('http://localhost:4200/')
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-name"]').type(nama)
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('.input[data-cy="input-password"]').type(password)
    cy.wait(700)
    // Klik login btn
    cy.get('[data-cy="btn-login"]').click()
    cy.wait(700)
    // Klik logout btn
    cy.get('[data-cy="btn-logout"]').click()
  })
})
