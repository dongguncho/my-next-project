import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Answer } from './answer.entity';

@Entity({ synchronize: false })
export class Check {

    @PrimaryGeneratedColumn({comment: '문진ID'})
    id!: number

    @Column({comment: '문진값'})
    value!: string

    @Column({ default: () => "'2999-12-31'", comment: '이력일시'})
    histDt!: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @ManyToOne(() => Answer)
    @JoinColumn({ name: 'answer_id'})
    answer?: Answer

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number   
}