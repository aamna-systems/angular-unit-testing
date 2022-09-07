import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  // Use beforeEach function from Jasmine
  beforeEach(() => {
    // Arrange: Initialize system under test
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    // Act: Call a method / function
    component.upVote();

    // Assertion: Expectation to be met
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
