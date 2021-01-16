type AllowedColors = "black" | 
    "brown"|
    "red"|
    "orange"|
    "yellow"|
    "green"|
    "blue"|
    "violet"|
    "grey"|
    "white"

export class ResistorColor {
  static colorMap: { [key: string]: string } = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  };

  constructor(private colors: AllowedColors[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  value() {
    return +(
      ResistorColor.colorMap[this.colors[0]] +
      ResistorColor.colorMap[this.colors[1]]
    );
  }
}

