import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/todos/components/todos/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/todos/header/header.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/todos/main/main.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { FooterComponent } from './components/todos/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent, TodoComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [TodosService]
})
export class TodosModule { }
