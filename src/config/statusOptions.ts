import { ActivityType } from "discord.js";
import { StatusManagerOptions } from "zumito-framework";

export const statusOptions: StatusManagerOptions = {
    statuses: [],
    RuledStatuses: [],
    updateInterval: 15000,
    order: "random"
}