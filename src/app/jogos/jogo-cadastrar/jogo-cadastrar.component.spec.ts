import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCadastrarComponent } from './jogo-cadastrar.component';

describe('JogoCadastrarComponent', () => {
  let component: JogoCadastrarComponent;
  let fixture: ComponentFixture<JogoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
