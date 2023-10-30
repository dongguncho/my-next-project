import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { Contents } from './contents.entity';
import { ProgramUser } from './program_user.entity';


@Entity({ synchronize: false })
export class Program {

    @PrimaryGeneratedColumn({comment: '프로그램ID'})
    id!: number

    @Column({nullable: true, comment: '프로그램명'})
    name!: string
    
    @Column({nullable: false, comment: '통증지수타입'})
    vasType!: string
    
    @Column({nullable: false, default: 0, comment: '프로그램진행일수'})
    dayCnt!: number
    
    @Column({default: false, comment: '사용여부'})
    useTf!: boolean
        
    @OneToMany(() => Contents, (contents) => contents.program, { cascade: true })
    @JoinColumn({ name: 'contents_id'})
    contents?: Contents[]

    @OneToMany(() => ProgramUser, (programUser) => programUser.program, { cascade: true})
    @JoinColumn({ name: 'program_id'})
    programUser?: ProgramUser[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number    

}