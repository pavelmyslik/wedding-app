-- CreateTable
CREATE TABLE "RSVP" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "attending" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RSVP_pkey" PRIMARY KEY ("id")
);
