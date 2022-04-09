export class Quote {
  showDescription: boolean;
  upvotes: number;
  downvotes: number;
  constructor(
    public content: string,
    public publisher: string,
    public author: string,
    public datePublished: Date
  ) {
    this.showDescription = false;
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
