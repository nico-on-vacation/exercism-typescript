class Transcriptor {
  static complement: { [key:string] : string } = {
    G : "C",
    C : "G",
    T : "A",
    A : "U"
  }
  toRna(DNA: string) {
    return DNA.split('')
      .map((x) => {
        if(!Transcriptor.complement[x]){
          throw new Error('Invalid input DNA.')
        }
        return Transcriptor.complement[x]
      })
      .join('')
  }
}

export default Transcriptor
