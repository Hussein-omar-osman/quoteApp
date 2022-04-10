export class Quote {
  showDescription: boolean;

  constructor(
    public content: string,
    public publisher: string,
    public author: string,
    public datePublished: Date,
    public upvotes: number,
    public downvotes: number
  ) {
    this.showDescription = false;
  }
}
