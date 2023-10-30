import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ synchronize: false })
export class AppVersion {

    @PrimaryGeneratedColumn({comment: '앱버전ID'})
    id!: number
        
    @Column({nullable: false, comment: '앱OS'})
    appOs!: string

    @Column({nullable: false, comment: '앱버전'})
    appVersion!: string

    @Column({nullable: false, comment: '강제여부(메이저/마이너'})
    forceTf!: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", comment: '생성일시'  })
    createdAt!: Date

    @Column({nullable: false, default: 0, comment: '생성자ID'})
    createdId!: Number

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", comment: '수정일시'  })
    updatedAt!: Date

    @Column({nullable: false, default: 0, comment: '수정자ID'})
    updatedId!: Number     
}