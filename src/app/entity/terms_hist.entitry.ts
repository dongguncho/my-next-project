import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Terms } from './terms.entity';

@Entity({ synchronize: false })
export class TermsHist {

    @PrimaryGeneratedColumn({comment: '약관이력ID'})
    id!: number

    @ManyToOne(() => Terms)
    @JoinColumn({ name: 'terms_id'})
    termsId?: Terms

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user?: User

    @Column({comment: '유저아이디'})
    userId!: number

    @Column({nullable: false, default: true, comment: '동의여부'})
    agreementTf!: boolean

    @Column({nullable: false, comment: '약관명'})
    title!: string

    @Column("longtext", {nullable: false, comment: '약관내용'})
    contents!: string

    @Column({ default: () => "'2999-12-31'", comment: '이력일자'})
    histDt!: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number      
}