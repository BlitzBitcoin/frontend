/* https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
Manually declaring the Query Keys is not only error-prone, but makes changes harder in the future.
Have one Query Key factory per feature. It's  a simple object with entries and functions 
that will produce query keys.
*/

export const walletKeys = {
    all: () => ["wallet"],
    single: (
        password: string,
        timestamp: number
    ) => [...walletKeys.all(), password, timestamp],  // FIXME: should rely on "id" instead of "password"
};
