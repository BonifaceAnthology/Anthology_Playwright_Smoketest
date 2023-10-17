import { expect } from '@playwright/test';
import GenericMethods from '../../../../genericMethods/genericClass';
const genericClass = new GenericMethods();

export default class StudentPortal {
  page: any;
  
  constructor(page: any) {
    this.page = page
    
  }
  
}

