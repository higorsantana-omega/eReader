import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Book {
  @PrimaryColumn()
  id?: string;

  @Column()
  book_name: string;

  @Column()
  author: string;

  @Column()
  categories: string;

  @Column()
  book_rating: number;

  @Column()
  publisher: string;

  @Column()
  year: number;

  @Column()
  pages: number;

  @Column()
  volume: number;

  @Column()
  edition: number;

  @Column()
  language: string;

  @Column()
  file: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Book };
