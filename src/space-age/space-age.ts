export default class SpaceAge {
  private years: number;

  constructor(public seconds: number) {
    this.years = seconds / 31557600;
  }

  private convertEarthYears = (factor: number) =>
    Number((this.years / factor).toFixed(2));

  onEarth = () => Number(this.years.toFixed(2));
  onMercury = () => this.convertEarthYears(0.2408467);
  onVenus = () => this.convertEarthYears(0.61519726);
  onMars = () => this.convertEarthYears(1.8808158);
  onJupiter = () => this.convertEarthYears(11.862615);
  onSaturn = () => this.convertEarthYears(29.447498);
  onUranus = () => this.convertEarthYears(84.016846);
  onNeptune = () => this.convertEarthYears(164.79132);
}

//*Cool community solution where the methods get auto generated
// interface Planets {
// 	[key: string]: number
// }

// interface SpaceAge {
// 	[key: string]: any
// }

// const Planets: Planets = {
// 	Mercury: 0.2408467,
// 	Venus: 0.61519726,
// 	Earth: 1,
// 	Mars: 1.8808158,
// 	Jupiter: 11.862615,
// 	Saturn: 29.447498,
// 	Uranus: 84.016846,
// 	Neptune: 164.79132
// }

// class SpaceAge {
// 	constructor(public seconds: number) {
// 		for(const planet in Planets) {
// 			this['on' +planet] = () => this.convert(Planets[planet])
// 		}
// 	}

// 	convert(ratio: number) {
// 		return Number((this.seconds /31557600 /ratio).toFixed(2))
// 	}
// }

// export default SpaceAge
