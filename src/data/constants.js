// USERS_SCHEMA/USERNAME
const USERNAME_MIN_LENGTH = 6;
const USERNAME_MAX_LENGTH = 20;

// USERS_SCHEMA/DISPLAY_NAME
const DISPLAY_NAME_MIN_LENGTH = 4;
const DISPLAY_NAME_MAX_LENGTH = 20;

// ISSUES_SCHEMA/TITLE
const ISSUE_TITLE_MIN_LENGTH = 10;
const ISSUE_TITLE_MAX_LENGTH = 256;

// ISSUES_SCHEMA/DESCRIPTION
const ISSUE_DESCRIPTION_MIN_LENGTH = 30;
const ISSUE_DESCRIPTION_MAX_LENGTH = 2_000;

//
const FEEDBACK_TITLE_MIN_LENGTH = 10;
const FEEDBACK_TITLE_MAX_LENGTH = 60;

//
const FEEDBACK_MESSAGE_MIN_LENGTH = 10;
const FEEDBACK_MESSAGE_MAX_LENGTH = 2_000;

//
const ISSUE_MESSAGE_MIN_LENGTH = 1;
const ISSUE_MESSAGE_MAX_LENGTH = 2_000;

// MISCELLANEOUS CONSTANTS

const DB_QUERY_PAGINATION_DEFAULT_PAGE = 1;
const DB_QUERY_PAGINATION_DEFAULT_LIMIT = 10;

export {
    USERNAME_MIN_LENGTH,
    USERNAME_MAX_LENGTH,

    DISPLAY_NAME_MIN_LENGTH,
    DISPLAY_NAME_MAX_LENGTH,

    ISSUE_TITLE_MIN_LENGTH,
    ISSUE_TITLE_MAX_LENGTH,

    ISSUE_DESCRIPTION_MIN_LENGTH,
    ISSUE_DESCRIPTION_MAX_LENGTH,

    FEEDBACK_TITLE_MIN_LENGTH,
    FEEDBACK_TITLE_MAX_LENGTH,
    FEEDBACK_MESSAGE_MIN_LENGTH,
    FEEDBACK_MESSAGE_MAX_LENGTH,

    ISSUE_MESSAGE_MIN_LENGTH,
    ISSUE_MESSAGE_MAX_LENGTH,

    DB_QUERY_PAGINATION_DEFAULT_PAGE,
    DB_QUERY_PAGINATION_DEFAULT_LIMIT,
}