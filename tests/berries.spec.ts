require("custom-env").env(process.env.ENV || "production");
import { GetBerries } from "../page/berries"


describe("Berries - API", function () {

    it("Get All Berries List", async () => {
        const res = await GetBerries();
        console.log(res.body);
        expect(res.statusCode).toBe(200)
    });

    it("Get Berries with valid id", async () => {
        let id: number = 1
        const res = await GetBerries(id);
        console.log(res.body);
        expect(res.statusCode).toBe(200)
    });

    it("Get Berries with invalid id", async () => {
        let id: number = 100000
        const res = await GetBerries(id);
        console.log(res.body);
        expect(res.notFound).toBe(true)
        expect(res.text).toBe('Not Found')
        expect(res.statusCode).toBe(404)
    });

    it("Get Berries with valid name", async () => {
        let name: string = "cheri"
        const res = await GetBerries(name);
        console.log(res.body);
        expect(res.statusCode).toBe(200)
    });
    it("Get Berries with invalid name", async () => {
        let name: string = "asalmawon"
        const res = await GetBerries(name);
        console.log(res.body);
        expect(res.notFound).toBe(true)
        expect(res.text).toBe('Not Found')
        expect(res.statusCode).toBe(404)
    });

})