import { JoinColumn, ManyToOne, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from 'typeorm';
import { PushUser } from './push_user.entity';

@Entity({ synchronize: false })
export class Push {

    @PrimaryGeneratedColumn({comment: '푸시ID'})
    id!: number

    @Column({comment: '푸시명'})
    name!: string

    @Column({comment: '푸시 타입'})
    typeCd!: string

    @Column({ nullable: true, comment: '예약발송일시' })
    reservation?: Date

    @Column({comment: '푸시대상'})
    targetCd!: string    

    @Column({comment: '푸시내용'})
    content!: string

    @Column({ nullable: true, comment: '링크'})
    link?: string

    @Column({ default: '10', comment: '푸시상태'})
    statusCd!: string

    @Column({ nullable: true, comment: '발송일시' })
    departure?: Date

    @OneToMany(() => PushUser, (pushUser) => pushUser.push, { cascade: true })
    @JoinColumn({ name: 'push_id'})
    pushUser?: PushUser[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시'  })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시'  })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number    
}