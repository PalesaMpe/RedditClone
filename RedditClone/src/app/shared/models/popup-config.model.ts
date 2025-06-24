import { EventEmitter } from '@angular/core';

export interface PopupConfig {
  styles?: { [key: string]: string };
  content: {
    title: {
      text: string;
      styles?: any;
    };
    description?: {
      text: string;
      styles?: any;
    };
    buttons?: ButtonConfig[];
    components?: {
      component: any;
      inputs?: { [key: string]: any };
      outputs?: EventEmitter<any>;
    };
  };
  options?: {
    close?: boolean;
  };
}
export interface ButtonConfig {
  label: string;
  type: string;
  action?: (context?: any) => void;
}
