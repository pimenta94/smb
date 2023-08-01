/**
 * There are two type of constants exported here:
 * - simple media query strings (to use, for example, with window.matchMedia())
 * - media query strings prefixed with @media (for easier use on template literals)
 */

/* Simple */
export const gteSmall = '(min-width: 48em)'; // >= 768px

/* Prefixed with @media */
export const gteSmallMedia = `@media ${gteSmall}`; // >= 768px
