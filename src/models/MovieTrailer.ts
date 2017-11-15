export class MovieTrailer {
  constructor(
    public postdate: string,
    public url: string,
    public type: string,
    public exclusive: boolean,
    public hd: boolean
  ) {}
}
