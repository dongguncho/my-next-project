import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ synchronize: false })
export class UserWithdrawalHist {

    @PrimaryGeneratedColumn({comment: '회원탈퇴이력ID'})
    id!: number

    @Column({nullable: false, comment: '탈퇴이유코드' })
    withdrawalCd!: string

    @Column({nullable: true, comment: '내용' })
    contents?: string

    @Column({ default: () => "'2999-12-31'", comment: '이력일자'})
    histDt!: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시'  })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시'  })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number
}