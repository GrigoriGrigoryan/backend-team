import {MigrationInterface, QueryRunner} from "typeorm";

export class init11643129384349 implements MigrationInterface {
    name = 'init11643129384349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_0b0e4bbc8415ec426f87f3a88e2"`);
        await queryRunner.query(`ALTER TABLE "leaf" DROP CONSTRAINT "PK_0eaba64c86a98a60f443a7ab2bb"`);
        await queryRunner.query(`ALTER TABLE "leaf" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "leaf" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "leaf" ADD CONSTRAINT "PK_0eaba64c86a98a60f443a7ab2bb" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "comment_id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "comment_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a" PRIMARY KEY ("comment_id")`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_0b0e4bbc8415ec426f87f3a88e2" FOREIGN KEY ("id") REFERENCES "leaf"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_0b0e4bbc8415ec426f87f3a88e2"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "comment_id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "comment_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a" PRIMARY KEY ("comment_id")`);
        await queryRunner.query(`ALTER TABLE "leaf" DROP CONSTRAINT "PK_0eaba64c86a98a60f443a7ab2bb"`);
        await queryRunner.query(`ALTER TABLE "leaf" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "leaf" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "leaf" ADD CONSTRAINT "PK_0eaba64c86a98a60f443a7ab2bb" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_0b0e4bbc8415ec426f87f3a88e2" FOREIGN KEY ("id") REFERENCES "leaf"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
