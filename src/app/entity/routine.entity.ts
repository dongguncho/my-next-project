import { Index, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ synchronize: false })
@Index(['user'], { unique: true })
export class Routine {

    @PrimaryGeneratedColumn({comment: '루틴ID' })
    id!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @Column({comment: '루틴 타입'})
    typeCd!: string

    @Column({nullable: true, comment: '루틴명'})
    name!: string

    @Column({type: 'time', comment: '예약시간' })
    reservation!: Date

    @Column({ default: true, comment: '사용여부'})
    useTf!: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number     
}