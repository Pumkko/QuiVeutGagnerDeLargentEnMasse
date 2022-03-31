import { isExpressionFactoryMetadata } from "@angular/compiler/src/render3/r3_factory";
import { TestBed } from "@angular/core/testing";
import { Question } from "../model/question.model";
import { QuestionProviderService } from "./question.provider.service";
import { QuestionService } from "./question.service";

describe('QuestionService', () => {
   
    
    let questionService: QuestionService;
    let mockQuestionProviderService: jasmine.SpyObj<QuestionProviderService>;

    beforeEach(() => {

        const spyProviderService = jasmine.createSpyObj<QuestionProviderService>('QuestionProviderService', ['getQuestions']);

        TestBed.configureTestingModule({
            providers:[
                QuestionService,
                {provide: QuestionProviderService, useValue: spyProviderService}
            ]
        });

        mockQuestionProviderService = TestBed.inject(QuestionProviderService) as jasmine.SpyObj<QuestionProviderService>;
        questionService = TestBed.inject(QuestionService);
    });

    it('Next question doit retourner la première question', () => {

        const questionArray: Question[] = [
            {
                bonneReponseIndex: 0,
                question: '',
                reponsesPossibles: [
                    '',
                    '',
                    '',
                    ''
                ]
            }
        ];


        mockQuestionProviderService.getQuestions.and.returnValue(questionArray);
        
        questionService.loadQuestions();

        const nextQuestion = questionService.getNextQuestion();
        expect(nextQuestion).toBe(questionArray[0]);
    });

});