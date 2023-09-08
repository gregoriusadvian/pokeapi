require("custom-env").env(process.env.ENV || "production");
import { GetStats, GetStatsStructure} from "../page/stat";


describe("Pokemon Stats - API", function () {
    it("Validate JSON Structure on Get Pokemon Stats ", async () => {
        const res = await GetStats("attack");
        console.log(res.body);
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(await GetStatsStructure());

    });



})