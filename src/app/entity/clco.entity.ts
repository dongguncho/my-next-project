import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ synchronize: false })
export class Clco {
    
    @PrimaryGeneratedColumn({comment: '기업ID'})
    id!: number

    @Column({nullable: false, comment: '기업명'})
    name!: string
    
    @Column({nullable: false, comment: '기업상태코드'})
    statusCd!: string

    @Column({nullable: false, comment: '기업구분코드'})
    typeCd!: string
    
    @Column({nullable: true, comment: '기업포인트'})
    point!: number

    @Column({ comment: '사용시작일자'})
    useStartDt!: string

    @Column({ comment: '사용종료일자'})
    useEndDt!: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number    
}