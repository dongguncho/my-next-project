import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Program } from "./program.entity";
import { ContentsUser } from "./contents_user.entity";

@Entity({ synchronize: false })
export class ProgramUser {

    @PrimaryGeneratedColumn({comment: '회원프로그램ID'})
    id?: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user!: User

    @Column({nullable: false, comment: '유저아이디'})
    userId!: number

    @ManyToOne(() => Program)
    @JoinColumn({ name: 'program_id'})
    program!: Program

    @OneToMany(() => ContentsUser, (contentsUser) => contentsUser.programUser, { cascade: true})
    @JoinColumn({ name: 'program_user_id'})
    contentsUser?: ContentsUser[]

    @Column({nullable: false, comment: '회원프로그램회차'})
    order!: number

    @Column({ type: "timestamp", nullable: true, comment: '프로그램 시작일시'})
    startDt?: Date

    @Column({ type: "timestamp", nullable: true, comment: '프로그램 완료일시'})
    endDt?: Date

    @Column({nullable: false, default: false, comment: '프로그램 완료여부'})
    endTf?: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number   
}