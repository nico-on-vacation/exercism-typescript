class Pangram {
  constructor(private sentence: string){}

  isPangram() {
    let alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
    let input = this.sentence.toLowerCase().split('')

    return alphabet.filter(x => !input.includes(x)).length === 0
  }
}

export { Pangram as default}

