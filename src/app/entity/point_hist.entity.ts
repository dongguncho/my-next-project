import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Clco } from './clco.entity';
import { Product } from './product.entiry';

@Entity({ synchronize: false })
export class PointHist {

    @PrimaryGeneratedColumn({comment: '포인트이력ID'})
    id!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @ManyToOne(() => Clco)
    @JoinColumn({ name: 'clco_id'})
    clco?: Clco

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id'})
    product?: Product

    @Column({nullable: true, comment: '상품ID'})
    productId!: number

    @Column({ nullable:false, comment: '포인트'})
    point!: number

    @Column({ nullable:false, comment: '누적사유'})
    reason!: string
    
    @Column({ default: () => "'2999-12-31'", comment: '누적일시'})
    pointDt!: Date 
    
    @Column({ default:false, comment: '포인트사용여부'})
    pointUseTf!: boolean

    @Column({ nullable:true, comment: '발송일시'})
    sendDt?: Date

    @Column({ nullable:true, comment: '발송상태코드'})
    sendStatusCd?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number  
}