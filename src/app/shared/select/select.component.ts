import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptionDirective } from './select-option.directive';

export interface SelectOptionItem {
  value: string;
  label?: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @ContentChild(SelectOptionDirective, {static: true}) optionTmpl: SelectOptionDirective|undefined;

  @Input() selected: any = '';
  @Output() selectedChange = new EventEmitter<any>();
  @Input() disabled = false;

  @Input() options: SelectOptionItem[] = [];

  get selectedItem(): SelectOptionItem | undefined {
    return this.options.find((d: any) => d.value === this.selected);
  }

  change(option: SelectOptionItem): void {
    this.selected = option.value;
    this.selectedChange.emit(this.selected);
  }
}
