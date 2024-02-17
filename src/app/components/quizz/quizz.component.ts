import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  title: string = "Title-Quizz";
  questions: any;
  questionsSelected: any;

  answers: string[] = [];
  answersSelected: string = "";

  questionIndex: number = 0;
  questionsMaxIndex: number = 0;

  finish: boolean = false;

  constructor() {

  }
  ngOnInit(): void {
    if (quizz_questions) {
      this.finish = false;
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionIndex];

      this.questionsMaxIndex = this.questions.length;

    }
  }

  btnChoose(value: string) {
    this.answers.push(value);
    this.nextQuestion();
  }

  nextQuestion() {
    this.questionIndex += 1;

    if (this.questionsMaxIndex > this.questionIndex) {
      this.questionsSelected = this.questions[this.questionIndex];
    } else {

      this.finish = true;
      this.answersSelected = quizz_questions.results[this.checkResult(this.answers) as keyof typeof quizz_questions.results]
    }
  }

  checkResult(answers: string[]) {
    const results = answers.reduce((previus, current, i, arr) => {
      if (arr.filter(item => item === previus).length > arr.filter(item => item === current).length) {
        return previus;
      } else {
        return current;
      }
    })
    return results;
  }
}
