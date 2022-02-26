import lText from "./components/LText";
import { App } from "vue";
import LImage from "./components/LImage";

const components = [
    lText,
    LImage
]
const install = (app: App) => {
    components.forEach(component => app.component(component.name, component))
}

export {
    lText,
    LImage,
    install
}

export default { install }
