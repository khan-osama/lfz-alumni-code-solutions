function graduate(credential) {
  return function(fullName) {
    return fullName + ', ' + credential
  }
}

const medicalSchool = graduate('M.D')
const lawSchool = graduate('Esq.')

console.log(medicalSchool('Osama Khan'))
console.log(lawSchool('Osama Khan'))
