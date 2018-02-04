import { expect } from "chai";
import { Application } from "spectron";

import { ApplicationData } from "./helpers/ApplicationData";

describe("Application launch", function() {
    this.timeout(10000);
    let app: Application;

    beforeEach(async () => {
        app = new Application(ApplicationData);
        await app.start();
    })

    afterEach(async () => {
        if (app && app.isRunning()) {
            await app.stop();
        }
    })

    it("Should create one window on start", async () => {
        expect(await app.client.getWindowCount()).to.equals(1);
    })
});
