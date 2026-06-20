import path from 'path';
import type { LauncherConfig } from 'zumito-framework';

const __dirname = process.cwd();

export const config: LauncherConfig = {
    database: {
        default: 'memory',
        drivers: { memory: {} },
    },
    bundles: [
        // Add your module bundles here, e.g.:
        // { path: path.join(__dirname, "node_modules", "@zumito-team", "admin-module") },
        // { path: path.join(__dirname, "node_modules", "@zumito-team", "user-panel-module") },
        // { path: path.join(__dirname, "node_modules", "@zumito-team", "analytics-module", "dist") },
    ],
    callbacks: {
        load: () => {
            // Called after all modules are loaded. Configure services here.
        }
    },
};
