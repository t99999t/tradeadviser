//
// GET/v3/accounts
//
// Get a list of all Accounts authorized for the provided token.
//
//     GET/v3/accounts/{accountID}
//
// Get the full details for a single Account that a client has access to. Full pending Order, open Trade and open Position representations are provided.
//
//     GET/v3/accounts/{accountID}/summary
//
// Get a summary for a single Account that a client has access to.
//
//     GET/v3/accounts/{accountID}/instruments
//
// Get the list of tradeable instruments for the given Account. The list of tradeable instruments is dependent on the regulatory division that the Account is located in, thus should be the same for all Accounts owned by a single user.
//
//     PATCH/v3/accounts/{accountID}/configuration
//
// Set the client-configurable portions of an Account.
//
//     GET/v3/accounts/{accountID}/changes
//
// Endpoint used to poll an Account for its current state and changes since a specified TransactionID.
//
