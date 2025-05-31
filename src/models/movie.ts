export class Movie {
    public id: string;
    constructor(
        public title: string,
        public year: number, 
        public poster: string,
    ){
        this.id = `${title}-${Date.now()}`;
    }
}