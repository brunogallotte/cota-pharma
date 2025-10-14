/**
 * Generates a cache key for a user by public ID
 */
const user = (publicID: string) => `user:${publicID}`;

/**
 * Collection of cache key generators for user-related data.
 * Used for efficient caching and retrieval of user information across the application.
 * Each method generates a unique cache key based on user and content identifiers.
 */
export const userCache = {
  user,
};
