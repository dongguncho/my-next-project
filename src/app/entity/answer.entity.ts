import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity({ synchronize: false })
export class Answer {

    @PrimaryGeneratedColumn({comment: '답변ID'})
    id!: number
    
    @Column({comment: '답변 내용'})
    message!: string
    
    @Column({nullable: true, comment: '답변값'})
    value?: string
    
    @Column({nullable: true})
    adjust?: string
    
    @ManyToOne(() => Question)
    @JoinColumn({ name: 'question_id'})
    question?: Question

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시'  })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시'  })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number
}