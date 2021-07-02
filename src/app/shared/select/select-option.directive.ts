import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectOption]'
})
export class SelectOptionDirective {

  constructor(public templateRef:TemplateRef<HTMLLIElement>) { }

}
