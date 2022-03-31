import { Injectable } from "@angular/core";
import { Question } from "../model/question.model";

@Injectable({
    providedIn: 'any'
})
export class QuestionProviderService {
    private questions: Question[] = [
        {
            question: 'Lorsqu\'on invite un pancake à une Barmitzva, les convives doivent :',
            reponsesPossibles: [
                'l\'inciter à boire l\'open Barmitzva',
                'lui présenter Raymond Barmitzva',
                'lui offrir des Malabarmitzva',
                'La réponse D'
            ],
            bonneReponseIndex: 0
        },
        {
            question: 'Lorsqu\'un pancake tombe dans la neige avant le 31 décembre, on dit qu\'il est :',
            reponsesPossibles: [
                'Tombé dans la neige avant le 31 décembre',
                'un frizby comestible',
                'Une Kipa surgelée',
                'La réponse D'
            ],
            bonneReponseIndex: 2
        },
        {
            question: 'Lorsqu\'un pancake prend l\'avion à destination de Toronto et qu\'il fait une escale technique à St Claude, on dit :',
            reponsesPossibles: [
                'Qu\'il n\'est pas arrivé à Toronto',
                'Qu\'il était supposé arriver à Toronto',
                'Qu\'est-ce qu\'il fout ce maudit pancake, tabernacle ?',
                'La réponse D'
            ],
            bonneReponseIndex: 2
        }
    ]

    getQuestions(): Question[] {
        return this.questions;
    }
}