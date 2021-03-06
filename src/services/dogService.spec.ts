import {getDogsByCharacteristics} from './dogService'

test('adds 1 + 2 to equal 3', () => {
  const dogs = getDogsByCharacteristics([
    {
      char: 'Good For Novice Owners',
      rating: 1,
    },
  ])
  console.log('dogs.length', dogs.length)
  dogs.forEach(d => console.log(d))
  expect(dogs.length).toBe(10)
})
