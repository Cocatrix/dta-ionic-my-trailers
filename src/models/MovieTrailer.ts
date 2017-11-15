export class MovieTrailer {

  public postdate: string;
  public url: string;
  public type: string;
  public exclusive: boolean;
  public hd: boolean;

  constructor({postdate, url, type, exclusive, hd}) {
    this.postdate = postdate;
    this.url = url;
    this.type = type;
    this.exclusive = exclusive;
    this.hd = hd;
  }
}
