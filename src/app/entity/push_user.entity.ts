import { ManyToOne, JoinColumn, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Push } from './push.entity';

@Entity({ synchronize: false })
export class PushUser {

    @PrimaryGeneratedColumn({comment: '설명'})
    id!: number

    @ManyToOne(() => Push)
    @JoinColumn({ name: 'push_id'})
    push!: Push

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user!: User

    @Column({ nullable: true, comment: '단말기토큰'})
    deviceToken?: string

    @Column({ default: false, comment: '읽음여부'})
    readTf!: boolean

    @Column({ nullable: true, comment: '읽음일시'})
    readDt?: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number      
}