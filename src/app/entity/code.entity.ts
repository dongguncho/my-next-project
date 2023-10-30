import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ synchronize: false })
export class Code {

    @PrimaryGeneratedColumn({comment: '코드ID'})
    id!: number

    @Column({comment: '그룹'})
    group!: string

    @Column({comment: '그룹명'})
    groupName!: string

    @Column({comment: '코드'})
    code!: string

    @Column({ nullable: true, comment: '코드명'})
    codeName?: string
    
    @Column({ nullable: true, comment: '설명' })
    description?: string

    @Column({ default: true, comment: '사용여부' })
    useTf!: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: true, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: true, comment: '수정자ID'})
    updatedId!: Number    
}