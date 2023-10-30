import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ synchronize: false })
export class Terms {

    @PrimaryGeneratedColumn({comment: '약관ID'})
    id!: number

    @Column({nullable: false, comment: '약관종류코드'})
    typeCd!: string

    @Column({nullable: false, comment: '약관명'})
    title!: string

    @Column("longtext", {nullable: false, comment: '약관내용'})
    contents!: string

    @Column({nullable: false, comment: '필수여부'})
    essentialTf!: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number      
}