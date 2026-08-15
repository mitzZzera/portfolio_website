CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`tags` text NOT NULL,
	`link` text,
	`image_key` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
