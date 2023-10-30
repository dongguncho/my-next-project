import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contents } from "./contents.entity";
import { ProgramUser } from "./program_user.entity";
import { User } from "./user.entity";


@Entity({ synchronize: false })
export class ContentsUser {

    @PrimaryGeneratedColumn({comment: '회원프로그램콘텐츠ID'})
    id!: number

    @ManyToOne(() => ProgramUser)
    @JoinColumn({ name: 'program_user_id'})
    programUser!: ProgramUser

    @ManyToOne(() => Contents)
    @JoinColumn({ name: 'contents_id'})
    contents!: Contents

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user!: User
    
    @Column({type: "timestamp", nullable: false, comment: '콘텐츠 이수완료일'})
    completeDt!: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number  
}