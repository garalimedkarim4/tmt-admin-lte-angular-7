import { AuthUser } from './authUser';

describe('User', () => {
  it('should create an instance', () => {
    expect(new AuthUser('','')).toBeTruthy();
  });
});
