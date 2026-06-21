import { defineConfig } from 'zumito-framework';

export default defineConfig({
    database: {
        default: 'memory',
        drivers: { memory: {} },
    },
    modules: [
        // Add your modules here, e.g.:
        // '@zumito-team/admin-module',
        // '@zumito-team/user-panel-module',
        // '@zumito-team/analytics-module',
    ],
    callbacks: {
        load: () => {
            // Called after all modules are loaded. Configure services here.
        }
    },
});
