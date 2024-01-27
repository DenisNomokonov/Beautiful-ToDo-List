import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrl: './deleted-todo.component.css'
})
export class DeletedTodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllDeletedTodos();
  }

  getAllDeletedTodos(){
    this.todoService.getAllDeletedTodos()
    .subscribe({
      next: (res) => {
        this.todos = res;
      }
    });
  }

  undoDeleteTodo(id: string, todo: Todo){
    this.todoService.undoDeleteTodo(id, todo)
      .subscribe({
        next: (res) => {
          this.getAllDeletedTodos(); 
        }
      })
  }

  deleteTodoFinally(id: string){
    this.todoService.deleteTodoFinally(id)
    .subscribe({
      next: (response) => {      
        this.getAllDeletedTodos();
      }
    })
  }


}
