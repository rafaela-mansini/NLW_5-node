import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Param types
 * Route params => params from routes;
 * Query params => usually from searches and filters, passing by a url;
 * Body params => sending with json format
 */

routes.post("/settings", async (req, res) => {
    const settingsRepository = getCustomRepository(SettingsRepository);
    const { chat, username } = req.body;

    const settings = settingsRepository.create({ chat, username });
    await settingsRepository.save(settings);

    return res.json(settings);
});

export { routes };