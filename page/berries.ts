require("custom-env").env(process.env.ENV || "production");
const supertest = require("supertest");

export async function GetBerries(idOrName?: number | string) {
    try {
        const baseUrl = process.env.baseurl || "undefined";
        const berryEndpoint = process.env.berry || "undefined";
        const endpoint = idOrName ? `${baseUrl}${berryEndpoint}${idOrName}/` : `${baseUrl}${berryEndpoint}`
        console.log(endpoint);

        const res = await supertest(endpoint)
            .get('')
            .set("Content-Type", "application/json")
            .send();
            
        return res;
    } catch (error) {
        console.log(error);
    }
}
