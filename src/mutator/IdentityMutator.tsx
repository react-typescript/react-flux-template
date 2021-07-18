import { mutator } from "satcheljs";
import getStore from "../store/IdentityStore"
import { setEmail } from "../actions/IdentityActions"

mutator(setEmail, (msg) => {
    const store = getStore();
    store.email = msg.email;
});
