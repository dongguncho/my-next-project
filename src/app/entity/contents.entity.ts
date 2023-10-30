import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Program } from './program.entity';
import { ContentsUser } from './contents_user.entity';


@Entity({ synchronize: false })
export class Contents {

    @PrimaryGeneratedColumn({comment: '콘텐츠ID'})
    id!: number

    @Column({default: false, comment: '사용여부'})
    useTf!: boolean

    @Column({nullable: false, comment: '콘텐츠 타입'})
    typeCd!: string
    
    @Column({nullable: true, comment: '썸네일이미지링크'})
    thumbnailImageUrl?: string
    
    @Column({nullable: true, comment: '비디오링크'})
    videoUrl?: string

    @Column({nullable: true, comment: '이미지링크'})
    imageUrl?: string
    
    @Column({nullable: false, comment: '콘텐츠 제목'})
    title!: string

    @Column({nullable: true, comment: '콘텐츠 텍스트'})
    text?: string

    @Column({nullable: true, comment: '콘텐츠 설명'})
    desc?: string

    @Column({nullable: false, comment: '루틴타입'})
    routineTypeCd!: string
    
    @Column({nullable: false, comment: '루틴일자'})
    routineDay!: number
    
    @ManyToOne(() => Program)
    @JoinColumn({ name: 'program_id'})
    program!: Program

    @OneToMany(() => ContentsUser, (contentsUser) => contentsUser.contents, { cascade: true})
    @JoinColumn({ name: 'contents_id'})
    contentsUser?: ContentsUser[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시' })
    createdAt?: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시' })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number      

}