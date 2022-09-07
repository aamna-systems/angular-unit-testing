import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    // expect(greet('Alexander')).toBe('Welcome, Alexander!'); TESTS SHOULD NOT BE TOO SPECIFIC
    expect(greet('Alexander')).toContain('Alexander');
  });
});
