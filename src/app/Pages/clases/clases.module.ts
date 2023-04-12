import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './clases.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserGear as fasUserGear, faCaretRight as fasCaretRight, faCaretLeft as fasCaretLeft, faSort as fasSort, faMagnifyingGlass as fasMagnifyingGlass, faFilter as fasFilter, faTrash as fasTrash, faEllipsis as fasEllipsis, faCaretSquareLeft as fasCaretSquareLeft, faCaretSquareRight as fasCaretSquareRight, faChevronDown as fasChevronDown, faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    CdkAccordionModule
  ]
})
export class ClasesModule { 
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasUserGear, fasCaretRight, fasCaretLeft, fasSort, fasMagnifyingGlass, fasFilter, fasTrash, fasEllipsis, fasCaretSquareLeft, fasCaretSquareRight, fasChevronDown, fasTimes);
  }
}
