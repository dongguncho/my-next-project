import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ synchronize: false })
export class Aggregate {

    @PrimaryGeneratedColumn({comment: '집합ID'})
    id!: number
    
    @Column({ default: () => "'2999-12-31'", comment: '이력일자'})
    histDt!: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @Column({nullable: true, comment: '포즈ID'})
    poseId?: number

    @Column({nullable: true, comment: '회원프로그램회차'})
    programOrder?: number

    @Column({nullable: true, comment: '집합회차'})
    order?: number

    @Column({nullable: true, comment: '거북목점수'})
    turtlePoint?: number
    
    @Column({nullable: true, comment: '문진점수'})
    checkPoint?: number

    @Column({nullable: true, comment: '통증지수(VAS)'})
    vas?: number    

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number     
}