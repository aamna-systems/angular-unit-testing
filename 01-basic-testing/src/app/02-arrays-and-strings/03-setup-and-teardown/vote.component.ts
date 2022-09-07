// The pattern we have here is state change

export class VoteComponent {
  totalVotes = 0;

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }
}
