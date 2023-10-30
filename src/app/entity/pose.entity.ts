import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ synchronize: false })
export class Pose {

    @PrimaryGeneratedColumn({comment: '포즈ID'})
    id!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @Column({ default: () => "'2999-12-31'", comment: '이력일시'})
    histDt!: string

    @Column({type: 'decimal', precision: 4, scale: 1, comment: '각도'})
    angle!: number

    @Column({comment: '하중'})
    kg!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number  
}