require("custom-env").env(process.env.ENV || "production")

describe("Test", function () {

    it("check env", async () => {
        
        console.log(process.env.baseurl);
    });



})