import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ synchronize: false })
export class Participant {

    @PrimaryGeneratedColumn({comment: '참여자ID'})
    id!: number

    @Column({nullable: false, comment: '직원번호'})
    empNo!: string

    @Column({nullable: false, comment: '고객사번호'})
    clcoNo!: string

    @Column({nullable: false, comment: '참여자구분코드'})
    sctnCd!: string

    @Column({nullable: false, comment: '참여자명'})
    name!: string

    @Column({comment: '고객사부서코드'})
    clcoDeptCd?: string

    @Column({nullable: false, comment: '참여자생년월일'})
    birth!: string

    @Column({nullable: false, comment: '휴대폰번호'})
    mobile!: string

    @Column({nullable: false, comment: '이메일'})
    email!: string

    @Column({nullable: false, comment: '이용시작일시'})
    utztnBgngDt!: Date

    @Column({nullable: false, comment: '이용제한일시'})
    utztnRstrDt!: Date

    @Column({comment: '고객키'})
    authKey?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number       
}