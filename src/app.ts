// import { hello } from './hello';
// import Matrix from './matrix/matrix'
import Robot from "./robot-name/robot-name";

class App {
  /** Entry point of our app */
  public static start(): void {
    console.log("Running ...");
    const robot = new Robot();
    console.log(robot);
  }
}

App.start();
