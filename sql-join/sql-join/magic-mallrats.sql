select "c"."firstName",
       "c"."lastName",
       "films"."title" as "Movie Rented"
  from "customers" as "c"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
