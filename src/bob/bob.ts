class Bob {
  //ending ? -> 'Sure.'
  //ALL UPPER CASE -> 'Whoa, chill out!'
  //ALL UPPER, ending ? -> 'Calm down, I know what I'm doing!'
  //NO LETTERS -> 'Fine. Be that way!'
  //everything else -> 'Whatever.'

  private isQuestion = (message: string) => message.endsWith("?");

  private isUpperCase = (message: string) => {
    //if contains no letter -> false
    if(this.containsLetters(message)){
      return message === message.toUpperCase()
    } else {
      return false
    }
  }
  private isMessage = (message: string) =>
    message.split("").some((x) => x.match(/[a-z]|[0-9]/i));

  private containsLetters = (message: string) =>
    message.split("").some((x) => x.match(/[a-z]/i));

  hey(message: string) {
    const input = message.replaceAll(" ", "");

    let answer = "Whatever.";

    if (this.isQuestion(input)) {
      if (this.isUpperCase(input)) {
        answer = "Calm down, I know what I'm doing!";
      } else {
        answer = "Sure.";
      }
    } else if (!this.isMessage(input)) {
      answer = "Fine. Be that way!";
    } else if (this.isUpperCase(input)) {
      answer = "Whoa, chill out!";
    }

    return answer;
  }
}

export default Bob;
