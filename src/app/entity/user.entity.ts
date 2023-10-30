import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Length, MinLength } from 'class-validator';
@Entity({ synchronize: false })
export class User {

    @PrimaryGeneratedColumn({comment: '회원ID'})
    id!: number

    @Column({ nullable: true, comment: '기업ID' })
    clcoId?: number

    @Column({ nullable: true, comment: '부서코드' })
    clcoDeptCd?: string

    @Column({ nullable: true, comment: '사번' })
    empNo?: string

    @MinLength(2, {
        message: 'name is too short'
    })
    @Column({comment: '회원이름'})
    name!: string

    @Column({ nullable: true, comment: '회원별칭' })
    nickName?: string    

    @MinLength(5, {
        message: 'email is too short'
    })
    @Column({ unique: true, comment: '이메일' })
    email!: string

    @Column({comment: '비밀번호'})
    password!: string

    @Column({comment: '솔트값'})
    salt!: string

    @Length(10, 10, {
        message: 'birth string is YYYY-MM-DD'
    })
    @Column({comment: '생년월일'})
    birth!: string

    @Length(1, 1, {
        message: 'genCd string is M or F'
    })
    @Column({comment: '성별'})
    genCd!: string

    @Length(10, 11, {
        message: 'mobile string is 00011112222 / 0001112222'
    })
    @Column({ unique: true, comment: '휴대폰번호' })
    mobile!: string

    @Column({comment: '회원상태코드'})
    userStatusCd!: string

    @Column({nullable: true, comment: '단말토큰값' })
    deviceToken?: string

    @Column({nullable: true, comment: '단말uuid' })
    deviceUuid?: string

    @Column({nullable: true, comment: '단말모델명' })
    deviceModel?: string

    @Column({nullable: true, comment: '단말OS명' })
    deviceOs?: string

    @Column({nullable: true, comment: '단말OS버전명' })
    deviceOsVersion?: string

    @Column({nullable: true, comment: '단말앱버전명' })
    deviceAppVersion?: string

    @Column({nullable: true, comment: '로그인일시' })
    loginTime?: string

    @Column({nullable: true, comment: '로그아웃일시' })
    logoutTime?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시'  })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시'  })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number
}