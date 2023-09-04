describe('Tes Web Order Coffe', () => {
  it('Tes Checkout', () => {
    let nama = 'Kharisma'
    let password = 'DedeGemes'
    cy.visit('http://localhost:4200/')
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-name"]').type(nama)
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-password"]').type(password)
    cy.wait(700)
    cy.get('[data-cy="btn-login"]').click()
    cy.get('[data-cy="btn-add-menu-item-to-cart"').click({ multiple: true })
    cy.get('[data-cy="btn-checkout"]').click()
  })
})
