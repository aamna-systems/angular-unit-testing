import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {
    // Arrange: Initialize system under test
    let component = new VoteComponent();

    // Act: Calling a method / function
    component.upVote();

    // Assertion: Expectation to be met
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    let component = new VoteComponent();

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
