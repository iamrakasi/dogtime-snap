import dogData from './dogData.json'
import {Dog} from '../DogTypes'
import {CharacteristicFilter} from '../FilterTypes'
import {moreIsBetter} from '../Characteristics'
import Characteristics from '../Characteristics'

export const getDogCharacteristics = (): string[] => {
  return Characteristics.map(c => c.label)
}

export const getDogsByCharacteristics = (
  filters: CharacteristicFilter[],
): Dog[] => {
  const result = dogData.filter(d =>
    filters.every(f =>
      d.Characteristics.some(
        c =>
          f.char === c.Char &&
          (moreIsBetter(f.char) ? c.Rating >= f.rating : c.Rating <= f.rating),
      ),
    ),
  )
  return result
}
