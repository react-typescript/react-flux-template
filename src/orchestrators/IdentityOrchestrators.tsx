import { orchestrator } from "satcheljs";
import { initialize, setEmail } from "../actions/IdentityActions"

orchestrator(initialize, async () => {
    // let store = getStore(); // or do a network or api calls
    setEmail("abhinandan_jaisawal@outlook.com");
});
