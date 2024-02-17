import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizzComponent } from "./components/quizz/quizz.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, QuizzComponent]
})
export class AppComponent {
  title = 'Angular-BuzzFeed';
}
