import { Length } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ synchronize: false })
export class Manager {

    @PrimaryGeneratedColumn({comment: '관리자ID'})
    id!: number

    @Column({ nullable: false, comment: '아이디' })
    managerId!: string
    
    @Column({ nullable: false, comment: '비밀번호' })
    password!: string

    @Column({comment: '관리자구분코드'})
    typeCd!: string
    
    @Column({comment: '관리자상태코드'})
    statusCd!: string

    @Column({default: false, comment: '사용여부'})
    useTf!: boolean
    
    @Column({comment: '기업ID'})
    clcoId!: number
    
    @Column({comment: '부서코드'})
    clcoDeptCd!: number

    @Column({ nullable: true, comment: '이름' })
    name!: string

    @Column({ unique: true, comment: '이메일' })
    email!: string

    @Length(10, 11, {
        message: 'mobile string is 00011112222 / 0001112222'
    })
    @Column({ unique: true, comment: '휴대폰번호' })
    mobile!: string

    @Column({nullable: true, comment: '솔트값'})
    salt!: string

    // @Column({ default: () => "'2999-12-31'", comment: '사용시작일'})
    // useStartYmd!: string
    
    // @Column({ default: () => "'2999-12-31'", comment: '사용종료일'})
    // useEndYmd!: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number 
}