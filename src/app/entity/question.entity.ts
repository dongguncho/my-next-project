import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { Answer } from './answer.entity';

@Entity({ synchronize: false })
export class Question {

    @PrimaryGeneratedColumn({comment: '질문ID'})
    id!: number

    @Column({comment: '질문 타입'})
    typeCd!: string

    @Column({comment: '답변 타입'})
    answerTypeCd!: string

    @Column("longtext", {comment: '질문 내용'})
    message!: string

    @Column({nullable: true, comment: '질문 값'})
    value?: string

    @Column({default: false, comment: '사용여부'})
    useTf!: boolean

    @OneToMany(() => Answer, (answers) => answers.question)
    @JoinColumn({ name: 'question_id'})
    answers?: Answer

    @Column({nullable: true, comment: '질문 순서'})
    sequence?: number
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number    
}