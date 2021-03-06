import dogData from './dogData.json'
import {Dog} from '../DogTypes'
import {CharacteristicFilter} from '../FilterTypes'
import {moreIsBetter} from '../Characteristics'

export const getDogCharacteristics = (): string[] => {
  return dogData[0].Characteristics.map(c => c.Char)
}

export const getDogsByCharacteristics = (
  filters: CharacteristicFilter[],
): Dog[] => {
  console.log('filters', filters)
  return dogData.filter(d =>
    filters.every(f =>
      d.Characteristics.some(
        c =>
          f.char === c.Char &&
          (moreIsBetter(f.char) ? c.Rating >= f.rating : c.Rating <= f.rating),
      ),
    ),
  )
}
