import {
  async,
  fakeAsync, ComponentFixture, TestBed
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {
  InputTextModule,
  ButtonModule,
  ConfirmDialogModule,
  PanelModule,
  DropdownModule,
  InputTextareaModule,
  GrowlModule,
  DataListModule,
  DataGridModule,
  DataTableModule,
  SpinnerModule,
  SharedModule
} from 'primeng/primeng';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        FormGroup
      ],
      imports: [
        BrowserAnimationsModule,
        SpinnerModule,
        PanelModule,
        GrowlModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



});