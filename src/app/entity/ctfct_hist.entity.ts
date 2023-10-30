import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ synchronize: false })
export class CtfctHist {

    @PrimaryGeneratedColumn({comment: '인증ID'})
    id!: number

    @Column({comment: '인증타입'})
    ctfctTypeCd!: string

    @Column({comment: '인증번호'})
    ctfctNo!: string

    @Column({nullable: true, comment: '전화번호'})
    mobile?: string

    @Column({ nullable: true, comment: '이메일'})
    email?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number   
}