const Characteristics = [
  {label: 'Adapts Well To Apartment Living', moreIsBetter: true},
  {label: 'Good For Novice Owners', moreIsBetter: true},
  {label: 'Sensitivity Level', moreIsBetter: false},
  {label: 'Tolerates Being Alone', moreIsBetter: true},
  {label: 'Tolerates Cold Weather', moreIsBetter: true},
  {label: 'Tolerates Hot Weather', moreIsBetter: true},
  {label: 'Affectionate With Family', moreIsBetter: true},
  {label: 'Kid-Friendly', moreIsBetter: true},
  {label: 'Dog Friendly', moreIsBetter: true},
  {label: 'Friendly Toward Strangers', moreIsBetter: true},
  {label: 'Amount Of Shedding', moreIsBetter: false},
  {label: 'Drooling Potential', moreIsBetter: false},
  {label: 'Easy To Groom', moreIsBetter: true},
  {label: 'General Health', moreIsBetter: true},
  {label: 'Potential For Weight Gain', moreIsBetter: false},
  {label: 'Size', moreIsBetter: false},
  {label: 'Easy To Train', moreIsBetter: true},
  {label: 'Intelligence', moreIsBetter: true},
  {label: 'Potential For Mouthiness', moreIsBetter: false},
  {label: 'Prey Drive', moreIsBetter: false},
  {label: 'Tendency To Bark Or Howl', moreIsBetter: false},
  {label: 'Wanderlust Potential', moreIsBetter: false},
  {label: 'Energy Level', moreIsBetter: false},
  {label: 'Intensity', moreIsBetter: false},
  {label: 'Exercise Needs', moreIsBetter: false},
  {label: 'Potential For Playfulness', moreIsBetter: true},
]

export const moreIsBetter = (characteristic: string): boolean => {
  const isMoreBetter = Characteristics.find(f => f.label === characteristic)!
    .moreIsBetter
  return isMoreBetter
}

export default Characteristics
