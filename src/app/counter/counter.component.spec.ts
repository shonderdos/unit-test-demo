import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CounterComponent} from './counter.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let element: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('p'));
    htmlElement = element.nativeElement;

    fixture.detectChanges();
  });

  it('should display correct number initially', () => {
    const startValue = htmlElement.textContent;

    expect(startValue).toBe('Number: 1');
  });

  it('should increase counter by one', () => {
    const startValue = component.counter;

    component.increment();

    const endValue = component.counter;

    expect(startValue).toBeLessThan(endValue);
  });

  it('should reduce counter by one', () => {
    const startValue = component.counter;

    component.decrement();

    const endValue = component.counter;

    expect(startValue).toBeGreaterThan(endValue);
  });

});
