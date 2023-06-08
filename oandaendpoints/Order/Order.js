//
// Order Endpoints
//
//
// POST/v3/accounts/{accountID}/orders
//
// Create an Order for an Account
//
// GET/v3/accounts/{accountID}/orders
//
// Get a list of Orders for an Account
//
// GET/v3/accounts/{accountID}/pendingOrders
//
// List all pending Orders in an Account
//
// GET/v3/accounts/{accountID}/orders/{orderSpecifier}
//
// Get details for a single Order in an Account
//
// PUT/v3/accounts/{accountID}/orders/{orderSpecifier}
//
// Replace an Order in an Account by simultaneously cancelling it and creating a replacement Order
//
// PUT/v3/accounts/{accountID}/orders/{orderSpecifier}/cancel
//
// Cancel a pending Order in an Account
//
// PUT/v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions
//
// Update the Client Extensions for an Order in an Account. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
//
