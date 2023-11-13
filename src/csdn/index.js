const {getHeaders} = require("./util")
const axios = require("axios")


async function Test1() {
    const reqObj = {
        method: "GET",
        url: "https://bizapi.csdn.net/community-cloud/v1/community/leaderboard/detail",
        params: {
            communityId: 1047,
            rankType: "5",
            page: 1,
            pageSize: 10
        }
    }
    reqObj["headers"] = getHeaders(reqObj)
    const res = await axios(reqObj)
    console.log(res.data)
}

async function Test2() {
    const reqObj = {
        method: "GET",
        url: "https://bizapi.csdn.net/community-cloud/v1/community/listV2",
        params: {
            page: 1,
            pageSize: 20,
            tabId: 4925,
            noMore: "false", communityId: "1047",
            type: "4",
            viewType: "0"

        }
    }
    reqObj["headers"] = getHeaders(reqObj)
    const res = await axios(reqObj)
    console.log(res.data)
}

// Test1()
Test2()