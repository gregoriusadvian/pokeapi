require("custom-env").env(process.env.ENV || "production");
const supertest = require("supertest");

export async function GetStats(idOrName?: number | string) {
    try {
        const baseUrl = process.env.baseurl || "undefined";
        const statEndpoint = process.env.ability || "undefined";
        const endpoint = idOrName ? `${baseUrl}${statEndpoint}${idOrName}/` : `${baseUrl}${statEndpoint}`
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

export async function GetStatsStructure() {
    const expectedStatJsonStructure = {
        id: expect.any(Number),
        name: expect.any(String),
        game_index: expect.any(Number),
        is_battle_only: expect.any(Boolean),
        affecting_moves: {
          increase: expect.any(Array),
          decrease: expect.any(Array),
        },
        affecting_natures: {
          increase: expect.any(Array),
          decrease: expect.any(Array),
        },
        characteristics: expect.any(Array),
        move_damage_class: {
          name: expect.any(String),
          url: expect.any(String),
        },
        names: expect.any(Array),
    };
      
    return expectedStatJsonStructure
}
