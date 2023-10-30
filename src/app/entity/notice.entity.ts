import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ synchronize: false })
export class Notice {
    
    @PrimaryGeneratedColumn({comment: '공지사항ID'})
    id!: number

    @Column({nullable: false, comment: '제목'})
    title!: string

    @Column("longtext", {nullable: false, comment: '내용'})
    content!: string

    @Column({nullable: false, comment: '노출대상구분'})
    viewTargetCd!: string

    @Column({nullable: true, comment: '기업ID'})
    clcoId!: number

    @Column({default: false, nullable: false, comment: '사용여부'})
    useTf!: boolean
    
    @Column({default: 0, nullable: false, comment: '조회수'})
    views!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number    
}