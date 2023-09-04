describe('Tes Web Order Coffe', () => {
  it('Tes login', () => {
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
  })

  it('Tes Login Hanya isi Nama', () => {
    let nama = 'Kharisma'
    let password = 'DedeGemes'
    cy.visit('http://localhost:4200/')
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-name"]').type(nama)
    cy.wait(700)
    cy.get('[data-cy="btn-login"]').click()
    // Dapatkan username
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${nama}`)
  })

  it('Tes Login Hanya isi password', () => {
    let nama = 'Kharisma'
    let password = 'DedeGemes'
    cy.visit('http://localhost:4200/')
    cy.wait(700)
    // Cari tag input dengan attribut data-cy yg berisi "input name" dan mengetikkan sesuai value yang dimasukkan
    cy.get('[data-cy="input-password"]').type(password)
    cy.wait(700)
    cy.get('[data-cy="btn-login"]').click()
    // Dapatkan username
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${nama}`)
  })
})
