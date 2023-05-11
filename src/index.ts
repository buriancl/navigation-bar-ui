const yearSelect = <HTMLSelectElement>document.querySelector('#year-select')
const makeSelect = <HTMLSelectElement>document.querySelector('#make-select')
const engineSelect = <HTMLSelectElement>document.querySelector('#engine-select')

yearSelect.add(new Option('Year', 'year'))
makeSelect.add(new Option('Make', 'make'))
engineSelect.add(new Option('Engine', 'engine'))

const makes = [
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Mazda',
  'Mercedes-Benz',
  'Nissan',
  'Toyota',
  'Volkswagen',
]

const engines = ['4 cylinder', '6 cylinder', '8 cylinder', 'Hybrid', 'EV']

for (let i = 2023; i >= 2013; i--) {
  yearSelect.add(new Option(i.toString(), i.toString()))
}

makes.forEach((make) => {
  makeSelect.add(new Option(make, make))
})

engines.forEach((engine) => {
  engineSelect.add(new Option(engine, engine))
})
