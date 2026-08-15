import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const projects=sqliteTable("projects",{id:integer("id").primaryKey({autoIncrement:true}),title:text("title").notNull(),description:text("description").notNull(),tags:text("tags").notNull(),link:text("link"),imageKey:text("image_key"),createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)});
