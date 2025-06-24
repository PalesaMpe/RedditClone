import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonConfig, PopupConfig } from '../../models/popup-config.model';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.scss'],
})
export class DynamicPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: false })
  container!: ViewContainerRef;
  component: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PopupConfig,
    private matDialogRef: MatDialogRef<DynamicPopupComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    if (this.container && this.data.content.components) {
      this.container.clear();
      const componentRef = this.container.createComponent(
        this.data.content.components.component
      );
      if (this.data.content.components.inputs) {
        Object.assign(
          componentRef.instance as object,
          this.data.content.components.inputs
        );
      }
      this.component = componentRef.instance;

      this.cdr.detectChanges();
    }
  }
  onAction(button: ButtonConfig) {
    if (button.action) {
      button.action(this.component);
    }
  }
  closePopup() {
    this.matDialogRef.close();
  }
}
