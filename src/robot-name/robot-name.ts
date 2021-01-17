export default class Robot {
  private robotName = "";
  private static robotNameList: string[] = [];

  constructor() {
    this.generateAndSetName();
  }

  private generateName(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    let name = "";

    do {
      name =
        chars[this.getRandomInt(chars.length)] +
        chars[this.getRandomInt(chars.length)] +
        numbers[this.getRandomInt(numbers.length)] +
        numbers[this.getRandomInt(numbers.length)] +
        numbers[this.getRandomInt(numbers.length)];
    } while (Robot.robotNameList.includes(name));

    return name;
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private generateAndSetName(): void {
    this.robotName = this.generateName();
    Robot.robotNameList.push(this.robotName);
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    Robot.robotNameList.filter((x) => x !== this.robotName);
    this.generateAndSetName();
  }

  public static releaseNames(): void {
    Robot.robotNameList = [];
  }
}
