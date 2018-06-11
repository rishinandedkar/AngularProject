import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;   //'open' is a Bootstrap 3 class which opens up the dropdown menu when clicked

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
