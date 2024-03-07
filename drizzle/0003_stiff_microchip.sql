ALTER TABLE "comments" ADD COLUMN "created_at" timestamp;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "user_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
