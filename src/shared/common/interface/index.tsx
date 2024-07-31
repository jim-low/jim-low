import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IProject {
    name: string;
    description: string;
}

export interface ITool {
    name: string;
    icon: IconDefinition; // to be changed to IconDefinition from FontAwesomeIcon package
}
