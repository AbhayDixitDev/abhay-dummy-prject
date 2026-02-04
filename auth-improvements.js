// User Authentication Improvements
// - Added session timeout configuration
// - Improved password validation rules
// - Added rate limiting for login attempts
// - Fixed token refresh edge case on expired sessions

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

module.exports = { SESSION_TIMEOUT, MAX_LOGIN_ATTEMPTS, LOCKOUT_DURATION };
