import { hello } from './hello';
import Matrix from './matrix/matrix'

class App {
    /** Entry point of our app */
    public static start() {
        console.log(hello('Running ...'));
        new Matrix('1 2\n3 4')
    }
}

App.start();
