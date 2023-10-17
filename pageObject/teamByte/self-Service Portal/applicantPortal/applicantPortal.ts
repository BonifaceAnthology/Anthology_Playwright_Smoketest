import { expect } from "@playwright/test";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class ApplicantPortal {
    page: any;
   
    constructor(page: any) {
        this.page = page;
    }
}