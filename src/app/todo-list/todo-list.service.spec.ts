/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { TodoListService } from '@app/todo-list/todo-list.service';
import { of } from 'rxjs/observable/of';
import { TODOItem } from '../shared/models/todo-item';

describe('Service: TodoList', () => {
  let todoListService: TodoListService;
  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('httpClient', ['get']);
  httpClientSpy.get.and.returnValue(of([new TODOItem('Buy Milk', 'Lala')]));
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService,
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }]
    });
  });


  beforeEach(inject([TodoListService], (service: TodoListService) => {
    todoListService = service;
  }));

  it('should be defined', () => {
    expect(todoListService).toBeTruthy();
  });

  it('should make a http get request', () => {

    expect(httpClientSpy.get).toHaveBeenCalled();
  });
});
