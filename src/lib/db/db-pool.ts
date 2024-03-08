import { knex, Knex } from 'knex';
import { IUnleashConfig } from '../types/option';

export function createDb({
    db,
    getLogger,
}: Pick<IUnleashConfig, 'db' | 'getLogger'>): Knex {
    const logger = getLogger('db-pool.js');
    return knex({
        client: 'mysql2',
        version: db.version,
        connection: {
            host: db.host,
            port: db.port,
            user: db.user,
            password: db.password,
        },
        pool: db.pool,
        searchPath: db.schema,
        asyncStackTraces: true,
        log: {
            debug: (msg) => logger.debug(msg),
            warn: (msg) => logger.warn(msg),
            error: (msg) => logger.error(msg),
        },
    });

}

// for backward compatibility
module.exports = {
    createDb,
};
