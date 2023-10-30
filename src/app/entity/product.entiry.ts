import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ synchronize: false })
export class Product {

    @PrimaryGeneratedColumn({comment: '상품ID'})
    id!: number

    @Column({ nullable:true, comment: '상품명'})
    name!: string

    @Column({ nullable:true, comment: '상품이미지링크'})
    imageUrl!: string
    
    @Column({ nullable:false, comment: '사용여부'})
    useTf!: boolean

    @Column({ nullable:false, comment: '구매포인트'})
    point!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number  
}