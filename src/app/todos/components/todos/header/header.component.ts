import { Component } from "@angular/core";
import { TodosService } from "src/app/todos/services/todos.service";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    text: string = ''

    constructor(private todoService: TodosService) {}

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement
        this.text = target.value
    }
    addToDo(): void {
        this.todoService.addTodo(this.text)
        this.text = ''
    }
}