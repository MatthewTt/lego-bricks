import LImage from "./LImage.vue";
import { App } from "vue";

LImage.install = (app: App) => {
    console.log(LImage.name, 7328732823)
    app.component(LImage.name, LImage)
}

export default LImage
